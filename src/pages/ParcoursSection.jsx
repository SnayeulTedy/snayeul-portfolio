// ─── DONNÉES ────────────────────────────────────────────
const experiences = [
  {
    period: "Nov. 2025 – Avr. 2026",
    title:  "Stage Alterné — Développeur Full-Stack",
    place:  "ZubHub · France",
    desc:   "Création de microservices et API REST Java/Spring Boot 3&4. Migrations Java 21→25 et Spring Boot 3→4. Développement React et architecture Spring Cloud.",
    stack:  "Java 21/25 · Spring Boot · Spring Cloud · Kafka · Redis · PostgreSQL · React",
  },
  {
    period: "Juin – Août 2025",
    title:  "Stage — Développeur Web",
    place:  "HES Digital Services · Douala, Cameroun",
    desc:   "Développement complet d'une application de gestion avec géolocalisation.",
    stack:  "C# .NET MVC · Entity Framework · REST API · SQL Server",
  },
  {
    period: "Juin – Sept. 2024",
    title:  "Stage — Analyste-Développeur",
    place:  "ETS Le Progrès · Douala, Cameroun",
    desc:   "Conception et développement d'un système de gestion des stocks.",
    stack:  "C# · Architecture multicouche · POO · SQL Server",
  },
];

const formations = [
  // { period: "2026 – 2029", title: "Cycle Ingénieur Informatique", place: "CESI École d'Ingénieurs" },
  { period: "2025 – 2026", title: "APCI Informatique",            place: "CESI École d'Ingénieurs" },
  { period: "2024 – 2025", title: "DEC Informatique",             place: "CCNB, Canada"            },
  { period: "2023 – 2024", title: "Technologie de l'Information", place: "IUC, Douala"              },
];

// ─── COMPOSANT ──────────────────────────────────────────
export default function ParcoursSection() {
  return (
    <section id="parcours" className="border-t border-blue-500/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        {/* En-tête */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 05</span>
          <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">PARCOURS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-blue-500/10 border border-blue-500/20">

          {/* ── Expériences ── */}
          <div className="bg-[#060A12] p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-400" style={{ boxShadow: "0 0 10px #4D8EFF" }} />
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">Expériences</span>
            </div>

            <div className="flex flex-col gap-4">
              {experiences.map((e, i) => (
                <div key={i} className="border border-blue-500/20 border-l-2 border-l-blue-500 p-4">
                  <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">{e.period}</div>
                  <div className="font-mono text-sm font-bold text-white mb-0.5">{e.title}</div>
                  <div className="font-mono text-[11px] text-gray-600 mb-2">{e.place}</div>
                  <p className="font-mono text-xs text-gray-500 leading-relaxed mb-3">{e.desc}</p>
                  <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/25 px-2 py-1 inline-block">
                    {e.stack}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Formation ── */}
          <div className="bg-[#060A12] p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-500" style={{ boxShadow: "0 0 10px #7C5CFC" }} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: "#7C5CFC" }}>Formation</span>
            </div>

            <div className="flex flex-col gap-4">
              {formations.map((f, i) => (
                <div key={i} className="border border-blue-500/20 p-4" style={{ borderLeftWidth: 2, borderLeftColor: "#7C5CFC" }}>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "#7C5CFC" }}>{f.period}</div>
                  <div className="font-mono text-sm font-bold text-white mb-0.5">{f.title}</div>
                  <div className="font-mono text-[11px] text-gray-600">{f.place}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}