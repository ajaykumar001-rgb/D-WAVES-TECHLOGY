import { Check, Building2, ShoppingCart, HeartPulse, Landmark } from "lucide-react"
import { Reveal } from "@/components/reveal"

const industries = [
  { icon: Building2, name: "Enterprise" },
  { icon: ShoppingCart, name: "Retail & E-commerce" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
]

const outcomes = [
  "Reduce operational costs with intelligent automation",
  "Scale seamlessly with cloud-native architecture",
  "Protect data with enterprise-grade security",
  "Launch faster with proven engineering playbooks",
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, i) => (
                <div
                  key={industry.name}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                  style={{ marginTop: i % 2 === 1 ? "1.75rem" : undefined }}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <industry.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold text-foreground">{industry.name}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Solutions
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tailored solutions for every industry
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              We craft solutions that fit the unique challenges of your sector — combining
              industry knowledge with cutting-edge technology to deliver results that matter.
            </p>

            <ul className="mt-8 space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
