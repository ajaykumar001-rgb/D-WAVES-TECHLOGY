import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Solutions } from "@/components/solutions"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
