"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Rocket, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    company: "SmartCivita",
    period: "Ago 2025 — Abr 2026",
    role: "Junior Software Developer & DevOps",
    location: "Remoto",
    highlights: [
      "Desarrollo fullstack con Django en produccion",
      "Infraestructura DevOps: Linux, Docker, Gunicorn, Nginx",
      "Pipelines CI/CD con GitHub Actions",
      "Administracion PostgreSQL en entornos productivos"
    ],
    tags: ["Django", "Docker", "CI/CD", "PostgreSQL"],
    featured: true
  },
  {
    icon: Briefcase,
    company: "Cliente EE.UU.",
    period: "2025",
    duration: "2 meses",
    role: "Backend Developer",
    location: "Remoto",
    highlights: [
      "Limpieza y transformacion de datos con Python",
      "Analisis con PostgreSQL para mercado estadounidense",
      "Gestion de grandes volumenes de datos"
    ],
    tags: ["Python", "PostgreSQL", "ETL"]
  },
  {
    icon: GraduationCap,
    company: "UTB",
    period: "2024 — 2029",
    role: "Ingenieria de Sistemas y Computacion",
    location: "Cartagena, Colombia",
    highlights: [
      "Universidad Tecnologica de Bolivar",
      "Formacion en ingenieria de software y sistemas",
      "Enfoque en desarrollo backend y arquitectura"
    ],
    isEducation: true
  },
  {
    icon: Rocket,
    company: "Proyectos IA",
    period: "2024 — Presente",
    role: "Vision Artificial & ML",
    location: "Proyectos Personales",
    highlights: [
      "Login con reconocimiento facial (Flask, OpenCV, ArcFace)",
      "Reconocimiento facial en tiempo real (LBPH)",
      "Clasificacion de imagenes y modelos de ML"
    ],
    tags: ["OpenCV", "Flask", "Machine Learning"]
  }
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-28 lg:py-36 px-6 lg:px-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className={cn(
          "mb-20 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-accent tracking-[0.2em]">03</span>
            <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trayectoria</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            Experiencia &<br />
            <span className="text-gradient">educacion</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent transform md:-translate-x-px" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isLeft = index % 2 === 0
              
              return (
                <div
                  key={exp.company}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-8 md:gap-16 transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: isInView ? `${index * 150 + 200}ms` : '0ms' }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background transform -translate-x-1 md:-translate-x-1.5 top-8" />

                  {/* Content */}
                  <div className={cn(
                    "pl-8 md:pl-0",
                    isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  )}>
                    {/* Period badge */}
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-wide mb-4",
                      exp.featured 
                        ? "bg-accent/10 border border-accent/30 text-accent" 
                        : "bg-secondary/80 border border-border text-muted-foreground"
                    )}>
                      <Icon className="w-3 h-3" />
                      {exp.period}
                      {exp.duration && <span className="text-muted-foreground">· {exp.duration}</span>}
                    </div>

                    {/* Card */}
                    <div className={cn(
                      "group p-6 lg:p-8 rounded-2xl spotlight-card transition-all duration-500",
                      exp.featured && "border-accent/30"
                    )}>
                      <div className="relative z-10">
                        {/* Header */}
                        <div className={cn(
                          "flex items-start gap-4 mb-4",
                          isLeft && "md:flex-row-reverse"
                        )}>
                          <div className={cn(isLeft && "md:text-right")}>
                            <h3 className="text-xl font-bold tracking-tight flex items-center gap-2 group-hover:text-accent transition-colors">
                              {!isLeft && exp.company}
                              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {isLeft && exp.company}
                            </h3>
                            <p className="text-sm text-accent mt-1">{exp.role}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <ul className={cn(
                          "space-y-2 mb-6",
                          isLeft && "md:text-right"
                        )}>
                          {exp.highlights.map((highlight, i) => (
                            <li 
                              key={i}
                              className={cn(
                                "flex items-start gap-3 text-sm text-muted-foreground",
                                isLeft && "md:flex-row-reverse"
                              )}
                            >
                              <span className="text-accent/60 mt-0.5">—</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        {exp.tags && (
                          <div className={cn(
                            "flex flex-wrap gap-2",
                            isLeft && "md:justify-end"
                          )}>
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full bg-accent/10 border border-accent/20 text-accent"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
