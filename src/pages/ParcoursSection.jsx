import SectionHeader from "../components/SectionHeader";
import { EXPERIENCES, FORMATIONS } from "../data";
import styles from "./ParcoursSection.module.css";

function TimelineCard({ item, color }) {
  return (
    <div className={styles.card} style={{ borderLeftColor: color }}>
      <div className={`${styles.period} mono`} style={{ color }}>{item.period}</div>
      <div className={styles.cardTitle}>{item.title}</div>
      <div className={`${styles.place} mono`}>{item.place}</div>
      {item.desc && <p className={styles.cardDesc}>{item.desc}</p>}
      {item.stack && (
        <div className={styles.stack} style={{ color, background: `${color}0D`, borderColor: `${color}30` }}>
          <span className="mono">{item.stack}</span>
        </div>
      )}
    </div>
  );
}

export default function ParcoursSection() {
  const BLUE   = "var(--blue)";
  const PURPLE = "#7C5CFC";

  return (
    <section id="parcours" className={styles.section}>
      <div className="container">
        <SectionHeader num="05" title="PARCOURS" />

        <div className={styles.cols}>
          {/* Expériences */}
          <div>
            <div className={styles.colHead}>
              <span className={styles.colDot} style={{ background: BLUE, boxShadow: `0 0 10px var(--blue)` }} />
              <span className={`${styles.colTitle} mono`} style={{ color: BLUE }}>EXPÉRIENCES</span>
            </div>
            <div className={styles.cards}>
              {EXPERIENCES.map((e, i) => (
                <TimelineCard key={i} item={e} color={BLUE} />
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <div className={styles.colHead}>
              <span className={styles.colDot} style={{ background: PURPLE, boxShadow: `0 0 10px ${PURPLE}` }} />
              <span className={`${styles.colTitle} mono`} style={{ color: PURPLE }}>FORMATION</span>
            </div>
            <div className={styles.cards}>
              {FORMATIONS.map((f, i) => (
                <TimelineCard key={i} item={f} color={PURPLE} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}