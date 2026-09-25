import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ExternalLink, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { profileSnapshot } from "@/lib/portfolio-data"

export default function Hero() {
  return (
    <section id="home" className="reveal-up metallic-border rounded-3xl mx-auto mt-4 max-w-5xl py-20 sm:px-6 lg:px-8">
      <div className="stagger-children flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-pretty sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#d4d4d4] via-[#00d2be] to-[#d4d4d4] bg-clip-text text-transparent gradient-shift">
              Ayoub Cherguelaine
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-[#b0b0b0] sm:text-4xl lg:text-5xl">
            AI & NLP Engineer
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#b0b0b0] sm:text-2xl">
            Building production-grade language systems across private client delivery and public model and dataset releases.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="border border-[#2a2a2a] bg-[#111] text-[#d4d4d4]">
            Open to AI/NLP roles
          </Badge>
          <Badge variant="secondary" className="border border-[#2a2a2a] bg-[#111] text-[#d4d4d4]">
            GitHub: {profileSnapshot.github.publicRepos} public repos
          </Badge>
          <Badge variant="secondary" className="border border-[#2a2a2a] bg-[#111] text-[#d4d4d4]">
            Hugging Face: {profileSnapshot.huggingFace.publicModels} models / {profileSnapshot.huggingFace.publicDatasets} datasets
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">Snapshot verified on {profileSnapshot.verifiedLabel} • Typical response window: within 24h.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#00d2be] text-[#050505] hover:bg-[#00d2be]/90 shimmer-border">
            <a href="#projects">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <a
          href="/CHERGUELAINE_Ayoub.pdf"
          download="CHERGUELAINE_Ayoub.pdf"
          className="inline-flex items-center gap-2 rounded-full text-sm text-[#b0b0b0] underline-offset-4 transition-colors hover:text-[#f2f2f2] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
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
            className="pulse-ring rounded-full bg-[#111] p-3 transition-colors hover:bg-[#00d2be] hover:text-[#050505] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ayoub Cherguelaine LinkedIn profile"
            className="pulse-ring rounded-full bg-[#111] p-3 transition-colors hover:bg-[#00d2be] hover:text-[#050505] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://huggingface.co/AyoubChLin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ayoub Cherguelaine Hugging Face profile"
            className="pulse-ring rounded-full bg-[#111] p-3 transition-colors hover:bg-[#00d2be] hover:text-[#050505] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Image src="/huggingface-logo.svg" alt="" width={24} height={24} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
