import { useState } from "react";

const projects = [
  { num:"01", title:"Portfolio Développeur", year:"2026", tags:["React","Tailwind","Vite"],          desc:"Portfolio personnel full React — design system custom, dark/light mode, déploiement Vercel.", live:"https://snayeultedonzon-website.vercel.app/", repo:"https://github.com/SnayeulTedy/snayeultedonzon-website" },
  { num:"02", title:"Game Library",          year:"2026", tags:["Angular","ASP.NET","REST API"],     desc:"Application web CRUD de gestion de jeux vidéo et consoles — interface Angular responsive, API ASP.NET.", live:null, repo:"https://github.com/SnayeulTedy" },
  { num:"03", title:"Stageo",                year:"2026", tags:["PHP","MySQL","HTML/CSS","JS"],       desc:"Plateforme fullstack de gestion d'offres de stage et suivi des candidatures avec pipeline de données.", live:null, repo:"https://github.com/SnayeulTedy" },
  { num:"04", title:"iSaloon",               year:"2024", tags:["C#","ASP.NET","SQL Server"],        desc:"Application de géolocalisation des salons de coiffure à proximité avec système de réservation intégré.", live:null, repo:"https://github.com/SnayeulTedy/iSaloon" },
];

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function ProjectsSection({ dark }) {
  const [hovered, setHovered] = useState(null);
  const bg    = dark ? "bg-[#060A12]" : "bg-[#F0F4FF]";
  const title = dark ? "text-white"   : "text-[#0A1628]";
  const desc  = dark ? "text-gray-500": "text-gray-500";
  const numC  = dark ? "text-gray-700": "text-gray-400";

  return (
    <section id="projects" className={`border-t border-blue-500/20 overflow-hidden ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 04</span>
          <span className={`font-mono text-xl sm:text-2xl font-bold tracking-tight ${title}`}>PROJETS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        <div className="border border-blue-500/20">
          {projects.map((p, i) => (
            <div key={p.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center gap-4 sm:gap-0 px-4 sm:px-0 py-4 sm:py-0 border-b border-blue-500/10 last:border-0 transition-all duration-200
                ${hovered === i ? "bg-blue-500/[0.06] border-l-2 border-l-blue-500" : "border-l-2 border-l-transparent"}`}>

              <span className={`font-mono font-bold shrink-0 sm:px-6 sm:py-5 transition-colors duration-200
                ${hovered === i ? "text-blue-400 text-2xl" : `${numC} text-xl sm:text-2xl`}`}>
                {p.num}
              </span>

              <div className="flex-1 min-w-0 sm:px-6 sm:py-5 sm:border-l border-blue-500/10">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`font-mono font-bold text-base ${title}`}>{p.title}</span>
                  <span className={`font-mono text-[11px] ${dark ? "text-gray-600" : "text-gray-400"}`}>_{p.year}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className={`font-mono text-[10px] px-1.5 py-0.5 border transition-colors duration-200
                        ${hovered === i ? "text-blue-400 border-blue-500/40" : `border-blue-500/10 ${dark ? "text-gray-600" : "text-gray-400"}`}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={`font-mono text-xs leading-relaxed ${desc}`}>{p.desc}</p>

                {/* Liens mobile */}
                <div className="flex gap-2 mt-2 sm:hidden">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] font-bold text-white bg-blue-500 px-2.5 py-1 hover:bg-blue-600 transition-colors">↗ Live</a>
                  ) : (
                    <span className={`font-mono text-[10px] border border-blue-500/10 px-2.5 py-1 ${dark ? "text-gray-700" : "text-gray-400"}`}>↗ N/A</span>
                  )}
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                    className={`font-mono text-[10px] font-bold border border-blue-500/20 px-2.5 py-1 hover:text-blue-400 transition-colors flex items-center gap-1 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </div>

              {/* Liens desktop */}
              <div className={`hidden sm:flex items-center gap-0 self-stretch border-l border-blue-500/10 transition-opacity duration-200 ${hovered === i ? "opacity-100" : "opacity-30"}`}>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition-colors text-base">↗</a>
                ) : (
                  <span className={`w-12 h-full flex items-center justify-center text-xs cursor-not-allowed ${dark ? "bg-blue-500/10 text-gray-600" : "bg-blue-500/5 text-gray-400"}`}>—</span>
                )}
                <a href={p.repo} target="_blank" rel="noopener noreferrer"
                  className={`w-12 h-full flex items-center justify-center border-l border-blue-500/10 hover:text-blue-400 hover:bg-blue-500/10 transition-colors ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  <GitHubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <a href="https://github.com/SnayeulTedy" target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-transparent font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border border-blue-500/40 hover:border-blue-400 hover:text-blue-400 transition-colors ${title}`}
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
            Tous les projets → GitHub
          </a>
        </div>
      </div>
    </section>
  );
}