import { Cloud, Brain, ShieldCheck, Code2, Smartphone, BarChart3 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Scalable, resilient cloud architectures on AWS, Azure, and GCP with full DevOps automation.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    text: "Custom AI models, intelligent automation, and data pipelines that unlock real business value.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "End-to-end protection — threat detection, compliance, and zero-trust security frameworks.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Bespoke web platforms and enterprise systems engineered for performance and scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "Native and cross-platform apps with seamless UX across iOS and Android devices.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    text: "Real-time dashboards and analytics that turn raw data into confident decisions.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Services
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build and scale
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A full spectrum of technology services delivered by specialists who care about your
            outcomes as much as you do.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
