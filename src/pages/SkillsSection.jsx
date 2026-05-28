// ─── DONNÉES ────────────────────────────────────────────
const skillGroups = [
  {
    num:   "01",
    cat:   "Backend & Architecture",
    color: "#4D8EFF",
    items: ["Java 21 & 25", "Spring Boot 3 & 4", "Microservices", "Spring Cloud", "C# / ASP.NET", "PHP", "Node.js", "Python"],
  },
  {
    num:   "02",
    cat:   "Frontend & Mobile",
    color: "#7C5CFC",
    items: ["React.js", "Angular", "HTML · CSS · JS", "Flutter / Dart"],
  },
  {
    num:   "03",
    cat:   "Bases de données",
    color: "#06B6D4",
    items: ["PostgreSQL 15/18", "MySQL", "SQL Server", "MongoDB", "Kafka", "Redis"],
  },
  {
    num:   "04",
    cat:   "Langages & Outils",
    color: "#10B981",
    items: ["Git / GitHub", "REST API / SOLID", "Méthode Agile", "Docker (bases)", "UML / Merise", "Figma"],
  },
];

// ─── COMPOSANT ──────────────────────────────────────────
export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-blue-500/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        {/* En-tête */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 03</span>
          <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">SKILLS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-blue-500/10 border border-blue-500/20">
          {skillGroups.map((g) => (
            <div key={g.cat} className="bg-[#060A12] p-6">

              {/* Barre colorée */}
              <div
                className="h-0.5 mb-5"
                style={{ background: g.color, boxShadow: `0 0 12px ${g.color}60` }}
              />

              {/* Titre groupe */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] text-gray-600">{g.num}</span>
                <span
                  className="font-mono text-sm font-bold uppercase tracking-widest"
                  style={{ color: g.color }}
                >
                  {g.cat}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 border"
                    style={{
                      color:            g.color,
                      borderColor:      `${g.color}40`,
                      backgroundColor:  `${g.color}08`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}