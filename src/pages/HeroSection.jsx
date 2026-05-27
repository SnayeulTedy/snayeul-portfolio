import { useEffect, useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
import { PROFILE, STATS } from "../data";
import styles from "./HeroSection.module.css";

export default function HeroSection({ dark }) {
  const [fY, setFY] = useState(0);

  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.04;
      setFY(Math.sin(t) * 8);
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <ParticleCanvas dark={dark} />

      {/* Vertical deco line */}
      <div className={styles.decoLine} />

      {/* Big ghost number */}
      <div className={styles.ghostNum}>01</div>

      <div className={`container ${styles.inner}`}>
        {/* ── LEFT: text ── */}
        <div className={styles.textCol}>
          {/* Status badge */}
          <div className={`${styles.badge} mono`}>
            <span className={styles.badgeDot} />
            &gt; OPEN_TO_WORK · SEPT_2026
          </div>

          {/* Name */}
          <h1 className={styles.title}>
            <span className={`${styles.nameFirst} mono`}>SNAYEUL</span>
            <span className={`${styles.nameLast} mono`}>TEDONZON</span>
          </h1>

          {/* Role */}
          <div className={styles.role}>
            <div className={styles.roleLine} />
            <span className="mono">FULL-STACK · JAVA · SPRING BOOT · REACT · ANGULAR</span>
          </div>

          {/* Description */}
          <p className={styles.desc}>
            Étudiant ingénieur au CESI. 3 stages en production — microservices,
            React, Angular. Mobile sur toute la France, disponible dès septembre 2026.
          </p>

          {/* CTA buttons */}
          <div className={styles.ctas}>
            <a href="#projects" className="btn-blue">
              Voir les projets
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Contact</a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={s.label} className={`${styles.stat} ${i < STATS.length - 1 ? styles.statBorder : ""}`}>
                <div className={`${styles.statNum} mono`}>{s.value}</div>
                <div className={`${styles.statLabel} mono`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo frame ── */}
        <div className={styles.photoCol}>
          {/* Crosshair deco */}
          <div className={styles.crosshair}>
            <div className={styles.crossH} />
            <div className={styles.crossV} />
          </div>

          <div className={styles.photoWrap}>
            {/* Corner brackets */}
            {[
              { top: 0, left: 0 },
              { top: 0, right: 0 },
              { bottom: 0, left: 0 },
              { bottom: 0, right: 0 },
            ].map((pos, i) => (
              <div key={i} className={styles.corner} style={pos} />
            ))}

            {/* Photo */}
            <div className={styles.photoInner}>
              <img
                src={PROFILE.photo}
                alt={PROFILE.fullName}
                className={styles.photo}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback */}
              <div className={styles.photoFallback} style={{ display: "none" }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none"
                  stroke="var(--text3)" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="mono">/images/dev.jpg</span>
              </div>
              {/* Scanlines */}
              <div className={styles.scanlines} />
            </div>

            {/* Badge STATUS */}
            <div
              className={`${styles.floatBadge} ${styles.badgeStatus} mono`}
              style={{ transform: `translateY(${fY}px)` }}
            >
              <div className={styles.floatLabel}>STATUS</div>
              <div className={styles.floatVal}>
                <span className={styles.greenDot} />
                AVAILABLE
              </div>
            </div>

            {/* Badge STACK */}
            <div
              className={`${styles.floatBadge} ${styles.badgeStack} mono`}
              style={{ transform: `translateY(${-fY}px)` }}
            >
              <div className={styles.floatLabel}>STACK</div>
              <div className={`${styles.floatVal} ${styles.floatBlue}`}>Java · React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}