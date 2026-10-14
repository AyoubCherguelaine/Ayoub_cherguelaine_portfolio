import Image from "next/image"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { profileSnapshot } from "@/lib/portfolio-data"

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-anchor reveal-up">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <span className="eyebrow">06 / CONTACT</span>
          <h2 className="text-5xl font-medium tracking-tight">Get In Touch</h2>

          <p className="mt-4 text-muted-foreground">
            Let&apos;s connect on any channel below. Public profile data on this
            site was last verified on {profileSnapshot.verifiedLabel}.
          </p>
        </div>

        <div className="contact-links my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="mailto:cherguelainea@gmail.com"
            className="hover-lift flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Mail size={32} className="text-primary" />
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">
              cherguelainea@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Linkedin size={32} className="text-primary" />
            <h3 className="font-semibold text-foreground">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Github size={32} className="text-primary" />
            <h3 className="font-semibold text-foreground">GitHub</h3>
            <p className="text-sm text-muted-foreground">View my code</p>
          </a>

          <a
            href="https://huggingface.co/AyoubChLin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Image
              src="/huggingface-logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <h3 className="font-semibold text-foreground">Hugging Face</h3>
            <p className="text-sm text-muted-foreground">Models and datasets</p>
          </a>

          <a
            href="https://wa.me/213554372377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <MessageCircle size={32} className="text-primary" />
            <h3 className="font-semibold text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">+213554372377</p>
          </a>
        </div>
      </div>
    </section>
  )
}
