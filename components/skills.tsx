import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BrainCircuit, Code2, Database, Languages, Rocket, Wrench, Workflow } from "lucide-react"

const coreFocus = [
  "Retrieval-Augmented Generation (RAG)",
  "AI Agents",
  "LangChain",
  "CrewAI",
  "vLLM",
  "n8n",
  "Embeddings",
  "Vector Stores",
]

const skillCategories = [
  {
    category: "AI Systems",
    summary: "Agentic architectures and LLM systems for production use cases.",
    icon: BrainCircuit,
    iconWrapClass: "border-primary/35 bg-primary/10",
    iconClass: "text-primary",
    skills: ["LLMs", "Fine-tuning", "Retrieval-Augmented Generation (RAG)", "AI Agents", "LangChain", "CrewAI", "vLLM"],
  },
  {
    category: "Automation",
    summary: "Workflow automation for data, orchestration, and operations.",
    icon: Workflow,
    iconWrapClass: "border-chart-2/35 bg-chart-2/10",
    iconClass: "text-chart-2",
    skills: ["n8n", "Workflow Automation", "Agent Orchestration", "API Development"],
  },
  {
    category: "Retrieval & Data",
    summary: "Semantic search, vector retrieval, and scalable data pipelines.",
    icon: Database,
    iconWrapClass: "border-chart-3/35 bg-chart-3/10",
    iconClass: "text-chart-3",
    skills: ["Embeddings", "Vector Stores", "PostgreSQL", "MongoDB", "Redis", "Data Scraping", "Data Pipelines", "Data Visualization"],
  },
  {
    category: "ML Frameworks",
    summary: "Training, fine-tuning, and applied modeling toolkits.",
    icon: Wrench,
    iconWrapClass: "border-chart-4/35 bg-chart-4/10",
    iconClass: "text-chart-4",
    skills: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "Scikit-learn", "Jupyter"],
  },
  {
    category: "Backend & Frontend",
    summary: "Full-stack implementation for AI-powered products.",
    icon: Code2,
    iconWrapClass: "border-chart-5/35 bg-chart-5/10",
    iconClass: "text-chart-5",
    skills: ["FastAPI", "Flask", "Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Cloud & Delivery",
    summary: "Deployment, infrastructure, and production readiness.",
    icon: Rocket,
    iconWrapClass: "border-primary/30 bg-primary/10",
    iconClass: "text-primary",
    skills: ["Docker", "AWS EC2", "AWS Lambda", "CI/CD", "Git", "Google Cloud", "Hugging Face"],
  },
  {
    category: "Languages",
    summary: "Core programming and scripting foundations.",
    icon: Languages,
    iconWrapClass: "border-foreground/15 bg-foreground/5",
    iconClass: "text-foreground/75",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-anchor reveal-up bg-gradient-to-b from-background to-card/40 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            Building production AI systems across agent orchestration, retrieval, automation, and full-stack delivery.
          </p>
        </div>

        <Card className="gap-4 border-primary/30 bg-gradient-to-r from-primary/10 via-chart-2/10 to-transparent p-6 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Core Focus</p>
          <div className="flex flex-wrap gap-2">
            {coreFocus.map((skill) => (
              <Badge key={skill} className="border border-primary/25 bg-background/70 text-primary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon

            return (
              <Card
                key={cat.category}
                className="h-full gap-4 border-border/80 bg-card/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/15"
              >
                <div className="flex items-start gap-3">
                  <span className={cn("inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border", cat.iconWrapClass)}>
                    <Icon className={cn("h-5 w-5", cat.iconClass)} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{cat.category}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.summary}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={`${cat.category}-${skill}`} variant="outline" className="border-border/80 bg-background/40 py-1.5 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
