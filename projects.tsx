import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    image: "/images/project-cloud.png",
    category: "Cloud Infrastructure",
    title: "Enterprise Cloud Migration",
    text: "Migrated a global logistics platform to a resilient multi-cloud architecture, cutting infrastructure costs by 38%.",
  },
  {
    image: "/images/project-ai.png",
    category: "Artificial Intelligence",
    title: "AI-Powered Analytics Engine",
    text: "Built a real-time predictive analytics platform processing millions of events daily for a fintech leader.",
  },
  {
    image: "/images/project-security.png",
    category: "Cybersecurity",
    title: "Zero-Trust Security Platform",
    text: "Deployed an end-to-end zero-trust framework securing sensitive data across a healthcare network.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Projects
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work that speaks for itself
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A glimpse into the transformative solutions we&apos;ve delivered for clients across
            the globe.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 flex-none text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
