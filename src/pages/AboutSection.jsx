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

const socials = [
  { label: "Instagram", href: "#", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: "X",         href: "#", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "TikTok",    href: "#", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg> },
  { label: "Facebook",  href: "#", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
];

export default function AboutSection({ dark }) {
  const bg      = dark ? "bg-[#060A12]"  : "bg-[#F0F4FF]";
  const surface = dark ? "bg-[#0D1526]"  : "bg-white";
  const title   = dark ? "text-white"    : "text-[#0A1628]";
  const body    = dark ? "text-gray-400" : "text-gray-600";
  const label   = dark ? "text-gray-600" : "text-gray-400";
  const rowAlt  = dark ? "bg-blue-500/[0.02]" : "bg-blue-500/[0.03]";
  const infoVal = dark ? "text-white"    : "text-[#0A1628]";

  return (
    <section id="about" className={`border-t border-blue-500/20 overflow-hidden ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        {/* En-tête */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 02</span>
          <span className={`font-mono text-xl sm:text-2xl font-bold tracking-tight ${title}`}>À_PROPOS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        {/* LIGNE 1 : Bio + Coordonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Bio */}
          <div className="flex flex-col">
            <p className={`font-mono text-sm leading-relaxed mb-4 break-words ${body}`}>
              Je suis <strong className="text-blue-400 font-bold">Snayeul Tedonzon</strong>, étudiant ingénieur au{" "}
              <strong className="text-blue-400 font-bold">CESI École d'Ingénieurs</strong>. Développeur full-stack
              avec expérience en production — microservices Java/Spring Boot, React, Angular et ASP.NET.
            </p>
            <p className={`font-mono text-sm leading-relaxed mb-4 break-words ${body}`}>
              3 stages dont un en alternance chez ZubHub (France).
              Rigoureux, autonome et curieux, je m'adapte rapidement à tout environnement.
            </p>
            <p className={`font-mono text-sm leading-relaxed mb-8 break-words ${body}`}>
              Recherche une <strong className="text-blue-400 font-bold">alternance de 3 ans</strong> dès{" "}
              <strong className="text-blue-400 font-bold">septembre 2026</strong>.
              Mobile toute la France · Permis B · EN bilingue.
            </p>
            <div className="flex gap-3 flex-wrap mb-8">
              <a href="/CV_TEDONZON_SNAYEUL.pdf" download
                className="flex items-center gap-2 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 hover:bg-blue-600 transition-colors"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
                Télécharger CV
              </a>
              <a href="#contact"
                className={`flex items-center gap-2 bg-transparent font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border border-blue-500/40 hover:border-blue-400 hover:text-blue-400 transition-colors ${title}`}
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
                Contact
              </a>
            </div>
          </div>

          {/* Coordonnées */}
          <div className={`border border-blue-500/20 overflow-hidden ${surface}`}>
            <div className="px-3 py-2 bg-blue-500/10 border-b border-blue-500/20">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">&gt; COORDONNÉES</span>
            </div>
            {contacts.map((c, i) => (
              <div key={c.label}
                className={`flex items-center gap-2 px-3 py-2.5 border-b border-blue-500/10 last:border-0 ${i % 2 === 1 ? rowAlt : ""}`}>
                <span className="text-base shrink-0 w-7 text-blue-400">{c.icon}</span>
                <span className={`font-mono text-[10px] uppercase tracking-wider shrink-0 w-16 ${label}`}>{c.label}</span>
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-blue-400 hover:opacity-75 transition-opacity ml-auto text-right truncate max-w-[160px] sm:max-w-none">
                  {c.value} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* LIGNE 2 : Infos pleine largeur */}
        <div className={`border border-blue-500/20 overflow-hidden mb-6 ${surface}`}>
          <div className="px-3 py-2 bg-blue-500/10 border-b border-blue-500/20">
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">&gt; INFORMATIONS</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {infos.map((info, i) => (
              <div key={info.label}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-4 text-center
                  ${i < 5 ? "border-r border-blue-500/10" : ""}
                  ${i >= 2 && i < 4 ? "border-t border-blue-500/10 sm:border-t-0" : ""}
                  ${i >= 4 ? "border-t border-blue-500/10 lg:border-t-0" : ""}`}>
                <span className="text-xl mb-1">{info.icon}</span>
                <span className={`font-mono text-[9px] uppercase tracking-wider ${label}`}>{info.label}</span>
                <span className={`font-mono text-xs font-semibold text-center ${infoVal}`}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LIGNE 3 : Réseaux sociaux */}
        <div className={`border border-blue-500/20 overflow-hidden ${surface}`}>
          <div className="px-3 py-2 bg-blue-500/10 border-b border-blue-500/20">
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">&gt; RÉSEAUX SOCIAUX</span>
          </div>
          <div className="flex">
            {socials.map((s, i) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className={`flex flex-col items-center justify-center gap-2 py-5 flex-1 hover:text-blue-400 hover:bg-blue-500/5 transition-colors
                  ${dark ? "text-gray-500" : "text-gray-400"}
                  ${i < socials.length - 1 ? "border-r border-blue-500/10" : ""}`}>
                {s.icon}
                <span className="font-mono text-[9px] uppercase tracking-wider hidden sm:block">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}