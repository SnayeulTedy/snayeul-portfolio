import SectionHeader from "../components/SectionHeader";
import { SKILL_GROUPS } from "../data";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeader num="03" title="SKILLS" />

        <div className={styles.grid}>
          {SKILL_GROUPS.map((g, gi) => (
            <div key={g.cat} className={styles.group}>
              <div
                className={styles.groupBar}
                style={{ background: g.color, boxShadow: `0 0 12px ${g.color}50` }}
              />
              <div className={styles.groupHead}>
                <span className={`${styles.groupNum} mono`}>0{gi + 1}</span>
                <span
                  className={`${styles.groupTitle} mono`}
                  style={{ color: g.color }}
                >
                  {g.cat.toUpperCase()}
                </span>
              </div>
              <div className={styles.tags}>
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={`${styles.tag} mono`}
                    style={{
                      borderColor: `${g.color}40`,
                      color: g.color,
                      background: `${g.color}08`,
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