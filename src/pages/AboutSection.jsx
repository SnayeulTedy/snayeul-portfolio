import SectionHeader from "../components/SectionHeader";
import { PROFILE } from "../data";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionHeader num="02" title="À_PROPOS" />

        <div className={styles.grid}>
          {/* ── LEFT: bio + actions + socials ── */}
          <div className={styles.left}>
            {PROFILE.bio.map((p, i) => (
              <p
                key={i}
                className={styles.bio}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <div className={styles.actions}>
              <a href={PROFILE.cv} download className="btn-blue">
                Télécharger CV
              </a>
              <a href="#contact" className="btn-ghost">
                Contact
              </a>
            </div>

            {/* Socials */}
            <div className={styles.socials}>
              {PROFILE.contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={c.label}
                >
                  <span className={styles.socialIcon}>{c.icon}</span>
                  <span className={`${styles.socialLabel} mono`}>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: info + coordonnées ── */}
          <div className={styles.right}>
            {/* <table className={styles.table}>
              <tbody>
                {PROFILE.infos.map((info, i) => (
                  <tr key={info.label} className={i % 2 === 1 ? styles.rowAlt : ""}>
                    <td className={styles.tdIcon}>{info.icon}</td>
                    <td className={`${styles.tdLabel} mono`}>{info.label}</td>
                    <td className={styles.tdVal}>{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}

            {/* Séparateur coordonnées */}
            <div className={styles.separator}>
              <span className={`${styles.separatorText} mono`}>&gt; COORDONNÉES</span>
            </div>

            <table className={styles.table}>
              <tbody>
                {PROFILE.contacts.map((c, i) => (
                  <tr key={c.label} className={i % 2 === 1 ? styles.rowAlt : ""}>
                    <td className={styles.tdIcon}>
                      <span style={{ color: "var(--blue)" }}>{c.icon}</span>
                    </td>
                    <td className={`${styles.tdLabel} mono`}>{c.label}</td>
                    <td className={styles.tdVal}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactLink} mono`}
                      >
                        {c.value} ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}