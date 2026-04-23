import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import { profileSnapshot, projects } from "@/lib/portfolio-data"
import { absoluteUrl, siteConfig } from "@/lib/site-config"

export default function Home() {
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
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.huggingface],
        agentInteractionStatistic: [
          {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/FollowAction",
            userInteractionCount: profileSnapshot.github.followers,
          },
          {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/WriteAction",
            userInteractionCount: profileSnapshot.github.publicRepos,
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
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
