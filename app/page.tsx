import { getGitHubProfile } from "@/lib/github-profile"
import { VisitorCounter } from "@/components/visitor-analytics"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import { projects } from "@/lib/portfolio-data"
import { absoluteUrl, siteConfig } from "@/lib/site-config"

export const revalidate = 3600

export default async function Home() {
  const github = await getGitHubProfile()
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": absoluteUrl("/#profile"),
        url: absoluteUrl("/"),
        dateModified: "2026-04-23",
        mainEntity: {
          "@id": absoluteUrl("/#person"),
        },
        hasPart: projects.map((project) => ({
          "@type": "CreativeWork",
          name: project.title,
          url: absoluteUrl(`/projects/${project.id}`),
        })),
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        image: absoluteUrl("/icon.svg"),
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location,
        },
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.linkedin,
          siteConfig.links.huggingface,
        ],
        agentInteractionStatistic: [
          {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/FollowAction",
            userInteractionCount: github.followers,
          },
          {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/WriteAction",
            userInteractionCount: github.publicRepos,
          },
        ],
      },
    ],
  }

  return (
    <main className="portfolio-shell bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <Navigation />
      <Hero github={github} />
      <About github={github} />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer className="portfolio-footer">
        <span>Ayoub Cherguelaine</span>
        <VisitorCounter />
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}
