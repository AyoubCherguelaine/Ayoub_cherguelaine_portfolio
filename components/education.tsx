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
      className="section-anchor reveal-up bg-gradient-to-b from-[#0c0c0c] to-[#050505] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="stagger-children mx-auto max-w-4xl space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Education & Certifications</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00d2be] to-[#d4d4d4]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="stagger-children space-y-4">
            <h3 className="font-semibold text-xl">Education</h3>
            {education.map((edu, i) => (
              <Card
                key={i}
                className="border border-[#2a2a2a] bg-[#0c0c0c] p-4 transition-all duration-300 hover:border-[#00d2be] hover:shadow-md hover:shadow-[#00d2be]/15"
              >
                <h4 className="font-semibold text-[#f2f2f2]">{edu.degree}</h4>
                <p className="text-[#00d2be] text-sm">{edu.field}</p>
                <p className="text-[#b0b0b0] text-sm">
                  {edu.school} • {edu.year}
                </p>
                <p className="text-xs text-[#b0b0b0] mt-2">{edu.honors}</p>
              </Card>
            ))}
          </div>

          <div className="stagger-children space-y-4">
            <h3 className="font-semibold text-xl">Certifications</h3>
            <div className="stagger-children space-y-3">
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="border border-[#2a2a2a] bg-[#0c0c0c] p-4 transition-all duration-300 hover:border-[#00d2be] hover:shadow-md hover:shadow-[#00d2be]/15"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-[#f2f2f2]">{cert.title}</h4>
                    <Badge
                      variant="secondary"
                      className="border border-[#00d2be]/20 bg-[#050505] py-1 text-[10px] text-[#00d2be]"
                    >
                      {cert.issuer}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#b0b0b0]">{cert.description}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-xs font-medium text-[#00d2be] transition-colors hover:text-[#d4d4d4]"
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
