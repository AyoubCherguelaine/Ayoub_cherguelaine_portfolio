import { experiences } from "@/lib/portfolio-data"

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-anchor reveal-up bg-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="section-heading space-y-3">
          <span className="eyebrow text-muted-foreground">03 / EXPERIENCE</span>
          <h2 className="text-4xl font-medium tracking-tight">Experience</h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-row">
              <p className="experience-date">{exp.period}</p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-medium">{exp.role}</h3>
                  <p className="mt-2 text-sm text-primary">{exp.company}</p>
                </div>

                {exp.projects && exp.projects.length > 0 ? (
                  <div className="space-y-3">
                    {exp.projects.map((project) => (
                      <div
                        key={`${exp.id}-${project.name}`}
                        className="border-l border-border pl-5"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {project.name}
                        </p>
                        <p className="mt-0.5 text-xs font-medium text-primary">
                          {project.context}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {(exp.highlights ?? []).map((highlight, index) => (
                      <li
                        key={`${exp.id}-highlight-${index}`}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
