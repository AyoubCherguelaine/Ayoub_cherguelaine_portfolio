import { Card } from "@/components/ui/card"
import { experiences } from "@/lib/portfolio-data"

export default function Experience() {
  return (
    <section id="experience" className="section-anchor reveal-up bg-gradient-to-b from-[#0c0c0c] to-[#050505] py-24 px-4 sm:px-6 lg:px-8">
      <div className="stagger-children mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00d2be] to-[#d4d4d4]" />
        </div>

        <div className="stagger-children space-y-4">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 transition-all duration-300 hover:border-[#00d2be] hover:shadow-md hover:shadow-[#00d2be]/15"
            >
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="font-medium text-[#00d2be]">{exp.company}</p>
                </div>
                <p className="whitespace-nowrap text-sm text-[#b0b0b0]">{exp.period}</p>
              </div>

              {exp.projects && exp.projects.length > 0 ? (
                <div className="space-y-3">
                  {exp.projects.map((project) => (
                    <div key={`${exp.id}-${project.name}`} className="rounded-3xl border border-[#2a2a2a] bg-[#050505] p-4">
                      <p className="text-sm font-semibold text-[#f2f2f2]">{project.name}</p>
                      <p className="mt-0.5 text-xs font-medium text-[#00d2be]">{project.context}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#b0b0b0]">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {(exp.highlights ?? []).map((highlight, index) => (
                    <li key={`${exp.id}-highlight-${index}`} className="flex items-start gap-2 text-sm text-[#b0b0b0]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d2be]" aria-hidden />
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
