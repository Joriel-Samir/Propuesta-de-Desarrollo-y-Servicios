"use client"

import { useRef, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Code2, Server, Database, Cpu, User } from "lucide-react"

const stackCategories = [
  {
    icon: User,
    title: "Perfil",
    accent: "from-violet-500/20 to-violet-500/5",
    items: ["Ingeniero de Sistemas", "Desarrollador de Software", "DevOps Engineer", "Backend Developer"]
  },
  {
    icon: Code2,
    title: "Backend",
    accent: "from-cyan-500/20 to-cyan-500/5",
    items: ["Python", "Django", "FastAPI", "Flask", "APIs REST", "JavaScript"]
  },
  {
    icon: Server,
    title: "DevOps & Infra",
    accent: "from-emerald-500/20 to-emerald-500/5",
    items: ["Docker", "Nginx", "Gunicorn", "GitHub Actions", "Linux Servers", "CI/CD"]
  },
  {
    icon: Database,
    title: "Bases de Datos",
    accent: "from-amber-500/20 to-amber-500/5",
    items: ["PostgreSQL", "MySQL", "Queries Avanzadas", "Normalizacion", "Optimizacion"]
  },
  {
    icon: Cpu,
    title: "IA & Tools",
    accent: "from-rose-500/20 to-rose-500/5",
    items: ["OpenCV", "Machine Learning", "Vision Artificial", "Git", "C++"]
  }
]

export function StackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  // Spotlight effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.stack-card')
    
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
      id="stack" 
      className="relative py-28 lg:py-36 px-6 lg:px-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-accent tracking-[0.2em]">02</span>
            <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
            Tecnologias que<br />
            <span className="text-gradient">dominamos</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackCategories.map((category, index) => {
            const Icon = category.icon
            const isLarge = index === 0 || index === 1
            
            return (
              <div
                key={category.title}
                className={cn(
                  "stack-card group relative p-6 lg:p-8 rounded-2xl spotlight-card overflow-hidden transition-all duration-500",
                  isLarge && "lg:col-span-1",
                  index === 0 && "sm:col-span-2 lg:col-span-1",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: isInView ? `${index * 100 + 100}ms` : '0ms' }}
              >
                {/* Gradient accent */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  category.accent
                )} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold tracking-tight mb-6">
                    {category.title}
                  </h3>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs tracking-wide rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground group-hover:text-foreground group-hover:border-border transition-all duration-300"
                        style={{ transitionDelay: `${itemIndex * 30}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
