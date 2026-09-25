import Image from "next/image"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { profileSnapshot } from "@/lib/portfolio-data"

export default function Contact() {
  return (
    <section id="contact" className="section-anchor reveal-up py-24 px-4 sm:px-6 lg:px-8">
      <div className="stagger-children mx-auto max-w-4xl space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#00d2be] to-[#d4d4d4]" />
          <p className="mt-4 text-[#b0b0b0]">
            Let&apos;s connect on any channel below. Public profile data on this site was last verified on {profileSnapshot.verifiedLabel}.
          </p>
        </div>

        <div className="stagger-children my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <a
            href="mailto:cherguelainea@gmail.com"
            className="hover-lift flex flex-col items-center gap-3 rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 text-center transition-colors hover:border-[#00d2be] hover:bg-[#00d2be]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Mail size={32} className="text-[#00d2be]" />
            <h3 className="font-semibold text-[#f2f2f2]">Email</h3>
            <p className="text-sm text-[#b0b0b0]">cherguelainea@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 text-center transition-colors hover:border-[#00d2be] hover:bg-[#00d2be]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Linkedin size={32} className="text-[#00d2be]" />
            <h3 className="font-semibold text-[#f2f2f2]">LinkedIn</h3>
            <p className="text-sm text-[#b0b0b0]">Connect with me</p>
          </a>

          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 text-center transition-colors hover:border-[#00d2be] hover:bg-[#00d2be]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Github size={32} className="text-[#00d2be]" />
            <h3 className="font-semibold text-[#f2f2f2]">GitHub</h3>
            <p className="text-sm text-[#b0b0b0]">View my code</p>
          </a>

          <a
            href="https://huggingface.co/AyoubChLin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 text-center transition-colors hover:border-[#00d2be] hover:bg-[#00d2be]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <Image src="/huggingface-logo.svg" alt="" width={32} height={32} className="h-8 w-8" />
            <h3 className="font-semibold text-[#f2f2f2]">Hugging Face</h3>
            <p className="text-sm text-[#b0b0b0]">Models and datasets</p>
          </a>

          <a
            href="https://wa.me/213554372377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift flex flex-col items-center gap-3 rounded-3xl border border-[#2a2a2a] bg-[#0c0c0c] p-6 text-center transition-colors hover:border-[#00d2be] hover:bg-[#00d2be]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            <MessageCircle size={32} className="text-[#00d2be]" />
            <h3 className="font-semibold text-[#f2f2f2]">WhatsApp</h3>
            <p className="text-sm text-[#b0b0b0]">+213554372377</p>
          </a>
        </div>
      </div>
    </section>
  )
}
