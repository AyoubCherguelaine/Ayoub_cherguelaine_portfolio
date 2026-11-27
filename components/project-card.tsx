import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/lib/portfolio-data"

type CardPreview = Pick<Project, "id" | "title" | "summary" | "coverImage">
export type ProjectPreview = CardPreview & Pick<Project, "tags">

export default function ProjectCard({
  project,
  category,
  imageAlt = "",
  imageSizes = "(min-width: 1455px) 414px, (min-width: 1024px) 29vw, (min-width: 640px) 44vw, 88vw",
}: {
  project: CardPreview & { tags?: Project["tags"] }
  category?: string
  imageAlt?: string
  imageSizes?: string
}) {
  const titleId = `project-${project.id}-title`
  const label = category ?? project.tags?.slice(0, 3).join(" · ")

  return (
    <article className="h-full min-w-0">
      <Link
        href={`/projects/${project.id}`}
        aria-labelledby={titleId}
        className="group grid h-full grid-rows-[auto_1fr] overflow-hidden border border-(--work-border) bg-(--work-panel) transition-colors hover:border-(--work-accent)/60 focus-visible:outline-(--work-accent)"
      >
        <div className="relative aspect-[16/11] overflow-hidden border-b border-(--work-border) bg-(--work-base)">
          <Image
            src={project.coverImage}
            alt={imageAlt}
            fill
            sizes={imageSizes}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start p-4 sm:p-5">
          {label && <p className="eyebrow mb-2 text-(--work-accent)">{label}</p>}
          <h3 id={titleId} className="project-display text-[clamp(2rem,3vw,3rem)]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-(--work-muted)">
            {project.summary}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-(--work-accent) group-hover:underline group-hover:underline-offset-4">
            Read case study <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </div>
      </Link>
    </article>
  )
}
