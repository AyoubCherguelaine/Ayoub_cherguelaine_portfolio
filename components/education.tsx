import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const education = [
  {
    degree: "Master's Degree",
    field: "Natural Language Processing (Artificial Intelligence)",
    school: "Saad Dahleb Blida University, Blida, Algeria",
    year: "2023",
    honors: "GPA: 4.0/5.0",
  },
  {
    degree: "Bachelor's Degree",
    field: "Information Systems and Software Engineering",
    school: "Saad Dahleb Blida University, Blida, Algeria",
    year: "2021",
    honors: "GPA: 3.5/5.0",
  },
]

const certifications = [
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    url: "https://learn.nvidia.com/certificates?id=6OwHMC2rTcyDWSwwxzBGZg",
    description:
      "Covers how to build NLP applications with transformer models, from text preprocessing to practical inference workflows.",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    url: "https://learn.nvidia.com/certificates?id=4VgiFC_ZTVebEMFLJZqoIA",
    description:
      "Introduces core deep learning concepts, including neural network training, optimization, and model evaluation in practice.",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="section-anchor reveal-up bg-gradient-to-b from-card/70 to-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Education & Certifications</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Education</h3>
            {education.map((edu, i) => (
              <Card
                key={i}
                className="border border-border bg-card/80 p-4 transition-all duration-300 hover:border-primary/70 hover:shadow-md hover:shadow-primary/15"
              >
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-primary text-sm">{edu.field}</p>
                <p className="text-muted-foreground text-sm">
                  {edu.school} • {edu.year}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{edu.honors}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="gap-3 border border-border bg-card/80 p-4 transition-all duration-300 hover:border-primary/70 hover:shadow-md hover:shadow-primary/15"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold">{cert.title}</h4>
                    <Badge
                      variant="secondary"
                      className="border border-primary/20 bg-primary/10 py-1 text-[10px] text-primary"
                    >
                      {cert.issuer}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-chart-2"
                  >
                    View Credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
