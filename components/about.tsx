import { profileSnapshot } from "@/lib/portfolio-data"

export default function About({ github }: { github: typeof profileSnapshot.github }) {
  return (
    <section
      id="about"
      className="section-anchor reveal-up bg-background py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="section-heading space-y-3">
          <span className="eyebrow text-muted-foreground">01 / ABOUT</span>
          <h2 className="text-4xl font-medium tracking-tight">About Me</h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          I am{" "}
          <span className="font-semibold text-foreground">
            Ayoub Cherguelaine
          </span>
          , an AI engineer specializing in Generative AI, LLMs, NLP, and Data
          Engineering, with strong software engineering expertise and hands-on
          experience building scalable AI systems. I design practical language
          systems and data pipelines that are reliable in production, not only
          in notebooks. My core focus is applied LLM engineering,
          retrieval-augmented generation, and model-driven automation.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Public profile:{" "}
          {github.publicRepos} public GitHub repositories,{" "}
          {github.followers} GitHub followers,{" "}
          {profileSnapshot.huggingFace.publicModels} public Hugging Face models,
          and {profileSnapshot.huggingFace.publicDatasets} public Hugging Face
          datasets.
        </p>

        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            GitHub counters refresh hourly from the public API, with a saved fallback.
            Hugging Face artifacts were manually verified on{" "}
            <span className="font-medium text-foreground">
              {profileSnapshot.verifiedLabel}
            </span>
            . Private case-study implementation details are based on local
            repository inspection and intentionally exclude confidential client
            data.
          </p>
        </div>

        <div className="about-services grid sm:grid-cols-3 gap-6">
          <div className="hover-lift rounded-lg border border-border bg-card p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Applied LLM Engineering
            </h3>
            <p className="text-muted-foreground text-sm">
              Designing retrieval and agent pipelines for legal, insurance, and
              analytics use cases.
            </p>
          </div>
          <div className="hover-lift rounded-lg border border-border bg-card p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Production Delivery</h3>
            <p className="text-muted-foreground text-sm">
              Shipped private client systems with traceability, guardrails, and
              operational readiness.
            </p>
          </div>
          <div className="hover-lift rounded-lg border border-border bg-card p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Public Artifacts</h3>
            <p className="text-muted-foreground text-sm">
              Publishing selected models and datasets for transparent,
              reproducible AI work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
