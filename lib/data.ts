export const profile = {
  name: "Mohamed Khalifa Boufares",
  initials: "MKB",
  photo: "/photo.jpg",
  role: "Étudiant en Génie Logiciel & Systèmes d'Information · Full-Stack, Data & IA",
  taglines: [
    "Développeur Full-Stack & IA",
    "Passionné de Data Engineering",
    "Explorateur IoT & Robotique",
  ],
  location: "Sousse, Tunisie",
  availability: "Disponible pour un PFE · Stage de fin d'études",
  email: "khalifaboufares@gmail.com",
  phone: "+216 93 973 109",
  github: "https://github.com/mohamedkhalifaboufares-ui",
  repository: "https://github.com/mohamedkhalifaboufares-ui/portfolio",
  linkedin: "https://www.linkedin.com/in/khalifaboufares/",
  bio: "Étudiant en 3e année de Licence en Génie Logiciel et Systèmes d'Information à GFI University (Sousse), orienté vers le développement Full-Stack, la Data Science, le Data Engineering et l'intelligence artificielle. J'ai passé 8 semaines chez Matrixcel Business à concevoir une plateforme de recommandation intelligente avec Spring Boot, React, Machine Learning, Docker et CI/CD.",
  bioSuite:
    "Je recherche un stage de fin d'études (PFE) pour mettre mes compétences en pratique et contribuer à des projets logiciels innovants. J'aime construire des systèmes complets, de l'API sécurisée au tableau de bord analytique, en passant par le modèle de Machine Learning.",
  languages: [
    { name: "Arabe", level: "Maternel" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" },
  ],
  stats: [
    { value: "8", label: "Semaines en entreprise" },
    { value: "6", label: "Badges 365 Data Science" },
    { value: "13,5", label: "Crédits CPE" },
    { value: "9", label: "Langues d'interface" },
  ],
};

export type ProjectCategory =
  | "Data & IA"
  | "Bases de données"
  | "Génie logiciel"
  | "Web & UI/UX"
  | "Qualité";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  highlights: string[];
  accent: "cyan" | "violet" | "pink" | "orange" | "lime";
  icon: "sparkles" | "database" | "server" | "diagram" | "code" | "test";
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Recommendation AI",
    category: "Data & IA",
    description:
      "Plateforme de recommandations personnalisées basée sur l'analyse du comportement de navigation, développée chez Matrixcel Business.",
    tags: ["Spring Boot", "React", "Python", "Flask", "scikit-learn", "Docker", "GitLab CI/CD"],
    highlights: [
      "Backend REST sécurisé (Spring Security, JWT, BCrypt, Twilio Verify)",
      "Service ML indépendant : scores de pertinence et réentraînement",
      "Frontend React multilingue (9 langues, RTL) et extension Chrome",
    ],
    accent: "violet",
    icon: "sparkles",
  },
  {
    title: "Projet BI — Entrepôt de Données",
    category: "Data & IA",
    description:
      "Un pipeline ETL complet qui transforme des données brutes en indicateurs exploitables, de Python à un tableau de bord Power BI.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL", "ETL", "Power BI"],
    highlights: [
      "Pipeline ETL complet (Pandas, Matplotlib, Seaborn)",
      "Schéma en étoile : table de faits + 3 dimensions",
      "Requêtes SQL et tableau de bord Power BI",
    ],
    accent: "cyan",
    icon: "database",
  },
  {
    title: "Administration BDD Oracle — E-commerce",
    category: "Bases de données",
    description:
      "Modélisation et administration d'une base de données e-commerce sécurisée, performante et facilement maintenable.",
    tags: ["Oracle", "SQL", "DBA", "PK/FK/CHECK"],
    highlights: [
      "12 entités avec contraintes PK / FK / CHECK",
      "6 rôles utilisateurs aux privilèges distincts",
      "Index, transactions, sauvegarde & recovery",
    ],
    accent: "orange",
    icon: "server",
  },
  {
    title: "Projet Fédéré — Modélisation UML",
    category: "Génie logiciel",
    description:
      "Du cahier des charges au prototype : une démarche complète de génie logiciel avec modélisation et planification.",
    tags: ["UML", "PowerAMC", "SQL", "Gantt"],
    highlights: [
      "Cahier des charges + diagrammes UML complets",
      "Script SQL généré depuis PowerAMC et planning Gantt",
      "Prototype d'interface web et présentation",
    ],
    accent: "violet",
    icon: "diagram",
  },
  {
    title: "Sites Web Full-Stack & UI/UX",
    category: "Web & UI/UX",
    description:
      "Sites dynamiques et responsives avec CRUD et authentification, accompagnés d'une expérience utilisateur soignée.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Figma"],
    highlights: [
      "Sites responsives avec CRUD et authentification",
      "Wireframes et maquettes Figma (design UX)",
      "Projets publiés sur GitHub",
    ],
    accent: "pink",
    icon: "code",
  },
  {
    title: "Test Logiciel ISTQB — Katalon Studio",
    category: "Qualité",
    description:
      "Une campagne de tests structurée pour garantir la fiabilité des applications, de la conception des cas au suivi des bugs.",
    tags: ["ISTQB", "Katalon Studio", "BugZilla", "Performance"],
    highlights: [
      "20+ cas de test automatisés avec Katalon",
      "Suites de tests de performance",
      "Suivi des anomalies dans BugZilla",
    ],
    accent: "lime",
    icon: "test",
  },
];

export const skillGroups = [
  {
    title: "Web & Backend",
    icon: "code" as const,
    color: "cyan" as const,
    skills: [
      "React",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "API REST",
      "Flask",
      "HTML5 / CSS3",
      "JavaScript",
      "PHP",
      "Git & GitHub",
    ],
  },
  {
    title: "IA & Data Science",
    icon: "brain" as const,
    color: "violet" as const,
    skills: [
      "Python",
      "scikit-learn",
      "Gradient Boosting",
      "Machine Learning",
      "LLM & IA générative",
      "Pandas",
      "Jupyter",
      "Power BI",
      "Visualisation",
    ],
  },
  {
    title: "Data Engineering & DevOps",
    icon: "database" as const,
    color: "orange" as const,
    skills: [
      "ETL",
      "Data Warehouse",
      "SQL Server",
      "Oracle",
      "MySQL",
      "Docker",
      "Docker Compose",
      "GitLab CI/CD",
      "Maven",
      "Agile / Scrum",
    ],
  },
  {
    title: "Qualité & Systèmes embarqués",
    icon: "cpu" as const,
    color: "pink" as const,
    skills: [
      "UML",
      "PowerAMC",
      "ISTQB",
      "Katalon Studio",
      "Bugzilla",
      "Raspberry Pi",
      "TIA Portal (PLC)",
      "Conception PCB",
      "Figma",
    ],
  },
];

export const education = [
  {
    title: "Licence en Génie Logiciel et Systèmes d'Information",
    place: "GFI University · École Polytechnique de Sousse",
    period: "3e année · 2024 – 2027 (en cours)",
    description:
      "Développement web et backend, IA, ETL, entrepôt de données, administration Oracle, tests ISTQB, Agile/Scrum et UML.",
  },
  {
    title: "Baccalauréat Technique",
    place: "Sousse, Tunisie",
    period: "2023 – 2024",
    description: "Base technique en informatique et systèmes.",
  },
];

export const experience = [
  {
    role: "Stagiaire Développeur Full-Stack & IA",
    company: "Matrixcel Business",
    period: "Juin – Juil. 2026 · 8 semaines",
    location: "Sousse, Tunisie",
    project: "Smart Recommendation AI",
    description:
      "Participation à la conception et au développement d'une plateforme de recommandations personnalisées basée sur le comportement de navigation.",
    achievements: [
      "Backend REST multicouche : Spring Boot, Spring Security, JWT, JPA/Hibernate et SQL Server",
      "Sécurité des comptes : hachage BCrypt et vérification téléphonique Twilio Verify",
      "Service ML Python/Flask (scikit-learn, Gradient Boosting) avec réentraînement et repli heuristique",
      "Frontend React multilingue (9 langues, RTL), tableau de bord et notifications push Firebase",
      "Extension Chrome Manifest V3, assistant LLM (API Groq) et automatisation GitLab CI/CD",
    ],
  },
];

export type Certification = {
  title: string;
  place: string;
  period: string;
  image?: string;
  credits?: string;
};

export const certificationNote =
  "10 certificats en images · 6 badges 365 Data Science · 13,5 crédits CPE au total";

export const certifications: Certification[] = [
  {
    title: "Introduction to Data and Data Science",
    place: "365 Data Science",
    period: "Nov. 2026",
    image: "/certifications/introduction-data-science.jpg",
    credits: "6 CPE",
  },
  {
    title: "Intro to Data Engineering",
    place: "365 Data Science",
    period: "Nov. 2026",
    image: "/certifications/intro-data-engineering.jpg",
    credits: "4,5 CPE",
  },
  {
    title: "Intro to ChatGPT and Generative AI",
    place: "365 Data Science",
    period: "Nov. 2026",
    image: "/certifications/intro-chatgpt-generative-ia.jpg",
    credits: "3 CPE",
  },
  {
    title: "Introduction to Artificial Intelligence",
    place: "365 Data Science",
    period: "2026",
    image: "/certifications/intro-ia.jpg",
  },
  {
    title: "Introduction to Jupyter",
    place: "365 Data Science",
    period: "2026",
    image: "/certifications/introduction-jupyter.jpg",
  },
  {
    title: "Machine Learning with Python",
    place: "365 Data Science",
    period: "2026",
    image: "/certifications/machine-learning-python.jpg",
  },
  {
    title: "Introduction à l'Intelligence Artificielle",
    place: "Udacity · Al Ghurair TechUp Explorer",
    period: "Mars 2026",
    image: "/certifications/udacity-intro-ia.jpg",
  },
  {
    title: "TIA Portal (Siemens) — Automatisme",
    place: "Club POLY ROBOTS · École Polytechnique de Sousse",
    period: "2025 – 2026",
    image: "/certifications/tia-portal-siemens.jpg",
  },
  {
    title: "Robotique avec Raspberry Pi",
    place: "Club POLY ROBOTS · École Polytechnique de Sousse",
    period: "2025 – 2026",
    image: "/certifications/raspberry-pi.jpg",
  },
  {
    title: "PCB Design Training",
    place: "École Polytechnique de Sousse",
    period: "2025 – 2026",
  },
  {
    title: "Formation Français",
    place: "ELIT · École des Langues et d'Informatique",
    period: "Août 2018",
    image: "/certifications/formation-francais.jpg",
  },
];

export type VideoChapter = {
  time: string;
  label: string;
  title: string;
  description: string;
  accent: "cyan" | "violet" | "pink" | "amber" | "lime";
};

export const videoCv = {
  title: "CV interactif",
  src: "",
  duration: "00:45",
  chapters: [
    {
      time: "00:00",
      label: "Introduction",
      title: "Mohamed Khalifa Boufares",
      description: "Full-Stack, Data & IA · Sousse, Tunisie",
      accent: "cyan",
    },
    {
      time: "00:09",
      label: "Parcours",
      title: "Génie Logiciel & SI",
      description: "3e année à GFI University · École Polytechnique de Sousse",
      accent: "violet",
    },
    {
      time: "00:18",
      label: "Expérience",
      title: "8 semaines chez Matrixcel Business",
      description: "Smart Recommendation AI : Spring Boot, React, ML, Docker",
      accent: "pink",
    },
    {
      time: "00:27",
      label: "Projets",
      title: "Du data au produit",
      description: "BI, Oracle, UML, tests ISTQB, sites web et recommandation IA",
      accent: "amber",
    },
    {
      time: "00:36",
      label: "Objectif",
      title: "À la recherche d'un PFE",
      description: "khalifaboufares@gmail.com · +216 93 973 109",
      accent: "lime",
    },
  ] satisfies VideoChapter[],
};

export const distinction = {
  title: "Organisateur & Participant — Compétition Nationale PolyRobots",
  place: "École Polytechnique de Sousse",
  period: "2025 – 2026",
  description:
    "Coordination d'un événement national dédié à la robotique et à l'IoT.",
};

export const interests = [
  "Veille IA & Web",
  "Hackathons",
  "Projets GitHub",
  "Apprentissage continu",
  "Football",
  "Tennis",
  "Cyclisme",
];
