// ─── DONNÉES ────────────────────────────────────────────
const infos = [
  { icon: "🎓", label: "Formation",  value: "Ingénieur CESI"      },
  { icon: "📍", label: "Lieu",       value: "Nancy, 54000"         },
  { icon: "💼", label: "Contrat",    value: "Alternance 3 ans"     },
  { icon: "🌍", label: "Mobilité",   value: "Toute la France"      },
  { icon: "🗣️", label: "Langues",    value: "FR · EN bilingue"     },
  { icon: "🚗", label: "Permis",     value: "Permis B"             },
];

const contacts = [
  { icon: "✉",  label: "Email",    value: "snayeult@outlook.fr",  href: "mailto:snayeult@outlook.fr"                             },
  { icon: "📞", label: "Tél.",     value: "+33 7 53 94 91 57",    href: "tel:+33753949157"                                       },
  { icon: "⌥",  label: "GitHub",   value: "SnayeulTedy",          href: "https://github.com/SnayeulTedy"                         },
  { icon: "in", label: "LinkedIn", value: "snayeultedonzon",      href: "https://www.linkedin.com/in/snayeul-tedonzon-6a8a2929b" },
  { icon: "💬", label: "WhatsApp", value: "wa.me/33753949157",    href: "https://wa.me/33753949157"                              },
  { icon: "✈",  label: "Telegram", value: "t.me/Snayeul",         href: "https://t.me/Snayeul"                                   },
];

// ─── COMPOSANT ──────────────────────────────────────────
export default function AboutSection() {
  return (
    <section id="about" className="border-t border-blue-500/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        {/* En-tête */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 02</span>
          <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">À_PROPOS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        {/* ── LIGNE 1 : Bio gauche + Coordonnées droite ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Bio */}
          <div className="flex flex-col">
            <p className="font-mono text-sm text-gray-400 leading-relaxed mb-4 break-words">
              Je suis <strong className="text-blue-400 font-bold">Snayeul Tedonzon</strong>, étudiant ingénieur au{" "}
              <strong className="text-blue-400 font-bold">CESI École d'Ingénieurs</strong>. Développeur full-stack
              avec expérience en production — microservices Java/Spring Boot, React, Angular.
            </p>
            <p className="font-mono text-sm text-gray-400 leading-relaxed mb-4 break-words">
              3 stages dont un en alternance chez ZubHub (France).
              Rigoureux, autonome et curieux, je m'adapte rapidement à tout environnement.
            </p>
            <p className="font-mono text-sm text-gray-400 leading-relaxed mb-8 break-words">
              Recherche une <strong className="text-blue-400 font-bold">alternance de 3 ans</strong> dès{" "}
              <strong className="text-blue-400 font-bold">septembre 2026</strong>.
              Mobile toute la France · Permis B · EN bilingue.
            </p>

            {/* Boutons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="/CVPro_TEDONZON SNAYEUL.pdf"
                download
                className="flex items-center gap-2 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 hover:bg-blue-600 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
              >
                Télécharger CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border border-blue-500/40 hover:border-blue-400 hover:text-blue-400 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="border border-blue-500/20 overflow-hidden">
            <div className="px-3 py-2 bg-blue-500/10 border-b border-blue-500/20">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                &gt; COORDONNÉES
              </span>
            </div>
            {contacts.map((c, i) => (
              <div
                key={c.label}
                className={`flex items-center gap-2 px-3 py-2.5 border-b border-blue-500/10 last:border-0 ${i % 2 === 1 ? "bg-blue-500/[0.02]" : ""}`}
              >
                <span className="text-base shrink-0 w-7" style={{ color: "#4D8EFF" }}>{c.icon}</span>
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider shrink-0 w-16">{c.label}</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-blue-400 hover:opacity-75 transition-opacity ml-auto text-right truncate max-w-[160px] sm:max-w-none"
                >
                  {c.value} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── LIGNE 2 : Infos sur toute la largeur ── */}
        <div className="border border-blue-500/20 overflow-hidden">
          <div className="px-3 py-2 bg-blue-500/10 border-b border-blue-500/20">
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
              &gt; INFORMATIONS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {infos.map((info, i) => (
              <div
                key={info.label}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-4 text-center
                  ${i < 5 ? "border-r border-blue-500/10" : ""}
                  ${i >= 2 && i < 4 ? "border-t border-blue-500/10 sm:border-t-0" : ""}
                  ${i >= 4 ? "border-t border-blue-500/10 lg:border-t-0" : ""}`}
              >
                <span className="text-xl mb-1">{info.icon}</span>
                <span className="font-mono text-[9px] text-gray-600 uppercase tracking-wider">{info.label}</span>
                <span className="font-mono text-xs font-semibold text-white text-center">{info.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}