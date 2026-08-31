const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

export const siteConfig = {
  name: "Ayoub Cherguelaine",
  role: "AI & NLP Engineer",
  title: "Ayoub Cherguelaine - AI & NLP Engineer",
  description:
    "AI Engineer specializing in Generative AI, LLMs, NLP, and Data Engineering, with strong software engineering expertise and hands-on experience building scalable AI systems. Experienced in LLM fine-tuning, agentic AI, RAG, machine learning, document intelligence, and large-scale data processing pipelines.",
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
