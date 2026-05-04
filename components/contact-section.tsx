"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Phone, Mail, Linkedin, Github, ArrowUpRight, Sparkles } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "jorielbarro@gmail.com",
    href: "mailto:jorielbarro@gmail.com",
    primary: true
  },
  {
    icon: Phone,
    label: "(+57) 300 353 6174",
    href: "tel:+573003536174"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joriel-barros-3069a9335"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com"
  }
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-28 lg:py-40 px-6 lg:px-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
      <div 
        className="absolute w-[800px] h-[500px] rounded-full opacity-30 blur-[150px] pointer-events-none animate-pulse-ring"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.72 0.19 175 / 0.2) 0%, transparent 60%)',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <div className={cn(
          "flex items-center justify-center gap-4 mb-8 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Contacto
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
        </div>

        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="text-balance">
              Construyamos algo
              <br />
              <span className="text-gradient">increible juntos</span>
            </span>
          </h2>

          <p className={cn(
            "text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Estamos disponibles para proyectos, colaboraciones y oportunidades.
            Escríbenos y hagamos que tu idea se convierta en realidad.
          </p>
        </div>

        {/* CTA Email button */}
        <div className={cn(
          "flex justify-center mb-12 transition-all duration-700 delay-300",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <a
            href="mailto:jorielbarro@gmail.com"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background text-base font-semibold rounded-xl overflow-hidden shine-effect transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20"
          >
            <Mail className="w-5 h-5" />
            Enviar un email
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Contact grid */}
        <div className={cn(
          "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-400",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {contactLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-2xl spotlight-card text-center transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{link.label}</p>
                  <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors flex items-center justify-center gap-1">
                    Conectar
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Availability badge */}
        <div className={cn(
          "flex justify-center mt-16 transition-all duration-700 delay-500",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-sm text-accent">
              Disponibles para nuevos proyectos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
