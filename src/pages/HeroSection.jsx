import { useEffect, useRef, useState } from "react";

// ─── PARTICULES ──────────────────────────────────────────
function ParticleCanvas({ dark }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
      o: Math.random() * 0.35 + 0.08,
    }));

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const c = dark ? "77,142,255" : "11,94,215";

      pts.forEach((p) => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},${p.o})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${c},${(1 - d / 90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ─── HERO ────────────────────────────────────────────────
export default function HeroSection({ dark }) {
  const [fY, setFY] = useState(0);

  // Animation badges flottants
  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.04;
      setFY(Math.sin(t) * 8);
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(77,142,255,0.08) 0%, transparent 65%)",
        backgroundImage: `
          radial-gradient(ellipse 70% 55% at 65% 45%, rgba(77,142,255,0.08) 0%, transparent 65%),
          linear-gradient(rgba(77,142,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(77,142,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 32px 32px, 32px 32px",
      }}
    >
      <ParticleCanvas dark={dark} />

      {/* Ligne décorative gauche */}
      <div className="hidden md:block absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      {/* Numéro fantôme */}
      <div className="hidden md:block absolute right-[2%] top-1/2 -translate-y-1/2 text-[22vw] font-bold font-mono select-none pointer-events-none overflow-hidden"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(77,142,255,0.06)" }}>
        01
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 pt-24 pb-12 grid md:grid-cols-2 gap-0 items-center">

        {/* ── Colonne gauche : texte ── */}
        <div className="flex flex-col items-start text-left">

          {/* Badge disponibilité */}
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            &gt; OPEN_TO_WORK · SEPT_2026
          </div>

          {/* Nom */}
          <h1 className="mb-5 leading-none tracking-tighter">
            <span className="block text-white font-mono font-bold"
              style={{ fontSize: "clamp(3rem,7vw,6.5rem)" }}>
              SNAYEUL
            </span>
            <span className="block font-mono font-bold"
              style={{
                fontSize: "clamp(3rem,7vw,6.5rem)",
                color: "transparent",
                WebkitTextStroke: "2px #4D8EFF",
              }}>
              TEDONZON
            </span>
          </h1>

          {/* Rôle */}
          <div className="flex items-center gap-3 mb-5 font-mono text-xs text-gray-400 tracking-widest">
            <div className="w-8 h-px bg-blue-500 shrink-0" />
            FULL-STACK · JAVA · SPRING BOOT · REACT · ANGULAR
          </div>

          {/* Description */}
          <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-md mb-8">
            Étudiant ingénieur en formation au CESI. Je transforme des idées 
            en applications fiables et élégantes, 
            avec une attention particulière pour les architectures modernes.
            Mobile sur toute la France, disponible dès septembre 2026.
          </p>

          {/* Boutons */}
          <div className="flex gap-3 flex-wrap mb-10">
            <a href="#projects"
              className="flex items-center gap-2 bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-blue-600 transition-colors"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
              Voir les projets
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact"
              className="flex items-center gap-2 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 border border-blue-500/40 hover:border-blue-400 hover:text-blue-400 transition-colors"
              style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}>
              Contact
            </a>
          </div>

          {/* Stats */}
          <div className="flex border border-blue-500/20">
            {[
              { num: "2+",   label: "EXPERIENCES"  },
              { num: "3+",  label: "PROJETS" },
              { num: "5+", label: "TECHNOLOGIES" },
            ].map((s, i) => (
              <div key={s.label}
                className={`px-5 py-2.5 text-center ${i > 0 ? "border-l border-blue-500/20" : ""}`}>
                <div className="font-mono font-bold text-blue-400 text-2xl leading-none text-center">{s.num}</div>
                <div className="font-mono text-gray-600 text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Colonne droite : photo ── */}
        <div className="hidden md:flex justify-center items-center relative pl-12">

          {/* Croix de visée */}
          <div className="absolute top-[15%] right-[10%] w-6 h-6 pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500/35" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/35" />
          </div>

          {/* Cadre photo */}
          <div className="relative w-72 h-96">
            {/* Coins décoratifs */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/75 z-10" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/75 z-10" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500/75 z-10" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/75 z-10" />

            {/* Photo */}
            <div className="absolute inset-2.5 overflow-hidden border border-blue-500/30 bg-[#0F1628]">
              <img
                src="/images/dev.jpg"
                alt="Snayeul Tedonzon"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2 text-gray-600">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-mono text-xs">/images/dev.jpg</span>
              </div>
              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)" }} />
            </div>

            {/* Badge statut */}
            <div
              className="absolute -bottom-4 -left-5 z-20 bg-[#060A12] border border-blue-500/30 px-3 py-2 font-mono"
              style={{ transform: `translateY(${fY}px)` }}
            >
              <div className="text-gray-600 text-[10px] uppercase tracking-widest">STATUS</div>
              <div className="flex items-center gap-1.5 text-white text-sm font-bold mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#34d399]" />
                AVAILABLE
              </div>
            </div>

            {/* Badge stack */}
            <div
              className="absolute -top-4 -right-5 z-20 bg-[#060A12] border border-blue-500/30 px-3 py-2 font-mono"
              style={{ transform: `translateY(${-fY}px)` }}
            >
              <div className="text-gray-600 text-[10px] uppercase tracking-widest">DEVELOPPEUR</div>
              <div className="text-blue-400 text-sm font-bold mt-0.5">FULL-STACK</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}