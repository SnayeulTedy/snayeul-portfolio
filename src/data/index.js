/* ─── NAVIGATION ──────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: "Accueil",     id: "hero" },
  { label: "À propos",    id: "about" },
  { label: "Skills",      id: "skills" },
  { label: "Projets",     id: "projects" },
  { label: "Parcours",    id: "parcours" },
  { label: "Contact",     id: "contact" },
];

/* ─── PROFIL ──────────────────────────────────────────── */
export const PROFILE = {
  firstName: "Snayeul",
  lastName:  "Tedonzon",
  fullName:  "Snayeul Tedonzon Tchinda",
  role:      "Développeur Full-Stack",
  stack:     "Java · Spring Boot · React · Angular",
  status:    "Disponible en alternance · Dès sept. 2026",
  location:  "Nancy, 54000",
  email:     "snayeult@outlook.fr",
  phone:     "+33 7 53 94 91 57",
  github:    "https://github.com/SnayeulTedy",
  linkedin:  "https://www.linkedin.com/in/snayeul-tedonzon-6a8a2929b",
  whatsapp:  "https://wa.me/33753949157",
  telegram:  "https://t.me/Snayeul",
  cv:        "/CVPro_TEDONZON SNAYEUL.pdf",
  photo:     "/images/dev.jpg",
  bio: [
    "Étudiant ingénieur au <strong>CESI École d'Ingénieurs</strong>. Développeur full-stack avec expérience concrète en production — microservices Java/Spring Boot, React, Angular, PostgreSQL.",
    "3 stages effectués dont un en alternance chez ZubHub (France). Rigoureux, autonome et curieux, je m'adapte rapidement à tout environnement technique.",
    "Recherche une <strong>alternance de 3 ans</strong> dès <strong>septembre 2026</strong>. Mobile sur toute la France · Permis B · Anglais bilingue.",
  ],
  infos: [
    { icon: "🎓", label: "Formation",   value: "Ingénieur CESI" },
    { icon: "📍", label: "Localisation", value: "Nancy, 54000" },
    { icon: "💼", label: "Contrat",      value: "Alternance 3 ans" },
    { icon: "🌍", label: "Mobilité",     value: "Toute la France" },
    { icon: "🗣️", label: "Langues",      value: "FR natif · EN bilingue" },
    { icon: "🚗", label: "Permis",       value: "Permis B" },
  ],
  contacts: [
    { icon: "✉",  label: "Email",    value: "snayeult@outlook.fr",              href: "mailto:snayeult@outlook.fr" },
    { icon: "📞", label: "Téléphone", value: "+33 7 53 94 91 57",               href: "tel:+33753949157" },
    { icon: "⌥",  label: "GitHub",   value: "github.com/SnayeulTedy",           href: "https://github.com/SnayeulTedy" },
    { icon: "in", label: "LinkedIn",  value: "linkedin/snayeultedonzon",         href: "https://www.linkedin.com/in/snayeul-tedonzon-6a8a2929b" },
    { icon: "💬", label: "WhatsApp",  value: "wa.me/33753949157",               href: "https://wa.me/33753949157" },
    { icon: "✈",  label: "Telegram",  value: "t.me/Snayeul",                    href: "https://t.me/Snayeul" },
  ],
};

/* ─── SKILLS ──────────────────────────────────────────── */
export const SKILL_GROUPS = [
  {
    cat: "Backend & Architecture",
    color: "#4D8EFF",
    items: ["Java 21 & 25", "Spring Boot 3 & 4", "Microservices", "Spring Cloud", "C# / ASP.NET", "PHP", "Node.js", "Python"],
  },
  {
    cat: "Frontend & Mobile",
    color: "#7C5CFC",
    items: ["React.js", "Angular", "HTML · CSS · JS", "Flutter / Dart"],
  },
  {
    cat: "Bases de données",
    color: "#06B6D4",
    items: ["PostgreSQL 15/18", "MySQL", "SQL Server", "MongoDB", "Kafka", "Redis"],
  },
  {
    cat: "Langages & Outils",
    color: "#10B981",
    items: ["Git / GitHub", "REST API / SOLID", "Méthode Agile", "Docker (bases)", "UML / Merise", "Figma"],
  },
];

/* ─── PROJECTS ────────────────────────────────────────── */
export const PROJECTS = [
  {
    num:   "01",
    title: "Stageo",
    year:  "2025",
    tags:  ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    desc:  "Plateforme fullstack de gestion d'offres de stage et suivi des candidatures avec pipeline de données et visualisation statistiques.",
    live:  null,
    repo:  "https://github.com/SnayeulTedy",
  },
  {
    num:   "02",
    title: "Game Library",
    year:  "2025",
    tags:  ["Angular", "ASP.NET", "REST API", "JSON"],
    desc:  "Application web CRUD de gestion de jeux vidéo et consoles — interface Angular responsive, API ASP.NET, persistance JSON.",
    live:  null,
    repo:  "https://github.com/SnayeulTedy",
  },
  {
    num:   "03",
    title: "Portfolio",
    year:  "2025",
    tags:  ["React", "Tailwind", "Vite"],
    desc:  "Portfolio personnel full React — design system custom, dark/light mode, déploiement Vercel.",
    live:  "https://snayeultedonzon-website.vercel.app/",
    repo:  "https://github.com/SnayeulTedy/snayeultedonzon-website",
  },
  {
    num:   "04",
    title: "React Countries",
    year:  "2024",
    tags:  ["React", "API REST", "JavaScript"],
    desc:  "Visualisation de tous les pays du monde avec capitales, populations et drapeaux via l'API REST Countries.",
    live:  "https://react-countries-navy.vercel.app/",
    repo:  "https://github.com/SnayeulTedy",
  },
  {
    num:   "05",
    title: "iSaloon",
    year:  "2024",
    tags:  ["C#", "ASP.NET", "SQL Server"],
    desc:  "Application de géolocalisation des salons de coiffure à proximité avec système de réservation intégré.",
    live:  null,
    repo:  "https://github.com/SnayeulTedy/iSaloon",
  },
];

/* ─── EXPERIENCES ─────────────────────────────────────── */
export const EXPERIENCES = [
  {
    period: "Nov. 2025 – Avr. 2026",
    title:  "Stage Alterné — Développeur Full-Stack",
    place:  "ZubHub · France",
    desc:   "Création de microservices et API REST Java/Spring Boot 3&4. Migrations Java 21→25 et Spring Boot 3→4. Développement React et architecture Spring Cloud (gateway, config server, service discovery).",
    stack:  "Java 21/25 · Spring Boot 3/4 · Spring Cloud · Kafka · Redis · PostgreSQL 15/18 · React · Microservices",
  },
  {
    period: "Juin – Août 2025",
    title:  "Stage — Développeur Web",
    place:  "HES Digital Services · Douala, Cameroun",
    desc:   "Développement complet d'une application de gestion avec géolocalisation.",
    stack:  "C# .NET MVC · Entity Framework · REST API · SQL Server",
  },
  {
    period: "Juin – Sept. 2024",
    title:  "Stage — Analyste-Développeur",
    place:  "ETS Le Progrès · Douala, Cameroun",
    desc:   "Conception et développement d'un système de gestion des stocks.",
    stack:  "C# · Architecture multicouche · POO · SQL Server",
  },
];

/* ─── FORMATIONS ──────────────────────────────────────── */
export const FORMATIONS = [
  { period: "2026 – 2029", title: "Cycle Ingénieur Informatique", place: "CESI École d'Ingénieurs" },
  { period: "2025 – 2029", title: "APCI Informatique",            place: "CESI École d'Ingénieurs" },
  { period: "2024 – 2025", title: "DEC Informatique",             place: "CCNB, Canada" },
  { period: "2023 – 2024", title: "Technologie de l'Information", place: "IUC, Douala" },
];

/* ─── STATS ───────────────────────────────────────────── */
export const STATS = [
  { value: "3",   label: "Stages" },
  { value: "5+",  label: "Projets" },
  { value: "10+", label: "Technos" },
];