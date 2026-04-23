import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ExternalLink, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { profileSnapshot } from "@/lib/portfolio-data"

export default function Hero() {
  return (
    <section id="home" className="reveal-up min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-pretty sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Ayoub Cherguelaine
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-muted-foreground sm:text-4xl lg:text-5xl">
            AI & NLP Engineer
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            Building production-grade language systems across private client delivery and public model and dataset releases.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="border border-primary/25 bg-primary/10 text-primary">
            Open to AI/NLP roles
          </Badge>
          <Badge variant="secondary" className="border border-primary/25 bg-primary/10 text-primary">
            GitHub: {profileSnapshot.github.publicRepos} public repos
          </Badge>
          <Badge variant="secondary" className="border border-primary/25 bg-primary/10 text-primary">
            Hugging Face: {profileSnapshot.huggingFace.publicModels} models / {profileSnapshot.huggingFace.publicDatasets} datasets
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">Snapshot verified on {profileSnapshot.verifiedLabel} • Typical response window: within 24h.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <a
          href="/CHERGUELAINE_Ayoub.pdf"
          download="CHERGUELAINE_Ayoub.pdf"
          className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          Download CV
          <Download className="h-4 w-4" />
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ayoub Cherguelaine GitHub profile"
            className="rounded-full bg-card p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ayoub Cherguelaine LinkedIn profile"
            className="rounded-full bg-card p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://huggingface.co/AyoubChLin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ayoub Cherguelaine Hugging Face profile"
            className="rounded-full bg-card p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Image src="/huggingface-logo.svg" alt="" width={24} height={24} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
