import { useState, useEffect } from "react";
import { NAV_ITEMS, PROFILE } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useIsMobile } from "../hooks/useIsMobile";
import styles from "./Navbar.module.css";

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled]   = useState(false);
  const [drawerOpen, setDrawer]   = useState(false);
  const isMobile                  = useIsMobile();
  const activeId                  = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Fermer le drawer si on passe en desktop
  useEffect(() => { if (!isMobile) setDrawer(false); }, [isMobile]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        {/* Logo */}
        <a href="#hero" className={`${styles.logo} mono`}>
          Snayeul<span className={styles.accent}>_</span>Dev
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul className={styles.links}>
            {NAV_ITEMS.map((n, i) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`${styles.link} ${activeId === n.id ? styles.linkActive : ""}`}
                >
                  <span className={`${styles.linkNum} mono`}>0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Right actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={onToggleTheme}
            aria-label="Changer de thème"
          >
            {dark ? "☀" : "🌙"}
          </button>

          {!isMobile && (
            <a href={PROFILE.cv} download className={styles.cvBtn}>
              CV
            </a>
          )}

          {isMobile && (
            <button
              className={styles.burgerBtn}
              onClick={() => setDrawer(true)}
              aria-label="Ouvrir le menu"
            >
              <span /><span /><span />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobile && drawerOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setDrawer(false)}
          />
          <aside className={styles.drawer}>
            <div className={styles.drawerHead}>
              <span className={`${styles.logo} mono`}>
                Snayeul<span className={styles.accent}>_</span>Dev
              </span>
              <button
                className={styles.closeBtn}
                onClick={() => setDrawer(false)}
                aria-label="Fermer le menu"
              >
                ✕
              </button>
            </div>

            <nav className={styles.drawerLinks}>
              {NAV_ITEMS.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`${styles.drawerLink} ${activeId === n.id ? styles.drawerLinkActive : ""}`}
                  onClick={() => setDrawer(false)}
                >
                  <span className={`${styles.drawerNum} mono`}>0{i + 1}</span>
                  {n.label}
                </a>
              ))}
            </nav>

            <div className={styles.drawerFoot}>
              <a href={PROFILE.cv} download className="btn-blue" style={{ justifyContent: "center" }}>
                Télécharger CV
              </a>
              <button
                onClick={onToggleTheme}
                className={styles.themeDrawerBtn}
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