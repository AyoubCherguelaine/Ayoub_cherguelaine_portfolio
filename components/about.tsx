import { profileSnapshot } from "@/lib/portfolio-data"

export default function About() {
  return (
    <section id="about" className="section-anchor reveal-up bg-gradient-to-b from-[#0c0c0c] to-[#050505] py-24 px-4 sm:px-6 lg:px-8">
      <div className="stagger-children mx-auto max-w-4xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00d2be] to-[#d4d4d4]" />
        </div>

        <p className="text-lg text-[#b0b0b0] leading-relaxed">
          I am <span className="font-semibold text-[#f2f2f2]">Ayoub Cherguelaine</span>, an AI engineer specializing in Generative AI, LLMs, NLP, and Data Engineering, with strong software engineering expertise and hands-on experience building scalable AI systems. I design practical language systems and data pipelines that are reliable in production, not only in notebooks. My core focus is applied LLM engineering, retrieval-augmented generation, and model-driven automation.
        </p>

        <p className="text-sm leading-relaxed text-[#b0b0b0]">
          Verified profile snapshot ({profileSnapshot.verifiedLabel}): {profileSnapshot.github.publicRepos} public GitHub repositories,{" "}
          {profileSnapshot.github.followers} GitHub followers, {profileSnapshot.huggingFace.publicModels} public Hugging Face models, and{" "}
          {profileSnapshot.huggingFace.publicDatasets} public Hugging Face datasets.
        </p>

        <div className="metallic-border rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-4">
          <p className="text-sm leading-relaxed text-[#b0b0b0]">
            Verification method: public profile counters and linked Hugging Face artifacts were manually verified in a static snapshot on{" "}
            <span className="font-medium text-[#f2f2f2]">{profileSnapshot.verifiedLabel}</span>. Private case-study implementation details are based on local repository
            inspection and intentionally exclude confidential client data.
          </p>
        </div>

        <div className="stagger-children grid sm:grid-cols-3 gap-6">
          <div className="hover-lift rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Applied LLM Engineering</h3>
            <p className="text-[#b0b0b0] text-sm">
              Designing retrieval and agent pipelines for legal, insurance, and analytics use cases.
            </p>
          </div>
          <div className="hover-lift rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Production Delivery</h3>
            <p className="text-[#b0b0b0] text-sm">Shipped private client systems with traceability, guardrails, and operational readiness.</p>
          </div>
          <div className="hover-lift rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">Public Artifacts</h3>
            <p className="text-[#b0b0b0] text-sm">Publishing selected models and datasets for transparent, reproducible AI work.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
