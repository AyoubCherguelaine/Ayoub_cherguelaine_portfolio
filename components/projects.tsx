import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { profileSnapshot, type Project, type ProjectLinkStatus, projects } from "@/lib/portfolio-data"

const statusLabel: Record<ProjectLinkStatus, string> = {
  private: "Private Assets",
  request: "Demo on Request",
  coming_soon: "Coming Soon",
  available: "Open Source",
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col gap-4 border border-[#2a2a2a] bg-[#0c0c0c] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d2be] hover:shadow-xl hover:shadow-[#00d2be]/10">
      <Link href={`/projects/${project.id}`} className="relative overflow-hidden rounded-3xl border border-border/70">
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          width={1200}
          height={720}
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
      </Link>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-balance transition-colors group-hover:text-primary">{project.title}</h3>
          <Badge variant="outline" className="shrink-0 border-[#00d2be]/30 text-[#00d2be]">
            Case Study
          </Badge>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Problem:</span> {project.problem}
        </p>
        <p>
          <span className="font-medium text-foreground">Solution:</span> {project.solution}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="border border-[#333] bg-[#1a1a1a] text-[#d4d4d4]">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button asChild variant="outline" size="sm">
          <Link href={`/projects/${project.id}`}>
            View details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-[#00d2be] transition-colors hover:text-[#d4d4d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Github size={16} />
            Code
          </a>
        )}

        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-[#00d2be] transition-colors hover:text-[#d4d4d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}

        {project.links.status && (
          <Badge variant="outline" className="border-[#00d2be]/30 text-[#00d2be]">
            {statusLabel[project.links.status]}
          </Badge>
        )}
      </div>
    </Card>
  )
}

export default function Projects() {
  const featuredProjects = projects
    .filter((project) => project.visibility === "featured")
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
  const moreProjects = projects
    .filter((project) => project.visibility === "more")
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))

  return (
    <section id="projects" className="section-anchor reveal-up px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
          <p className="max-w-3xl text-muted-foreground">
            Production-focused AI systems and data products with detailed implementation notes, confidentiality-safe private case studies,
            and verified public evidence (snapshot: {profileSnapshot.verifiedLabel}).
          </p>
        </div>

      <div className="stagger-children grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <details className="group rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-full px-5 py-4 text-sm font-semibold">
            <span>More Work ({moreProjects.length})</span>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="stagger-children grid gap-6 border-t border-[#2a2a2a] p-5 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </details>
      )}
      </div>
    </section>
  )
}
