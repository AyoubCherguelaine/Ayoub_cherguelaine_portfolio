import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { DM_Sans, Manrope, Geist_Mono } from "next/font/google"
import { absoluteUrl, siteConfig } from "@/lib/site-config"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Ayoub Cherguelaine",
  },
  description: siteConfig.description,
  generator: "v0.app",
  keywords: [
    "AI Engineer",
    "NLP Engineer",
    "LLM",
    "RAG",
    "CrewAI",
    "FastAPI",
    "Hugging Face",
    "Portfolio",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Ayoub Cherguelaine portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${manrope.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
