import { profileSnapshot } from "@/lib/portfolio-data"

export async function getGitHubProfile() {
  try {
    const response = await fetch("https://api.github.com/users/AyoubCherguelaine", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) throw new Error("GitHub unavailable")
    const data = await response.json()
    for (const key of ["public_repos", "followers", "following"]) {
      if (!Number.isInteger(data[key]) || data[key] < 0) throw new Error("Invalid GitHub profile")
    }
    return { publicRepos: data.public_repos as number, followers: data.followers as number, following: data.following as number }
  } catch {
    return profileSnapshot.github
  }
}
