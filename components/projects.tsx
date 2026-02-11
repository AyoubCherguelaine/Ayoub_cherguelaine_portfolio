import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronDown, ExternalLink, Github } from "lucide-react"
import { type Project, type ProjectLinkStatus, projects } from "@/lib/portfolio-data"

const statusLabel: Record<ProjectLinkStatus, string> = {
  private: "Private Repo",
  request: "Demo on Request",
  coming_soon: "Coming Soon",
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col border border-border bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/15">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-balance transition-colors group-hover:text-primary">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Problem:</span> {project.problem}
        </p>
        <p>
          <span className="font-medium text-foreground">Solution:</span> {project.solution}
        </p>
        <p>
          <span className="font-medium text-foreground">Impact:</span> {project.impact}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-chart-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-chart-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        {project.links.status && (
          <Badge variant="outline" className="border-primary/30 text-primary">
            {statusLabel[project.links.status]}
          </Badge>
        )}
      </div>
    </Card>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.visibility === "featured")
  const moreProjects = projects.filter((project) => project.visibility === "more")

  return (
    <section id="projects" className="section-anchor reveal-up py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
          <p className="max-w-3xl text-muted-foreground">
            Selected work focused on production LLM systems, applied NLP, and data-centric AI delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {moreProjects.length > 0 && (
          <details className="group rounded-xl border border-border bg-card/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold">
              <span>More Work ({moreProjects.length})</span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="grid gap-6 border-t border-border p-5 md:grid-cols-2 lg:grid-cols-3">
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
