import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useScrollSpy } from "../hooks/useScrollSpy";

// ─── DONNÉES ────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Accueil",  id: "hero"     },
  { label: "À propos", id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Projets",  id: "projects" },
  { label: "Parcours", id: "parcours" },
  { label: "Contact",  id: "contact"  },
];

const CV_URL = "/CVPro_TEDONZON SNAYEUL.pdf";

// ─── COMPOSANT ──────────────────────────────────────────
export default function Navbar({ dark, onToggleTheme }) {
  const isMobile = useIsMobile();
  const activeId = useScrollSpy(NAV_LINKS.map((n) => n.id));
  const [drawerOpen, setDrawer] = useState(false);

  useEffect(() => {
    if (!isMobile) setDrawer(false);
  }, [isMobile]);

  return (
    <>
      {/* ── BARRE DE NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-stretch justify-between h-13 bg-[#060A12]/90 border-b border-blue-500/20 backdrop-blur-md">

        {/* Logo */}
        <a href="#hero" className="flex items-center font-mono font-bold text-white text-base px-6 border-r border-blue-500/20 hover:text-blue-400 transition-colors">
          Snayeul<span className="text-blue-400">_</span>Dev
        </a>

        {/* Liens desktop */}
        {!isMobile && (
          <ul className="flex flex-2 list-none m-0 p-0 ">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-1 px-4 h-full font-mono text-xs font-semibold uppercase tracking-wider border-r border-blue-500/20 transition-colors
                    ${activeId === link.id
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-400 hover:text-white hover:bg-blue-500/10"
                    }`}
                >
                  <span className="text-gray-600 text-[10px]">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Actions droite */}
        <div className="flex items-stretch border-l border-blue-500/20">
          {/* Toggle thème */}
          <button
            onClick={onToggleTheme}
            className="px-4 text-gray-400 hover:text-white hover:bg-blue-500/10 border-r border-blue-500/20 transition-colors text-base"
          >
            {dark ? "☀" : "🌙"}
          </button>

          {/* Bouton CV desktop */}
          {!isMobile && (
            <a
              href={CV_URL}
              download
              className="flex items-center px-6 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
            >
              CV
            </a>
          )}

          {/* Burger mobile */}
          {isMobile && (
            <button
              onClick={() => setDrawer(true)}
              className="flex flex-col justify-center gap-1 px-4 bg-transparent border-none cursor-pointer"
            >
              <span className="block w-4 h-px bg-gray-400" />
              <span className="block w-4 h-px bg-gray-400" />
              <span className="block w-4 h-px bg-gray-400" />
            </button>
          )}
        </div>
      </nav>

      {/* ── DRAWER MOBILE ── */}
      {isMobile && drawerOpen && (
        <>
          {/* Fond sombre */}
          <div
            className="fixed inset-0 z-40 bg-black/65"
            onClick={() => setDrawer(false)}
          />

          {/* Panneau */}
          <aside className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0F1628] border-l border-blue-500/30 flex flex-col">

            {/* En-tête */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-blue-500/20">
              <span className="font-mono font-bold text-white">
                Snayeul<span className="text-blue-400">_</span>Dev
              </span>
              <button
                onClick={() => setDrawer(false)}
                className="w-7 h-7 flex items-center justify-content border border-blue-500/30 text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {/* Liens */}
            <nav className="flex-1 py-2 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setDrawer(false)}
                  className={`flex items-center gap-3 px-5 py-3 font-mono text-sm font-semibold border-l-2 transition-colors
                    ${activeId === link.id
                      ? "text-blue-400 border-blue-400 bg-blue-500/10"
                      : "text-gray-400 border-transparent hover:text-blue-400 hover:bg-blue-500/10"
                    }`}
                >
                  <span className="text-gray-600 text-xs">0{i + 1}</span>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Pied */}
            <div className="p-4 border-t border-blue-500/20 flex flex-col gap-3">
              <a
                href={CV_URL}
                download
                className="flex items-center justify-center py-2 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
              >
                Télécharger CV
              </a>
              <button
                onClick={onToggleTheme}
                className="py-2 bg-[#151E35] border border-blue-500/30 text-gray-400 font-mono text-xs font-semibold hover:text-white transition-colors"
              >
                {dark ? "☀ Mode clair" : "🌙 Mode sombre"}
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}