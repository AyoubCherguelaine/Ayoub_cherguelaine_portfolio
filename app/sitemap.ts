import type { MetadataRoute } from "next"
import { projects, profileSnapshot } from "@/lib/portfolio-data"
import { absoluteUrl } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = profileSnapshot.verifiedOn

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}
