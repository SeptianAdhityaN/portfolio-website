/**
 * ===========================================
 * PORTFOLIO DATA CONFIGURATION
 * ===========================================
 * Updated based on CV: Septian Adhitya Nugroho
 * Focus: Fullstack (React/Node), Game Dev (Roblox), Security Awareness
 */

// ============================================
// TYPES
// ============================================

export type ProjectCategory = "Web" | "Game";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  image?: string;
  link?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  description?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  summary: string;
  shortSummary: string;
  role: string;
  location: string;
  cvLink: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  email: string;
  whatsapp: string;
}

// ============================================
// PROFILE DATA
// ============================================

export const profile: Profile = {
  name: "Septian Adhitya Nugroho",
  tagline: "Secure Code. Immersive Experiences.",
  summary: `High-achieving Informatics student (GPA 3.86/4.00) at UNESA with a unique blend of skills in Fullstack Web Development, Game Scripting, and System Administration. I bridge the gap between creative interactive worlds (Roblox/Lua) and secure, scalable web architectures (React/Node.js). Recently completed an intensive AI-integrated backend cohort at Dicoding Indonesia.`,
  shortSummary:
    "Fullstack Developer & Roblox Game Scripter. Blending the logic of Software Engineering with immersive digital worlds.",
  role: "Fullstack Developer & Roblox Game Scripter",
  location: "Nganjuk, Jawa Timur",
  cvLink: "/resume.pdf",
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socials: Socials = {
  github: "https://github.com/SeptianAdhityaN",
  linkedin: "https://www.linkedin.com/in/septianadhty",
  email: "septiannugroho73@gmail.com",
  whatsapp: "+6289506423297",
};

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    id: "pm-copilot",
    title: "PM-Copilot: Predictive Maintenance AI",
    description:
      "Capstone Project. Dashboard pemantauan mesin industri berbasis AI yang mendeteksi anomali sensor secara real-time. Dilengkapi fitur Chatbot teknis cerdas menggunakan Generative AI.",
    techStack: [
      "React",
      "Express.js",
      "TensorFlow/AI",
      "TailwindCSS",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "Gemini AI",
    ],
    category: "Web",
    featured: true,
    link: "https://pm-copilot.vercel.app/",
  },
  {
    id: "unesa-roblox-map",
    title: "UNESA Virtual Campus 3D",
    description:
      "Peta interaktif 3D kampus UNESA yang imersif di Roblox. Menampilkan detail Gedung Rektorat dengan nuansa sunset dan ambience lokal ('Cidro/Koplo').",
    techStack: ["Roblox Studio", "Lua", "3D Modeling"],
    category: "Game",
    featured: true,
    link: "https://www.roblox.com/games/122845820786405/UNESA-VOICE-Universitas-Negeri-Surabaya",
  },
  {
    id: "plastiquest-roblox",
    title: "PlastiQuest: Eco-Education Game",
    description:
      "Professional Client Project. Game edukasi interaktif di Roblox yang mengajarkan pengelolaan sampah plastik (sorting & processing) melalui gameplay petualangan. Dipesan khusus untuk tujuan edukasi lingkungan.",
    techStack: ["Roblox Studio", "Lua Scripting", "Gamification"],
    category: "Game",
    featured: true,
    link: "https://www.roblox.com/games/88894620090811/PlastiQuest",
  },
  {
    id: "hungry-numbers",
    title: "Hungry Numbers: Interactive Math App",
    description:
      "Web aplikasi interaktif berbasis React untuk melatih logika matematika. Mengimplementasikan complex state management, manipulasi DOM, dan local storage tanpa database. Studi kasus gamifikasi pada platform web.",
    techStack: ["React", "Vite", "Tailwind CSS", "Algorithm"],
    category: "Web",
    featured: true,
    link: "https://hungry-numbers.vercel.app/",
  },
  {
    id: "math-quiz-survival",
    title: "Math Quiz Survival",
    description:
      "Game multiplayer edukasi dimana pemain harus berdiri di atas jawaban matematika yang benar pada grid lantai sebelum waktu habis. Validasi server-side kompleks.",
    techStack: ["Roblox Studio", "Algorithm", "Game Logic", "Lua"],
    category: "Game",
    featured: true,
    link: "#",
  },
];

// ============================================
// CERTIFICATES DATA
// ============================================

export const certificates: Certificate[] = [
  {
    id: "dicoding-sib",
    title: "Cohort React and Backend with AI",
    issuer: "Dicoding Indonesia",
    date: "2026",
    description:
      "900+ hours intensive cohort. Capstone: PM-Copilot (AI Dashboard).",
    credentialLink: "#",
  },
  {
    id: "dicoding-react-fund",
    title: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description:
      "Mendalami React Hooks, State Management kompleks, dan konsumsi API secara efisien.",
    credentialLink:
      "https://drive.google.com/file/d/1jB1_jm4qWrC_EcfZ3bnK_ONtO92krATp/view?usp=drive_link",
  },
  {
    id: "dicoding-backend-fund",
    title: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description:
      "Membangun RESTful API standar industri menggunakan Hapi.js, Database Design, dan deployment server.",
    credentialLink:
      "https://drive.google.com/file/d/18fpkzZQiWdWpiIfB2W53-3g6YQK_Vgpq/view?usp=drive_link",
  },
  {
    id: "talenthub-cyber",
    title: "Network Security Fundamentals",
    issuer: "TalentHub Indonesia (Kemnaker RI)",
    date: "2024",
    description:
      "Mempelajari strategi pertahanan siber, Endpoint Security, Incident Response, serta Risk Management untuk lingkungan Enterprise.",
    credentialLink:
      "https://drive.google.com/file/d/1guuJw0pZf-YToGEmbOPvhXYZ6YiEnaCc/view?usp=drive_link",
  },
  {
    id: "talenthub-game-best",
    title: "Best Participant - Game Development Essentials",
    issuer: "TalentHub Indonesia (Kemnaker RI)",
    date: "2024",
    description:
      "Penghargaan Peserta Terbaik (Batch 16). Menguasai logika pemrograman Python, Pygame, dan Object-Oriented Programming untuk pengembangan game 2D.",
    credentialLink:
      "https://drive.google.com/file/d/1KfyVD_He5Z_Bebxxv_S-ZIXWJt3_ymuK/view?usp=drive_link",
  },
  {
    id: "talenthub-fullstack",
    title: "Fullstack Web Development",
    issuer: "TalentHub Indonesia (Kemnaker RI)",
    date: "2024",
    description:
      "Pengembangan aplikasi web end-to-end menggunakan Node.js, Express.js, dan Vanilla JS. Fokus pada integrasi database dan deployment server.",
    credentialLink:
      "https://drive.google.com/file/d/1lzwjNigtvVTc6fpOD84JlOYvX47Fmbir/view?usp=drive_link",
  },
  {
    id: "network-fund-aguna",
    title: "Network Fundamentals",
    issuer: "Aguna Course",
    date: "2025",
    description: "TCP/IP, Subnetting, and OSI Model fundamentals.",
    credentialLink:
      "https://drive.google.com/file/d/1ZXzEq8AMYNhyCGSNlOBWunDff-pDU0IR/view?usp=drive_link",
  },
];

// ============================================
// TECH STACK DATA
// ============================================

export const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.simpleicons.org/prisma/white",
  },
  {
    name: "Lua",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Linux/Network",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

// ============================================
// CODE SNIPPETS FOR TYPEWRITER EFFECT
// ============================================

export const codeSnippets = [
  "const profile: Dev = { stack: ['React', 'Lua'], secure: true };",
  'local Remote = ReplicatedStorage:WaitForChild("RemoteEvent")',
  "await bcrypt.compare(password, storedHash);",
  "git commit -m 'feat: implement rate limiting'",
];

// ============================================
// SKILLS & MILESTONES (CRITICAL FOR ABOUT SECTION)
// ============================================

export const skills = [
  {
    label: "Fullstack Development",
    iconName: "Code2" as const,
    color: "text-primary",
  },
  {
    label: "Roblox Game Scripting",
    iconName: "Gamepad2" as const,
    color: "text-secondary",
  },
  {
    label: "Network & Security",
    iconName: "Shield" as const,
    color: "text-yellow-500",
  },
];

export const coreStrengths = [
  "Fast Learner (IPK 3.86/4.00)",
  "Leadership (SLP Core Team)",
  "Security-First Mindset",
  "Adaptable & Disciplined",
];

export const milestones = [
  {
    year: "2026",
    title: "Asah led by Dicoding",
    description:
      "Completed 'React & Backend with AI' cohort. Built PM-Copilot as Capstone Project Manager.",
  },
  {
    year: "2025",
    title: "Freelance Roblox Developer",
    description:
      "Specializing in Level Design & Lua Scripting exclusively for the Roblox platform ecosystem.",
  },
  {
    year: "2024",
    title: "SLP Community Core Team",
    description:
      "Led the Web Development division, creating curriculum for 70+ members.",
  },
  {
    year: "2024",
    title: "Best Participant - Game Development Essentials",
    description:
      "Penghargaan Peserta Terbaik (Batch 16). Menguasai logika pemrograman Python, Pygame, dan Object-Oriented Programming untuk pengembangan game 2D.",
  },
];
