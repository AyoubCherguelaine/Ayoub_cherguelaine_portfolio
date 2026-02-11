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

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">LLM Engineering</h3>
            <p className="text-muted-foreground text-sm">
              Building and fine-tuning large language models for specialized tasks
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">Production Ready</h3>
            <p className="text-muted-foreground text-sm">Deploying AI solutions at scale with proven reliability</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:shadow-primary/15">
            <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm">Staying at the forefront of AI/ML research and development</p>
          </div>
        </div>
      </div>
    </section>
  )
}
