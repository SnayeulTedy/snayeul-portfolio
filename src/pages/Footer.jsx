import { PROFILE } from "../data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={`${styles.logo} mono`}>
        Snayeul<span className={styles.accent}>_</span>Dev
      </a>
      <p className={`${styles.copy} mono`}>
        © {new Date().getFullYear()} {PROFILE.fullName} · Tous droits réservés
      </p>
      <a href="#hero" className={`${styles.top} mono`} aria-label="Retour en haut">
        ↑ TOP
      </a>
    </footer>
  );
}