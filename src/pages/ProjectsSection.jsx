import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../data";
import styles from "./ProjectsSection.module.css";

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeader num="04" title="PROJETS" />

        <div className={styles.list}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className={`${styles.row} ${hovered === i ? styles.rowHovered : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span className={`${styles.num} mono`}>{p.num}</span>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.contentHead}>
                  <span className={`${styles.title} mono`}>{p.title}</span>
                  <span className={`${styles.year} mono`}>_{p.year}</span>
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={`${styles.tag} ${hovered === i ? styles.tagActive : ""} mono`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.desc}>{p.desc}</p>

                {/* Mobile links */}
                <div className={styles.mobileLinks}>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className={`${styles.linkBtn} ${styles.linkBtnBlue} mono`}>
                      ↗ Live
                    </a>
                  ) : (
                    <span className={`${styles.linkBtn} ${styles.linkBtnDisabled} mono`}>↗ N/A</span>
                  )}
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                    className={`${styles.linkBtn} mono`}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </div>

              {/* Desktop links */}
              <div className={`${styles.desktopLinks} ${hovered === i ? styles.desktopLinksVisible : ""}`}>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className={styles.iconBtn} title="Voir le site">
                    ↗
                  </a>
                ) : (
                  <span className={`${styles.iconBtn} ${styles.iconBtnDisabled}`} title="Pas de démo">—</span>
                )}
                <a href={p.repo} target="_blank" rel="noopener noreferrer"
                  className={`${styles.iconBtn} ${styles.iconBtnGhost}`} title="GitHub">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a
            href="https://github.com/SnayeulTedy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Tous les projets → GitHub
          </a>
        </div>
      </div>
    </section>
  );
}