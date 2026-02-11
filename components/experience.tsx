import { Card } from "@/components/ui/card"
import { experiences } from "@/lib/portfolio-data"

export default function Experience() {
  return (
    <section id="experience" className="section-anchor reveal-up bg-gradient-to-b from-card/70 to-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="border border-border bg-card/80 p-6 transition-all duration-300 hover:border-primary/70 hover:shadow-md hover:shadow-primary/15"
            >
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="font-medium text-primary">{exp.company}</p>
                </div>
                <p className="whitespace-nowrap text-sm text-muted-foreground">{exp.period}</p>
              </div>

              {exp.projects && exp.projects.length > 1 ? (
                <div className="space-y-3">
                  {exp.projects.map((project) => (
                    <div key={`${exp.id}-${project.name}`} className="rounded-xl border border-border/60 bg-background/40 p-4">
                      <p className="text-sm font-semibold text-foreground">{project.name}</p>
                      <p className="mt-0.5 text-xs font-medium text-primary">{project.context}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {(exp.highlights ?? []).map((highlight, index) => (
                    <li key={`${exp.id}-highlight-${index}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
