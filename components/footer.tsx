import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative px-6 lg:px-16 py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-foreground">J&S</span>
            <span className="text-xs text-muted-foreground">—</span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Colombia
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jorielbarro@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-xs tracking-wide text-muted-foreground">
            © 2026 Joriel Barros & Sebastian Garcia
          </span>
        </div>
      </div>
    </footer>
  )
}
