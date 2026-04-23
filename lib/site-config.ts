const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

export const siteConfig = {
  name: "Ayoub Cherguelaine",
  role: "AI & NLP Engineer",
  title: "Ayoub Cherguelaine - AI & NLP Engineer",
  description:
    "AI & NLP Engineer building production-grade language systems, agentic pipelines, and document intelligence products.",
  url: baseUrl,
  email: "cherguelainea@gmail.com",
  location: "Riyadh, Saudi Arabia",
  links: {
    github: "https://github.com/AyoubCherguelaine",
    linkedin: "https://www.linkedin.com/in/ayoub-cherguelaine",
    huggingface: "https://huggingface.co/AyoubChLin",
  },
} as const

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}
