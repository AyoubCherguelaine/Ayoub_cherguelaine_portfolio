import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import ProjectCatalog from "@/components/project-catalog"
import { projects } from "@/lib/portfolio-data"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse Ayoub Cherguelaine’s projects in applied AI, data engineering, and software.",
  alternates: { canonical: absoluteUrl("/projects") },
}

export default function ProjectsPage() {
  const catalog = projects
    .slice()
    .sort((a, b) =>
      Number(b.visibility === "featured") - Number(a.visibility === "featured")
      || (a.priority ?? Number.MAX_SAFE_INTEGER) - (b.priority ?? Number.MAX_SAFE_INTEGER),
    )
    .map(({ id, title, summary, coverImage, tags }) => ({ id, title, summary, coverImage, tags }))

  return (
    <main className="project-showcase min-h-screen bg-(--work-base) px-[6%] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <Link href="/#projects" className="project-text-link">
          <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
        </Link>
        <header className="mt-7 mb-9 sm:mt-10 sm:mb-12">
          <h1 className="project-display text-[clamp(3.25rem,7vw,6rem)]">All Projects</h1>
          <p className="mt-3 max-w-xl text-(--work-muted)">
            Explore case studies in applied AI, data engineering, and software.
          </p>
        </header>
        <ProjectCatalog projects={catalog} />
      </div>
    </main>
  )
}
