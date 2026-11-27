import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play } from "lucide-react"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  getProjectById,
  profileSnapshot,
  projects,
  type ProjectLinkStatus,
  type PublicEvidence,
} from "@/lib/portfolio-data"
import { absoluteUrl } from "@/lib/site-config"

type PageProps = {
  params: Promise<{ id: string }>
}

const statusLabel: Record<ProjectLinkStatus, string> = {
  private: "Private Assets",
  request: "Demo on Request",
  coming_soon: "Coming Soon",
  available: "Open Source",
  demo_only: "Closed Source · Demo Only",
}

const evidencePlatformLabel: Record<PublicEvidence["platform"], string> = {
  github: "GitHub",
  huggingface_model: "HF Model",
  huggingface_dataset: "HF Dataset",
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

function getVideoEmbedUrl(videoUrl?: string): string | null {
  if (!videoUrl) return null

  try {
    const url = new URL(videoUrl)
    const host = url.hostname.replace(/^www\./, "")
    const videoId = host === "youtu.be"
      ? url.pathname.split("/")[1]
      : host === "youtube.com" || host === "youtube-nocookie.com"
        ? url.pathname === "/watch"
          ? url.searchParams.get("v")
          : /^\/(embed|shorts)\//.test(url.pathname)
            ? url.pathname.split("/")[2]
            : null
        : null

    return videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null
  } catch {
    return null
  }
}

function CaseStudyNotes({
  id,
  title,
  notes,
}: {
  id: string
  title: string
  notes: { title: string; content: string }[]
}) {
  return (
    <section aria-labelledby={id} className="py-3 sm:py-5">
      <h2 id={id} className="project-display mb-6 text-[clamp(2.25rem,4vw,3.25rem)] sm:mb-8">
        {title}
      </h2>
      <div className="divide-y divide-(--work-border) border-y border-(--work-border)">
        {notes.map((note) => (
          <div key={note.title} className="grid gap-2 py-5 sm:py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] md:gap-8">
            <h3 className="text-lg leading-snug font-semibold text-(--work-accent) sm:text-xl">
              {note.title}
            </h3>
            <p className="max-w-[67ch] text-base leading-[1.75] text-(--work-muted)">
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </section>
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

  const videoEmbedUrl = getVideoEmbedUrl(project.links.video)
  const overview = [
    { title: "Timeline", content: project.details.timeline },
    { title: "Role & Scope", content: project.details.roleScope },
    { title: "Team Setup", content: project.details.teamSetup },
  ]
  const contextNotes = [
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
    { title: "Impact", content: project.impact },
  ]
  const implementationNotes = [
    { title: "Architecture", content: project.details.architecture },
    { title: "Data & Evaluation", content: project.details.dataEvaluation },
    { title: "Production & Ops", content: project.details.productionOps },
    { title: "Lessons Learned", content: project.details.lessonsLearned },
  ]

  const projectIndex = projects.findIndex((item) => item.id === project.id)
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  const publicEvidence = (project.publicEvidence ?? []).filter(
    (evidence) => evidence.visibility === "public",
  )
  const latestVerification = publicEvidence.reduce(
    (latest, evidence) =>
      evidence.verifiedOn > latest ? evidence.verifiedOn : latest,
    profileSnapshot.verifiedOn as string,
  )
  const verifiedLabel = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${latestVerification}T00:00:00Z`))

  return (
    <main className="portfolio-shell project-showcase min-h-screen bg-background px-4 py-14 text-foreground sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </Button>
          <Badge
            variant="outline"
            className="border-primary/30 px-3 py-1 text-primary"
          >
            Case Study
          </Badge>
        </div>

        <header className="space-y-5">
          <h1 className="text-4xl font-medium tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3" aria-label="Project links">
            {project.links.video && (
              <Button asChild size="lg" className="min-h-11">
                <a href={videoEmbedUrl ? "#demo-video" : project.links.video}>
                  <Play aria-hidden="true" />
                  Watch Demo
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button asChild size="lg" variant={project.links.video ? "outline" : "default"} className="min-h-11">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild size="lg" variant={project.links.demo || project.links.video ? "outline" : "default"} className="min-h-11">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github aria-hidden="true" />
                  Repository
                </a>
              </Button>
            )}
            {project.links.status && (
              <Badge variant="outline" className="border-primary/30 text-primary">
                {statusLabel[project.links.status]}
              </Badge>
            )}
          </div>
        </header>

        {videoEmbedUrl && (
          <section id="demo-video" aria-labelledby="demo-video-heading" className="scroll-mt-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="demo-video-heading" className="text-2xl font-semibold">
                Project Demo
              </h2>
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Watch on YouTube
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-border/80 bg-black">
              <iframe
                src={videoEmbedUrl}
                title={`${project.title} — demo video`}
                width="1280"
                height="720"
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <a
          href={project.heroImage?.src ?? project.coverImage}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full-size image: ${project.title}`}
          className={`relative block overflow-hidden rounded-xl border border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${project.heroImage?.focusClassName ? "aspect-[1280/790]" : ""}`}
        >
          <Image
            src={project.heroImage?.src ?? project.coverImage}
            alt={project.heroImage?.alt ?? `${project.title} cover`}
            width={project.heroImage?.width ?? (project.screenshots?.length ? 1600 : 1200)}
            height={project.heroImage?.height ?? (project.screenshots?.length ? 1200 : 720)}
            sizes="(min-width: 1088px) 1280px, 125vw"
            priority
            className={project.heroImage?.focusClassName ?? "h-auto w-full object-cover"}
          />
        </a>

        {project.screenshots?.length ? (
          <section className="space-y-5" aria-labelledby="screenshots-heading">
            <div className="space-y-2">
              <h2 id="screenshots-heading" className="text-2xl font-semibold">
                Inside the Platform
              </h2>
              <p className="text-sm text-muted-foreground">
                Screenshots from the running application. Open any image to inspect it at full size.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-border bg-card/70">
                  <a
                    href={screenshot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                    aria-label={`Open full-size image: ${screenshot.alt}`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={screenshot.width}
                      height={screenshot.height}
                      sizes="(min-width: 768px) 500px, calc(100vw - 32px)"
                      className="h-auto w-full"
                    />
                  </a>
                  <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section aria-label="Project overview">
          <dl className="grid divide-y divide-(--work-border) border-y border-(--work-border) md:grid-cols-3 md:divide-x md:divide-y-0">
            {overview.map(({ title, content }) => (
              <div key={title} className="py-5 md:px-6 md:py-6 md:first:pl-0 md:last:pr-0">
                <dt className="text-lg font-semibold text-(--work-accent)">{title}</dt>
                <dd className="mt-2 max-w-[67ch] text-base leading-relaxed text-(--work-muted)">
                  {content}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <CaseStudyNotes id="project-context" title="Context" notes={contextNotes} />
        <CaseStudyNotes id="implementation-details" title="Implementation Details" notes={implementationNotes} />

        <section className="space-y-4 rounded-xl border border-border bg-card/70 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Public Evidence</h2>
            {publicEvidence.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Last verified: {verifiedLabel}
              </p>
            )}
          </div>

          {publicEvidence.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {publicEvidence.map((evidence) => {
                const metrics = formatMetrics(evidence.metrics)

                return (
                  <div
                    key={evidence.url}
                    className="rounded-xl border border-border bg-background/70 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {evidence.label}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
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
                          <Badge
                            key={metric}
                            variant="secondary"
                            className="text-xs"
                          >
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : project.links.status === "demo_only" && project.links.video ? (
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                The demo video is the only public project artifact. Source code is
                private and is not available as open source.
              </p>
              <Button asChild>
                <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                  <Play aria-hidden="true" />
                  Watch Demo
                </a>
              </Button>
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              This case study summarizes production work delivered under private
              repositories and confidentiality constraints. Public artifacts are
              intentionally omitted while keeping the implementation narrative
              transparent.
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
