import Link from "next/link"
import { FileText, Bot, Database } from "lucide-react"
import { profileSnapshot } from "@/lib/portfolio-data"

export default function About({ github }: { github: typeof profileSnapshot.github }) {
  return (
    <section
      id="about"
      className="section-anchor reveal-up bg-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="section-heading space-y-3">
          <span className="eyebrow text-muted-foreground">01 / ABOUT &amp; CORE PILLARS</span>
          <h2 className="text-4xl font-medium tracking-tight">Core Pillars</h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I am{" "}
          <span className="font-semibold text-foreground">
            Ayoub Cherguelaine
          </span>
          , an Applied AI Engineer building Arabic/English document AI and agent systems for legal, insurance &amp; trade-finance teams — from scanned PDF to source-verified answer.
        </p>

        <div className="about-services grid sm:grid-cols-3 gap-6 pt-2">
          <div className="hover-lift flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60">
            <div>
              <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2.5 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Document AI
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Scanned Arabic &amp; English PDFs → structured, schema-checked data with source evidence.
              </p>
            </div>
            <div className="mt-5 border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
              {/* <span className="font-semibold text-primary">Proof:</span>{" "} */}
              <Link href="/projects/doctool-document-ai" className="hover:text-foreground underline underline-offset-2">
                DOCTool
              </Link>{" "}
              +{" "}
              <Link href="/projects/company-document-dataset-v2" className="hover:text-foreground underline underline-offset-2">
                353,580-document public dataset
              </Link>.
            </div>
          </div>

          <div className="hover-lift flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60">
            <div>
              <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2.5 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                AI Agents
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Retrieval, reasoning and decision agents that cite their sources — in production for legal &amp; insurance clients.
              </p>
            </div>
            <div className="mt-5 border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
              {/* <span className="font-semibold text-primary">Proof:</span>{" "} */}
              <Link href="/projects/insurance-success-predictor" className="hover:text-foreground underline underline-offset-2">
                JURAI (Denmark)
              </Link>
              ,{" "}
              <Link href="/projects/mustashar-data-platform" className="hover:text-foreground underline underline-offset-2">
                Mustashar
              </Link>
              , compliance agents at{" "}
              <a href="#experience" className="hover:text-foreground underline underline-offset-2">
                Paseetah
              </a>.
            </div>
          </div>

          <div className="hover-lift flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60">
            <div>
              <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2.5 text-primary">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Data Engineering
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The foundation under the AI: ETL, scraping and validation at 10M+ records, 99% accuracy.
              </p>
            </div>
            <div className="mt-5 border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
              {/* <span className="font-semibold text-primary">Proof:</span>{" "} */}
              <a href="#experience" className="hover:text-foreground underline underline-offset-2">
                Paseetah real-estate pipelines
              </a>.
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            GitHub counters refresh hourly from the public API, with a saved fallback ({github.publicRepos} repos, {github.followers} followers).
            Hugging Face artifacts ({profileSnapshot.huggingFace.publicModels} models, {profileSnapshot.huggingFace.publicDatasets} datasets) were verified on{" "}
            <span className="font-medium text-foreground">
              {profileSnapshot.verifiedLabel}
            </span>
            . Private case-study implementation details are based on local
            repository inspection and intentionally exclude confidential client
            data.
          </p>
        </div>
      </div>
    </section>
  )
}
