// ─── DONNÉES ────────────────────────────────────────────
const socialLinks = [
  { icon: "⌥",  label: "GitHub",   href: "https://github.com/SnayeulTedy"                           },
  { icon: "in", label: "LinkedIn", href: "https://www.linkedin.com/in/snayeul-tedonzon-6a8a2929b"   },
  { icon: "✉",  label: "Email",    href: "mailto:snayeult@outlook.fr"                                },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/33753949157"                                 },
  { icon: "✈",  label: "Telegram", href: "https://t.me/Snayeul"                                      },
];

const navLinks = [
  { label: "Accueil",  href: "#hero"     },
  { label: "À propos", href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projets",  href: "#projects" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact",  href: "#contact"  },
];

// ─── COMPOSANT ──────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-500/20 bg-[#040810] overflow-hidden">

      {/* ── Partie principale ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <a href="#hero" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors w-fit">
              Snayeul<span className="text-blue-400">_</span>Dev
            </a>
            <p className="font-mono text-xs text-gray-600 leading-relaxed">
              Développeur Full-Stack<br />
              Java · Spring Boot · React · Angular<br />
              Disponible dès sept. 2026
            </p>
            {/* Badge dispo */}
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              OPEN TO WORK
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Navigation</span>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors w-fit">
                &gt; {l.label}
              </a>
            ))}
          </div>

          {/* Contact rapide */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Contact rapide</span>
            <a href="mailto:snayeult@outlook.fr"
              className="font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors break-all">
              ✉ snayeult@outlook.fr
            </a>
            <a href="tel:+33753949157"
              className="font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors">
              📞 +33 7 53 94 91 57
            </a>
            <a href="/CVPro_TEDONZON SNAYEUL.pdf" download
              className="font-mono text-xs text-blue-400 border border-blue-500/30 px-3 py-1.5 hover:bg-blue-500/10 transition-colors w-fit mt-2">
              ↓ Télécharger CV
            </a>
          </div>
        </div>
      </div>

      {/* ── Barre réseaux sociaux ── */}
      <div className="border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex">
            {socialLinks.map((s, i) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className={`flex flex-col items-center justify-center gap-1 py-4 flex-1 text-gray-600 hover:text-blue-400 hover:bg-blue-500/5 transition-colors
                  ${i < socialLinks.length - 1 ? "border-r border-blue-500/10" : ""}`}>
                <span className="text-base">{s.icon}</span>
                <span className="font-mono text-[9px] uppercase tracking-wider hidden sm:block">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bas de page ── */}
      <div className="border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-gray-700">
            © {year} Snayeul Tedonzon Tchinda · Tous droits réservés
          </p>
          <a href="#hero"
            className="font-mono text-[10px] text-gray-600 hover:text-blue-400 transition-colors flex items-center gap-1">
            ↑ RETOUR EN HAUT
          </a>
        </div>
      </div>

    </footer>
  );
}