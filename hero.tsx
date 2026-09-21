import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "250+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "40+", label: "Global Clients" },
]

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Animated grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-grid-flow opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.62 0.19 250 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.62 0.19 250 / 0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 -z-10 h-72 w-72 animate-pulse-glow rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-40 -z-10 h-80 w-80 animate-pulse-glow rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Engineering the future of technology
          </div>

          <h1 className="mt-6 animate-fade-up text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">D WAVES</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TECHNOLOGY
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "120ms" }}
          >
            We build premium, future-ready digital solutions — from cloud infrastructure and
            AI to cybersecurity and custom software — that power ambitious businesses worldwide.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90",
              )}
            >
              Explore Our Services
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-border bg-background/40 backdrop-blur-sm hover:bg-secondary",
              )}
            >
              View Our Work
            </a>
          </div>

          <dl
            className="mt-16 grid max-w-2xl animate-fade-up grid-cols-2 gap-6 sm:grid-cols-4"
            style={{ animationDelay: "320ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
