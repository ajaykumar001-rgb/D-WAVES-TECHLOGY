"use client"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const details = [
  { icon: Mail, label: "Email", value: "hello@dwavestech.com", href: "mailto:hello@dwavestech.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Office", value: "123 Innovation Ave, Tech City", href: undefined },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact Us
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Have a project in mind or just want to explore what&apos;s possible? Reach out and
              our team will get back to you within one business day.
            </p>

            <ul className="mt-10 space-y-5">
              {details.map((detail) => (
                <li key={detail.label} className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8">
              {submitted ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. Our team will be in touch with you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" placeholder="Jane Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-1 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
