import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectById, profileSnapshot, projects, type ProjectLinkStatus, type PublicEvidence } from "@/lib/portfolio-data"
import { absoluteUrl } from "@/lib/site-config"

type PageProps = {
  params: Promise<{ id: string }>
}

const statusLabel: Record<ProjectLinkStatus, string> = {
  private: "Private Assets",
  request: "Demo on Request",
  coming_soon: "Coming Soon",
}

const evidencePlatformLabel: Record<PublicEvidence["platform"], string> = {
  github: "GitHub",
  huggingface_model: "HF Model",
  huggingface_dataset: "HF Dataset",
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found | Ayoub Cherguelaine",
    }
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.id}`),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/projects/${project.id}`),
      title: project.title,
      description: project.summary,
      images: [
        {
          url: absoluteUrl(`/projects/${project.id}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: `${project.title} case-study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [absoluteUrl(`/projects/${project.id}/twitter-image`)],
    },
  }
}

function DetailPanel({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/70 p-5">
      <h3 className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  )
}

function formatMetrics(metrics?: PublicEvidence["metrics"]) {
  const items: string[] = []

  if (metrics?.downloads !== undefined) {
    items.push(`${metrics.downloads.toLocaleString()} downloads`)
  }
  if (metrics?.likes !== undefined) {
    items.push(`${metrics.likes.toLocaleString()} likes`)
  }
  if (metrics?.stars !== undefined) {
    items.push(`${metrics.stars.toLocaleString()} stars`)
  }

  return items
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex((item) => item.id === project.id)
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  const publicEvidence = (project.publicEvidence ?? []).filter((evidence) => evidence.visibility === "public")

  return (
    <main className="portfolio-shell min-h-screen bg-background px-4 py-14 text-foreground sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </Button>
          <Badge variant="outline" className="border-primary/30 px-3 py-1 text-primary">
            Case Study
          </Badge>
        </div>

        <header className="space-y-5">
          <h1 className="text-3xl font-bold text-balance sm:text-4xl">{project.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{project.summary}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="overflow-hidden rounded-xl border border-border/80">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            width={1200}
            height={720}
            sizes="(min-width: 1024px) 896px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 32px)"
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <DetailPanel title="Timeline" content={project.details.timeline} />
          <DetailPanel title="Role & Scope" content={project.details.roleScope} />
          <DetailPanel title="Team Setup" content={project.details.teamSetup} />
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card/70 p-6">
          <h2 className="text-xl font-semibold">Context</h2>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card/70 p-6">
          <h2 className="text-xl font-semibold">Implementation Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <DetailPanel title="Architecture" content={project.details.architecture} />
            <DetailPanel title="Data & Evaluation" content={project.details.dataEvaluation} />
            <DetailPanel title="Production & Ops" content={project.details.productionOps} />
            <DetailPanel title="Lessons Learned" content={project.details.lessonsLearned} />
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-border bg-card/70 p-6">
          <h2 className="text-xl font-semibold">Links</h2>
          <p className="text-xs text-muted-foreground">Last verified: {profileSnapshot.verifiedLabel}</p>
          <div className="flex flex-wrap items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-chart-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <Github className="h-4 w-4" />
                Repository
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-colors hover:text-chart-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <ExternalLink className="h-4 w-4" />
                Live Artifact
              </a>
            )}

            {project.links.status && (
              <Badge variant="outline" className="border-primary/30 text-primary">
                {statusLabel[project.links.status]}
              </Badge>
            )}
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card/70 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Public Evidence</h2>
            <p className="text-xs text-muted-foreground">Last verified: {profileSnapshot.verifiedLabel}</p>
          </div>

          {publicEvidence.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {publicEvidence.map((evidence) => {
                const metrics = formatMetrics(evidence.metrics)

                return (
                  <div key={evidence.url} className="rounded-xl border border-border bg-background/70 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground">{evidence.label}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {evidencePlatformLabel[evidence.platform]}
                      </Badge>
                    </div>

                    <a
                      href={evidence.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex break-all text-sm font-medium text-primary transition-colors hover:text-chart-2"
                    >
                      {evidence.url}
                    </a>

                    {metrics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {metrics.map((metric) => (
                          <Badge key={metric} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              This case study summarizes production work delivered under private repositories and confidentiality constraints. Public
              artifacts are intentionally omitted while keeping the implementation narrative transparent.
            </p>
          )}
        </section>

        <section className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          {previousProject ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${previousProject.id}`}>
                <ArrowLeft className="h-4 w-4" />
                {previousProject.title}
              </Link>
            </Button>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${nextProject.id}`}>
                {nextProject.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </section>
      </article>
    </main>
  )
}
