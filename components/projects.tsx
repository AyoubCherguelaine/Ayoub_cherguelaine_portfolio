import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import ProjectCard from "@/components/project-card"
import { getProjectById, projects } from "@/lib/portfolio-data"

type SelectedProject = {
  id: string
  title: string
  category: string
  summary: string
  imageAlt: string
  image?: string
}

type FeaturedWork = SelectedProject & {
  headline: string
  emphasis: string
  subtitle: string
  imageWidth: number
  imageHeight: number
}

const featuredWork: FeaturedWork[] = [
  {
    id: "doctool-document-ai",
    title: "DOCTool",
    category: "Document AI",
    headline: "From documents",
    emphasis: "to usable data.",
    subtitle: "A bilingual document AI workspace",
    summary: "Extract structured data from Arabic and English invoices, contracts, and forms. Review the results against the source in the workspace or connect the same workflow to an application through the API.",
    imageAlt: "DOCTool invoice playground with an extraction schema and structured JSON output",
    imageWidth: 1600,
    imageHeight: 1100,
  },
  {
    id: "qatari-legal-ai",
    title: "Qatari Legal AI",
    category: "Legal research",
    headline: "Research Qatari law",
    emphasis: "with citations.",
    subtitle: "Arabic legal research and consultation",
    summary: "Ask questions about Qatari law in Arabic and follow citations back to the relevant articles. The consultation workspace keeps case facts and unresolved questions available across follow-ups.",
    imageAlt: "Qatari Legal AI research interface in Arabic",
    imageWidth: 1280,
    imageHeight: 720,
  },
]

const moreWork: SelectedProject[] = [
  {
    id: "chat-with-database",
    title: "QueryLens",
    category: "Data analytics",
    summary: "Ask questions about spreadsheets and databases, then inspect the SQL behind each answer.",
    image: "/projects/querylens/chart-current.png",
    imageAlt: "QueryLens showing a grouped revenue chart generated from three data tables",
  },
  {
    id: "mustashar-data-platform",
    title: "Mustashar",
    category: "Data pipelines",
    summary: "Turn education regulations and salary data into cited answers in Arabic.",
    imageAlt: "Mustashar dashboard showing source pipelines and dataset metrics",
  },
]

function FeaturedProject({ work }: { work: FeaturedWork }) {
  const project = getProjectById(work.id)
  if (!project) return null

  const titleId = `selected-${work.id}-title`

  return (
    <article aria-labelledby={titleId} className="overflow-hidden border border-(--work-border) bg-(--work-panel)">
      <div className="selected-work-banner relative isolate flex flex-col md:min-h-[clamp(23rem,32vw,30rem)]">
        <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-6 md:max-w-[47%] lg:p-7">
          <p className="eyebrow text-(--work-accent)">{work.category}</p>
          <p className="project-display mt-4 text-[clamp(2.25rem,4.25vw,4.25rem)] md:my-auto md:py-5">
            {work.headline}<br />
            <em className="text-(--work-accent)">{work.emphasis}</em>
          </p>
        </div>
        <div className="flex items-center justify-end px-4 pb-4 sm:px-6 sm:pb-6 md:absolute md:inset-y-5 md:right-6 md:w-[54%] md:p-0 lg:right-7">
          <Image
            src={work.image ?? project.coverImage}
            alt={work.imageAlt}
            width={work.imageWidth}
            height={work.imageHeight}
            sizes="(min-width: 1600px) 780px, (min-width: 768px) 49vw, 82vw"
            className="h-auto max-h-full w-full max-w-full border border-white/20 object-contain shadow-2xl shadow-black/45 md:w-auto"
          />
        </div>
      </div>

      <div className="grid gap-3 border-t border-(--work-border) p-4 sm:p-6 md:grid-cols-2 md:gap-8 lg:p-7">
        <div>
          <h3 id={titleId} className="text-[clamp(1.9rem,3vw,2.65rem)] leading-tight font-semibold tracking-tight text-(--work-text)">
            {work.title}
          </h3>
          <p className="mt-2 text-(--work-muted)">{work.subtitle}</p>
        </div>
        <div>
          <p className="max-w-xl text-base leading-relaxed text-(--work-muted)">{work.summary}</p>
          <Link href={`/projects/${work.id}`} aria-label={`Read ${work.title} case study`} className="project-text-link mt-2">
            Read case study <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="selected-work-title"
      className="section-anchor selected-work project-showcase bg-(--work-base)"
    >
      <div className="mx-auto">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-3 sm:mb-10">
          <h2 id="selected-work-title" className="project-display text-[clamp(2.75rem,5vw,4.5rem)]">
            Selected Work
          </h2>
          <p className="max-w-72 text-sm leading-relaxed text-(--work-muted)">
            Applied AI and data products for documents, legal research, and analytics.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-7">
          {featuredWork.map((work) => <FeaturedProject key={work.id} work={work} />)}
          <div className="grid gap-5 sm:gap-7 md:grid-cols-2">
            {moreWork.map(({ id, title, summary, category, image, imageAlt }) => {
              const project = getProjectById(id)
              if (!project) return null

              return (
                <ProjectCard
                  key={id}
                  project={{ id, title, summary, coverImage: image ?? project.coverImage }}
                  category={category}
                  imageAlt={imageAlt}
                  imageSizes="(min-width: 1600px) 714px, (min-width: 768px) 46vw, 90vw"
                />
              )
            })}
          </div>
        </div>

        <div className="mt-9 flex justify-center sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex min-h-12 items-center gap-3 bg-(--work-accent) px-6 py-2.5 text-sm font-semibold text-(--work-base) transition-colors hover:bg-(--work-text) focus-visible:outline-(--work-accent)"
          >
            Browse all {projects.length} projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
