const { test } = require('node:test')
const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { mkdtemp, rm } = require('node:fs/promises')
const { tmpdir } = require('node:os')
const { join } = require('node:path')
const ts = require('typescript')
const { BlobsServer } = require('@netlify/blobs/server')
const { setEnvironmentContext } = require('@netlify/blobs')
const { NextRequest } = require('next/server')

// Compile the route without starting Next.js; use the real Netlify local store.
function loadTS(path) {
  const output = ts.transpileModule(readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const exports = {}
  new Function('require', 'exports', output)((id) =>
    id.startsWith('@/') ? loadTS(`${id.slice(2)}.ts`) : require(id), exports)
  return exports
}
const { trafficSource } = loadTS('lib/visitor-stats.ts')
const { POST } = loadTS('app/api/visitors/route.ts')

test('campaign tags and LinkedIn referrers', () => {
  for (const tag of ['source=linkedin', 'utm_source=LinkedIn']) {
    assert.equal(trafficSource(new URLSearchParams(tag), ''), 'linkedin')
  }
  assert.equal(trafficSource(new URLSearchParams('source=cv'), 'https://linkedin.com'), 'cv')
  assert.equal(trafficSource(new URLSearchParams(), 'https://www.linkedin.com/feed'), 'linkedin')
  assert.equal(trafficSource(new URLSearchParams(), 'https://linkedin.com.example.org'), 'direct')
  assert.equal(trafficSource(new URLSearchParams(), ''), 'direct')
  assert.equal(trafficSource(new URLSearchParams('source=other'), 'https://linkedin.com'), 'direct')
})

test('persistent totals deduplicate browsers and retain separate sources', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-visitors-'))
  const server = new BlobsServer({ directory, token: 'test-token' })
  const { port } = await server.start()
  const address = `http://localhost:${port}`
  setEnvironmentContext({ siteID: 'test-site', token: 'test-token', edgeURL: address, uncachedEdgeURL: address })
  function request(search, cookie, headers = {}) {
    return new NextRequest('https://portfolio.example/api/visitors', {
      method: 'POST',
      headers: { 'content-type': 'application/json', origin: 'https://portfolio.example', ...(cookie ? { cookie } : {}), ...headers },
      body: JSON.stringify({ search, referrer: '' }),
    })
  }
  try {
    const first = await POST(request('?source=linkedin'))
    assert.equal(first.status, 200)
    assert.deepEqual(await first.json(), { total: 1, linkedin: 1, cv: 0 })
    const cookie = first.headers.get('set-cookie').split(';')[0]
    assert.match(first.headers.get('set-cookie'), /HttpOnly/i)
    assert.match(first.headers.get('set-cookie'), /Secure/i)
    const refreshes = await Promise.all(Array.from({ length: 3 }, () => POST(request('?source=linkedin', cookie))))
    for (const refresh of refreshes) assert.deepEqual(await refresh.json(), { total: 1, linkedin: 1, cv: 0 })
    const cv = await POST(request('?source=cv', cookie))
    assert.deepEqual(await cv.json(), { total: 1, linkedin: 1, cv: 1 })
    const second = await POST(request(''))
    assert.deepEqual(await second.json(), { total: 2, linkedin: 1, cv: 1 })
    // Reopening the same store preserves counts (no process-local counter).
    setEnvironmentContext({ siteID: 'test-site', token: 'test-token', edgeURL: address, uncachedEdgeURL: address })
    assert.deepEqual(await (await POST(request('', cookie))).json(), { total: 2, linkedin: 1, cv: 1 })
    assert.equal((await POST(request('', cookie, { origin: 'https://other.example' }))).status, 403)
    assert.equal((await POST(request('', cookie, { 'user-agent': 'Googlebot' }))).status, 204)
    const malformed = new NextRequest('https://portfolio.example/api/visitors', { method: 'POST', body: '{}' })
    assert.equal((await POST(malformed)).status, 400)
  } finally {
    await server.stop()
    await rm(directory, { recursive: true, force: true })
    setEnvironmentContext({})
  }
})
