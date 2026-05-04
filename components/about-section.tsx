"use client"

import { useRef, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Github, Linkedin, ArrowUpRight } from "lucide-react"

const team = [
  {
    id: "01",
    name: "Joriel Barros",
    role: "Ingeniero de Sistemas · Software Developer & DevOps",
    initials: "JB",
    bio: "Desarrollador backend con experiencia en entornos de produccion reales. Construyo aplicaciones web escalables con Django, FastAPI y Flask. Manejo infraestructura DevOps completa: servidores Linux, Docker, Nginx, pipelines CI/CD y bases de datos PostgreSQL.",
    skills: ["Python", "Django", "FastAPI", "Docker", "PostgreSQL", "Linux", "CI/CD", "IA Aplicada"],
    links: {
      linkedin: "https://www.linkedin.com/in/joriel-barros-3069a9335",
      github: "#"
    }
  },
  {
    id: "02",
    name: "Sebastian Garcia",
    role: "Ingeniero de Sistemas",
    initials: "SG",
    bio: "Ingeniero de sistemas con enfoque en desarrollo de software y arquitectura de soluciones tecnologicas. Orientado a construir sistemas robustos con criterio tecnico y pensamiento analitico.",
    skills: ["Ingenieria de Sistemas", "Arquitectura", "Desarrollo de Software", "Resolucion de Problemas"],
    links: {
      linkedin: "#",
      github: "#"
    }
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  // Spotlight effect
  useEffect(() => {
    const cards = document.querySelectorAll('.about-card')
    
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-28 lg:py-36 px-6 lg:px-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className={cn(
          "mb-20 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-accent tracking-[0.2em]">01</span>
            <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nosotros</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
            El equipo detras<br />
            <span className="text-gradient">del codigo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Dos ingenieros colombianos apasionados por construir software que funciona, escala y resuelve problemas reales.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <article
              key={member.id}
              className={cn(
                "about-card group relative p-8 lg:p-10 rounded-2xl spotlight-card transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isInView ? `${index * 150 + 200}ms` : '0ms' }}
            >
              {/* Content wrapper for z-index */}
              <div className="relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 text-accent">
                        {member.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight mb-1">{member.name}</h3>
                      <p className="text-xs text-muted-foreground tracking-wide">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-2">
                    <a 
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs tracking-wide rounded-lg bg-secondary/80 border border-border text-secondary-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Ver perfil completo
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
