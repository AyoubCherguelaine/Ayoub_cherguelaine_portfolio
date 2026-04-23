import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <main className="portfolio-shell flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <section className="w-full max-w-xl space-y-5 rounded-xl border border-border bg-card/75 p-8 text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-sm text-muted-foreground">
          The project you are trying to open does not exist yet or the URL is incorrect.
        </p>
        <Button asChild variant="outline">
          <Link href="/#projects">Back to Projects</Link>
        </Button>
      </section>
    </main>
  )
}
