import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../components/SectionHeader";
import { PROFILE } from "../data";
import styles from "./ContactSection.module.css";

// ─── Remplace ces valeurs par tes clés EmailJS ──────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

export default function ContactSection() {
  const formRef = useRef(null);
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [status,  setStatus]  = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const SOCIAL_LINKS = [
    { icon: "⌥", label: "GitHub",    href: PROFILE.github },
    { icon: "in", label: "LinkedIn",  href: PROFILE.linkedin },
    { icon: "✉",  label: "Email",     href: `mailto:${PROFILE.email}` },
    { icon: "💬", label: "WhatsApp",  href: PROFILE.whatsapp },
    { icon: "✈",  label: "Telegram",  href: PROFILE.telegram },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionHeader num="06" title="CONTACT" />

        <div className={styles.wrapper}>
          {/* ── LEFT: info panel ── */}
          <div className={styles.left}>
            {/* Terminal dots */}
            <div className={styles.termDots}>
              {["#34d399","#fbbf24","#f87171"].map((c) => (
                <span key={c} style={{ background: c }} className={styles.termDot} />
              ))}
            </div>
            <div className={`${styles.termCmd} mono`}>&gt; ./contact.sh</div>

            <h2 className={`${styles.heading} mono`}>
              TRAVAILLONS<br />
              <span className={styles.headingMuted}>ENSEMBLE_</span>
            </h2>

            <p className={styles.lead}>
              Disponible pour une alternance de 3 ans dès septembre 2026.
              N'hésitez pas à me contacter, je réponds rapidement.
            </p>

            <div className={styles.infos}>
              {[
                { label: "EMAIL", value: PROFILE.email,   href: `mailto:${PROFILE.email}` },
                { label: "TÉL",   value: PROFILE.phone,   href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
                { label: "LIEU",  value: PROFILE.location, href: null },
              ].map((c) => (
                <div key={c.label} className={styles.infoRow}>
                  <span className={`${styles.infoLabel} mono`}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className={styles.infoVal}>{c.value}</a>
                  ) : (
                    <span className={styles.infoVal}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  style={{ borderRight: i < SOCIAL_LINKS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
                  title={s.label}
                >
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <span className={`${styles.socialLabel} mono`}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className={styles.right}>
            <div className={`${styles.formCmd} mono`}>
              &gt; send_message --to {PROFILE.email}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={`${styles.label} mono`} htmlFor="name">NOM</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={`${styles.label} mono`} htmlFor="email">EMAIL</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={`${styles.label} mono`} htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande…"
                  required
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={`${styles.submit} btn-blue`}
                disabled={status === "sending"}
                style={{ justifyContent: "center", clipPath: "none" }}
              >
                {status === "sending" ? "ENVOI EN COURS..." : "✉ ENVOYER LE MESSAGE"}
              </button>

              {status === "success" && (
                <div className={`${styles.feedback} ${styles.feedbackSuccess} mono`}>
                  &gt; MESSAGE_SENT ✓ — Je vous réponds sous 48h.
                </div>
              )}
              {status === "error" && (
                <div className={`${styles.feedback} ${styles.feedbackError} mono`}>
                  &gt; ERREUR — Réessayez ou contactez-moi directement.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}