import { Target, Eye, Gauge, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower organizations with innovative, reliable technology that turns bold ideas into measurable impact.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the trusted engineering partner shaping a smarter, more connected, and secure digital world.",
  },
  {
    icon: Gauge,
    title: "Our Approach",
    text: "Agile, data-driven, and transparent — we design solutions around outcomes, not just features.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    text: "Enterprise-grade security, uncompromising quality, and long-term support you can rely on.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About Us
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A technology partner built for the future
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              D WAVES TECHNOLOGY is a premium technology company helping enterprises and
              fast-growing startups navigate digital transformation. We combine deep engineering
              expertise with a design-first mindset to deliver products that are as robust as they
              are beautiful.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              From strategy to deployment, our multidisciplinary teams work as an extension of
              yours — building scalable platforms, intelligent systems, and secure infrastructure
              that stand the test of time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Cloud Native", "AI & Data", "Cybersecurity", "DevOps", "UX Engineering"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
