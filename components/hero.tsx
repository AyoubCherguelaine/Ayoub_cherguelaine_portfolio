import Image from "next/image"
import { ArrowDownRight, Github, Linkedin, Download } from "lucide-react"
import { profileSnapshot } from "@/lib/portfolio-data"

function LanguageNetwork() {
  const nodes = Array.from({ length: 72 }, (_, index) => {
    const angle = index * 2.399963
    const radius = Math.sqrt(index / 72) * 185
    return {
      x: 250 + Math.cos(angle) * radius,
      y: 250 + Math.sin(angle) * radius * 0.85,
    }
  })

  return (
    <div className="language-network" aria-hidden="true">
      <svg viewBox="0 0 500 500" className="network-sculpture">
        <defs>
          <radialGradient id="network-glow">
            <stop stopColor="#c1f760" stopOpacity=".12" />
            <stop offset="1" stopColor="#c1f760" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="235" fill="url(#network-glow)" />
        <g fill="none" stroke="currentColor" strokeWidth=".65">
          <ellipse cx="250" cy="250" rx="195" ry="165" opacity=".25" />
          <ellipse
            cx="250"
            cy="250"
            rx="195"
            ry="65"
            transform="rotate(-35 250 250)"
            opacity=".35"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="95"
            ry="178"
            transform="rotate(30 250 250)"
            opacity=".2"
          />
          {nodes.flatMap((node, index) =>
            nodes.slice(index + 1).map((other, offset) => {
              const distance = Math.hypot(node.x - other.x, node.y - other.y)
              return distance < 83 ? (
                <line
                  key={`${index}-${offset}`}
                  x1={node.x}
                  y1={node.y}
                  x2={other.x}
                  y2={other.y}
                  opacity={(1 - distance / 100) * 0.55}
                />
              ) : null
            }),
          )}
        </g>
        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={index % 7 === 0 ? 3 : 1.6}
            fill="currentColor"
            opacity={index % 7 === 0 ? 1 : 0.6}
          />
        ))}
      </svg>
      <span className="network-label network-label-top">
        AI & NLP
        <br />
        <span>Language systems</span>
      </span>
      <span className="network-label network-label-bottom">
        Production Delivery
        <br />
        <span>Models / Data / Systems</span>
      </span>
    </div>
  )
}

export default function Hero({ github }: { github: typeof profileSnapshot.github }) {
  return (
    <section id="home" className="portfolio-hero reveal-up">
      <div className="hero-topline">
        <span className="eyebrow availability">
          <span />
          Open to AI/NLP roles
        </span>
        <span className="eyebrow text-muted-foreground">AI & NLP Engineer</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            Ayoub
            <br />
            <span className="text-primary">Cherguelaine</span>
          </h1>
          <h2>AI & NLP Engineer</h2>
          <p>
            Building production-grade language systems across private client
            delivery and public model and dataset releases.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">
              View Projects
              <ArrowDownRight size={18} />
            </a>
            <a
              href="/CHERGUELAINE_Ayoub.pdf"
              download="CHERGUELAINE_Ayoub.pdf"
              className="text-action"
            >
              Download CV
              <Download size={15} />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/AyoubCherguelaine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ayoub Cherguelaine GitHub profile"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-cherguelaine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ayoub Cherguelaine LinkedIn profile"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://huggingface.co/AyoubChLin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ayoub Cherguelaine Hugging Face profile"
            >
              <Image
                src="/huggingface-logo.svg"
                alt=""
                width={18}
                height={18}
              />
              Hugging Face
            </a>
          </div>
        </div>
        <LanguageNetwork />
      </div>
      <div className="hero-proof">
        <div>
          <strong>
            {github.publicRepos}
            <span> /</span>
          </strong>
          <p>GitHub public repos</p>
        </div>
        <div>
          <strong>
            {profileSnapshot.huggingFace.publicModels}
            <span> /</span>
          </strong>
          <p>Hugging Face models</p>
        </div>
        <div>
          <strong>
            {profileSnapshot.huggingFace.publicDatasets}
            <span> /</span>
          </strong>
          <p>Hugging Face datasets</p>
        </div>
        <p className="hero-proof-note">
          GitHub counters refresh hourly.
          <br />
          HF snapshot: {profileSnapshot.verifiedLabel}
          <br />
          <span>Typical response window: within 24h.</span>
        </p>
      </div>
    </section>
  )
}
