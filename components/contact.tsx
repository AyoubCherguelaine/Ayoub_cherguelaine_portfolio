import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section-anchor reveal-up py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-chart-2" />
          <p className="mt-4 text-muted-foreground">Let&apos;s connect on any of the channels below.</p>
        </div>

        <div className="my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:cherguelainea@gmail.com"
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Mail size={32} className="text-primary" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">cherguelainea@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Linkedin size={32} className="text-primary" />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Github size={32} className="text-primary" />
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-sm text-muted-foreground">View my code</p>
          </a>

          <a
            href="https://wa.me/213554372377"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <MessageCircle size={32} className="text-primary" />
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">+213554372377</p>
          </a>
        </div>
      </div>
    </section>
  )
}
