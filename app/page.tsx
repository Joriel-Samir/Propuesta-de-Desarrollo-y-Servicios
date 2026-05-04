import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StackSection } from "@/components/stack-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen noise">
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
