"use client"

import { useRef, useState } from "react"
import { Search } from "lucide-react"

import ProjectCard, { type ProjectPreview } from "@/components/project-card"

export default function ProjectCatalog({ projects }: { projects: ProjectPreview[] }) {
  const [query, setQuery] = useState("")
  const searchInput = useRef<HTMLInputElement>(null)
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const visibleProjects = projects.filter(({ title, summary, tags }) => {
    const text = [title, summary, ...tags].join(" ").toLowerCase()
    return terms.every((term) => text.includes(term))
  })

  return (
    <section aria-labelledby="catalog-heading">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-(--work-border) pb-5">
        <div>
          <h2 id="catalog-heading" className="sr-only">Project catalog</h2>
          <p role="status" className="text-sm text-(--work-muted)">
            {terms.length > 0
              ? `${visibleProjects.length} of ${projects.length} projects`
              : `${projects.length} projects`}
          </p>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <Search
            size={17}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-(--work-muted)"
          />
          <input
            ref={searchInput}
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or technology"
            className="min-h-12 w-full border border-(--work-border) bg-(--work-panel) py-2.5 pr-4 pl-11 text-sm text-(--work-text) placeholder:text-(--work-muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--work-accent)"
          />
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <li key={project.id} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-(--work-border) bg-(--work-panel) p-5">
          <p className="text-(--work-text)">No projects match your search.</p>
          <button
            type="button"
            className="project-text-link mt-2"
            onClick={() => {
              setQuery("")
              searchInput.current?.focus()
            }}
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  )
}
