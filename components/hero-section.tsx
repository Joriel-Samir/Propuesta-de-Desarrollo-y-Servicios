"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 30
      const y = (clientY / height - 0.5) * 30
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-28 pb-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="gradient-mesh" />
      <div className="grid-overlay" />
      
      {/* Floating gradient orbs */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full opacity-40 blur-[120px] pointer-events-none animate-float"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.19 175 / 0.2) 0%, transparent 60%)',
          top: '10%',
          left: '5%',
          transform: 'translate(calc(var(--mouse-x, 0) * 0.5), calc(var(--mouse-y, 0) * 0.5))',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.2 280 / 0.15) 0%, transparent 60%)',
          bottom: '10%',
          right: '10%',
          animationDelay: '2s'
        }}
      />

      <div className="relative z-10 max-w-6xl">
        {/* Main headline with staggered animation */}
        <div className="mb-10">
          <h1 
            className={`text-5xl sm:text-7xl lg:text-[6.5rem] font-bold tracking-[-0.03em] leading-[0.9] transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="block text-foreground">Joriel Barros</span>
          </h1>
          <div 
            className={`flex items-center gap-4 my-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">&</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-accent to-transparent" />
          </div>
          <h1 
            className={`text-5xl sm:text-7xl lg:text-[6.5rem] font-bold tracking-[-0.03em] leading-[0.9] text-gradient transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Sebastian Garcia
          </h1>
        </div>

        {/* Role tags */}
        <div 
          className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {["Ingenieros de Sistemas", "Backend Developers", "DevOps Engineers"].map((role, i) => (
            <span 
              key={role}
              className="px-4 py-2 text-xs uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full bg-card/50 backdrop-blur-sm hover:border-accent/50 hover:text-accent transition-colors duration-300"
              style={{ transitionDelay: `${450 + i * 50}ms` }}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Description */}
        <p 
          className={`text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Dos desarrolladores colombianos construyendo sistemas escalables, 
          APIs robustas y arquitecturas cloud. Enfocados en resolver problemas 
          reales con codigo limpio.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-wrap items-center gap-5 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wide rounded-lg overflow-hidden shine-effect transition-transform duration-300 hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4" />
            Trabajemos juntos
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-muted-foreground text-sm font-medium tracking-wide rounded-lg transition-all duration-300 hover:border-foreground/30 hover:text-foreground hover:bg-card/50"
          >
            Ver mas sobre nosotros
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Social links */}
        <div 
          className={`flex items-center gap-4 mt-16 pt-8 border-t border-border/50 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-4">Conecta</span>
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="relative h-14 w-6 rounded-full border border-border/50 flex justify-center">
          <div className="absolute top-2 w-1 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
