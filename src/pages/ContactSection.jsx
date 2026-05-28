import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── CONFIG EMAILJS ─────────────────────────────────────
// Remplace ces valeurs par tes vraies clés EmailJS
const EMAILJS_SERVICE_ID  = "service_2024f9n";
const EMAILJS_TEMPLATE_ID = "template_xrfwd2s";
const EMAILJS_PUBLIC_KEY  = "ITLCBMk7MM8DjRa_M";

// ─── DONNÉES ────────────────────────────────────────────
const contactInfos = [
  { icon: "✉",  label: "EMAIL", value: "snayeult@outlook.fr",  href: "mailto:snayeult@outlook.fr" },
  { icon: "📞", label: "TÉL.",  value: "+33 7 53 94 91 57",    href: "tel:+33753949157"           },
  { icon: "📍", label: "LIEU",  value: "Nancy, France",         href: null                         },
];

const socialLinks = [
  { icon: "⌥",  label: "GitHub",   href: "https://github.com/SnayeulTedy"                           },
  { icon: "in", label: "LinkedIn", href: "https://www.linkedin.com/in/snayeul-tedonzon-6a8a2929b"   },
  { icon: "✉",  label: "Email",    href: "mailto:snayeult@outlook.fr"                                },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/33753949157"                                 },
  { icon: "✈",  label: "Telegram", href: "https://t.me/Snayeul"                                      },
];

// ─── COMPOSANT ──────────────────────────────────────────
export default function ContactSection() {
  const formRef = useRef(null);
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="border-t border-blue-500/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">

        {/* En-tête */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-blue-400 opacity-80 shrink-0">// 06</span>
          <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">CONTACT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-blue-500/10 border border-blue-500/20">

          {/* ── Panneau gauche bleu ── */}
          <div className="p-6 sm:p-8 flex flex-col" style={{ background: "linear-gradient(160deg, #0B1A3E 0%, #0d2460 100%)" }}>

            {/* Dots terminal */}
            <div className="flex gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            </div>

            <div className="font-mono text-xs text-white/35 mb-5">&gt; ./contact.sh</div>

            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              TRAVAILLONS<br />
              <span className="text-white/50">ENSEMBLE_</span>
            </h2>

            <p className="font-mono text-sm text-white/55 leading-relaxed mb-6">
              Disponible pour une alternance de 3 ans dès septembre 2026.
              N'hésitez pas à me contacter, je réponds rapidement.
            </p>

            {/* Infos contact */}
            <div className="flex flex-col gap-0 mb-6 border border-white/10">
              {contactInfos.map((c, i) => (
                <div key={c.label}
                  className={`flex items-center gap-3 px-4 py-3 ${i < contactInfos.length - 1 ? "border-b border-white/10" : ""}`}>
                  <span className="text-base shrink-0">{c.icon}</span>
                  <span className="font-mono text-[10px] text-white/35 uppercase tracking-widest w-12 shrink-0">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="font-mono text-sm font-semibold text-white hover:text-blue-300 transition-colors ml-auto">
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm font-semibold text-white ml-auto">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex border border-white/10 mt-auto">
              {socialLinks.map((s, i) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className={`flex flex-col items-center justify-center gap-1 py-3 flex-1 text-white/50 hover:text-white hover:bg-white/5 transition-colors
                    ${i < socialLinks.length - 1 ? "border-r border-white/10" : ""}`}>
                  <span className="text-sm">{s.icon}</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/25">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Formulaire droite ── */}
          <div className="bg-[#060A12] p-6 sm:p-8 flex flex-col">
            <div className="font-mono text-xs text-gray-600 mb-6">
              &gt; send_message --to snayeult@outlook.fr
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">

              {/* Nom + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">NOM</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="bg-[#0D1526] border border-blue-500/20 px-3 py-2.5 font-mono text-sm text-white placeholder-gray-700 outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-[#0D1526] border border-blue-500/20 px-3 py-2.5 font-mono text-sm text-white placeholder-gray-700 outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">MESSAGE</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre projet ou votre demande…"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="bg-[#0D1526] border border-blue-500/20 px-3 py-2.5 font-mono text-sm text-white placeholder-gray-700 outline-none focus:border-blue-500/60 transition-colors resize-none flex-1"
                />
              </div>

              {/* Bouton envoyer */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? "ENVOI EN COURS..." : "✉ ENVOYER LE MESSAGE"}
              </button>

              {/* Feedback */}
              {status === "success" && (
                <div className="font-mono text-xs text-green-400 bg-green-400/5 border border-green-400/20 px-4 py-3">
                  &gt; MESSAGE_SENT ✓ — Je vous réponds sous 48h.
                </div>
              )}
              {status === "error" && (
                <div className="font-mono text-xs text-red-400 bg-red-400/5 border border-red-400/20 px-4 py-3">
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