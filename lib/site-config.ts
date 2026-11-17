const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://portfolio4ayoub.netlify.app"

export const siteConfig = {
  name: "Ayoub Cherguelaine",
  role: "Applied AI Engineer",
  title: "Ayoub Cherguelaine - Applied AI Engineer | Document AI & Agents",
  description:
    "I build Arabic/English document AI and agent systems for legal, insurance & trade-finance teams — from scanned PDF to source-verified answer. Available for projects & retainers.",
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
