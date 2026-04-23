import { profileSnapshot } from "@/lib/portfolio-data"

export default function About() {
  return (
    <section id="about" className="section-anchor reveal-up bg-gradient-to-b from-card/70 to-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I am <span className="font-semibold text-foreground">Ayoub Cherguelaine</span>, an AI and NLP engineer with a strong software engineering background. I design
          practical language systems and data pipelines that are reliable in production, not only in notebooks.
          My core focus is applied LLM engineering, retrieval-augmented generation, and model-driven automation.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Verified profile snapshot ({profileSnapshot.verifiedLabel}): {profileSnapshot.github.publicRepos} public GitHub repositories,{" "}
          {profileSnapshot.github.followers} GitHub followers, {profileSnapshot.huggingFace.publicModels} public Hugging Face models, and{" "}
          {profileSnapshot.huggingFace.publicDatasets} public Hugging Face datasets.
        </p>

        <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Verification method: public profile counters and linked Hugging Face artifacts were manually verified in a static snapshot on{" "}
            <span className="font-medium text-foreground">{profileSnapshot.verifiedLabel}</span>. Private case-study implementation details are based on local repository
            inspection and intentionally exclude confidential client data.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">Applied LLM Engineering</h3>
            <p className="text-muted-foreground text-sm">
              Designing retrieval and agent pipelines for legal, insurance, and analytics use cases.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">Production Delivery</h3>
            <p className="text-muted-foreground text-sm">Shipped private client systems with traceability, guardrails, and operational readiness.</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">Public Artifacts</h3>
            <p className="text-muted-foreground text-sm">Publishing selected models and datasets for transparent, reproducible AI work.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
