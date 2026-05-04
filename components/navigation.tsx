"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Nosotros" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 transition-all duration-500",
          scrolled
            ? "py-4 bg-background/60 backdrop-blur-2xl border-b border-border/50"
            : "py-6 bg-transparent"
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-1"
          >
            <div className="relative">
              <span className="text-xl font-bold tracking-tight text-foreground">J&S</span>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </div>
            <span className="hidden sm:block ml-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono border-l border-border pl-3">
              developers
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center p-1 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-xs uppercase tracking-[0.15em] rounded-full transition-all duration-300",
                    activeSection === link.href.slice(1)
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-3xl font-semibold tracking-tight transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-foreground/70 hover:text-foreground"
              )}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
