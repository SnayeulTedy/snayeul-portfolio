const experiences = [
  { period:"Nov. 2025 – Avr. 2026", title:"Stage Alterné — Développeur Full-Stack", place:"ZubHub · France",                   desc:"Création de microservices et API REST Java/Spring Boot 3&4. Migrations Java 21→25. Développement React et architecture Spring Cloud.", stack:"Java 21/25 · Spring Boot · Spring Cloud · Kafka · Redis · PostgreSQL · React" },
  { period:"Juin – Août 2025",      title:"Stage — Développeur Web",                place:"HES Digital Services · Douala",     desc:"Développement complet d'une application de gestion avec géolocalisation.", stack:"C# .NET MVC · Entity Framework · REST API · SQL Server" },
  { period:"Juin – Sept. 2024",     title:"Stage — Analyste-Développeur",           place:"ETS Le Progrès · Douala, Cameroun", desc:"Conception et développement d'un système de gestion des stocks.", stack:"C# · Architecture multicouche · POO · SQL Server" },
];

const formations = [
  { period:"2025 – 2026", title:"APCI Informatique",            place:"CESI École d'Ingénieurs" },
  { period:"2024 – 2025", title:"DEC Informatique",             place:"CCNB, Canada"            },
  { period:"2023 – 2024", title:"Technologie de l'Information", place:"IUC, Douala"              },
];

export default function ParcoursSection({ dark }) {
  const bg     = dark ? "bg-[#060A12]" : "bg-[#F0F4FF]";
  const cellBg = dark ? "bg-[#060A12]" : "bg-white";
  const title  = dark ? "text-white"   : "text-[#0A1628]";
  const body   = dark ? "text-gray-500": "text-gray-500";
  const place  = dark ? "text-gray-600": "text-gray-400";

  return (
    <section id="parcours" className={`border-t border-blue-500/20 overflow-hidden ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 05</span>
          <span className={`font-mono text-xl sm:text-2xl font-bold tracking-tight ${title}`}>PARCOURS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-blue-500/10 border border-blue-500/20">

          {/* Expériences */}
          <div className={`${cellBg} p-6`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-400" style={{ boxShadow:"0 0 10px #4D8EFF" }} />
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">Expériences</span>
            </div>
            <div className="flex flex-col gap-4">
              {experiences.map((e, i) => (
                <div key={i} className="border border-blue-500/20 border-l-2 border-l-blue-500 p-4">
                  <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">{e.period}</div>
                  <div className={`font-mono text-sm font-bold mb-0.5 ${title}`}>{e.title}</div>
                  <div className={`font-mono text-[11px] mb-2 ${place}`}>{e.place}</div>
                  <p className={`font-mono text-xs leading-relaxed mb-3 ${body}`}>{e.desc}</p>
                  <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/25 px-2 py-1 inline-block">{e.stack}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div className={`${cellBg} p-6`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-500" style={{ boxShadow:"0 0 10px #7C5CFC" }} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color:"#7C5CFC" }}>Formation</span>
            </div>
            <div className="flex flex-col gap-4">
              {formations.map((f, i) => (
                <div key={i} className="border border-blue-500/20 p-4" style={{ borderLeftWidth:2, borderLeftColor:"#7C5CFC" }}>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color:"#7C5CFC" }}>{f.period}</div>
                  <div className={`font-mono text-sm font-bold mb-0.5 ${title}`}>{f.title}</div>
                  <div className={`font-mono text-[11px] ${place}`}>{f.place}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}