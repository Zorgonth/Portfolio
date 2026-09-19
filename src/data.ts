export const profile = {
  name: "Saadoun Al-Zubaidi",
  firstName: "Saadoun",
  lastName: "Al-Zubaidi",
  title: "Full-Stack Software Engineer",
  location: "Heilbronn, Germany",
  email: "alzubaidisadooon@gmail.com",
  phone: "+49 176 85255066",
  github: "https://github.com/zorgonth",
  linkedin: "https://linkedin.com/in/saadoun-al-zubaidi-04543631b",
  availability: "Open to full-time · building on the side",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const ticker = [
  "Python",
  "Go",
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Bootstrap",
  "MUI",
  "Node.js",
  "Django",
  "Flask",
  "FastAPI",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Azure",
  "AWS",
  "Docker",
  "Vite",
];

type FeaturedProject = {
  id: string;
  index: string;
  year: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  visual: string;
  live?: string;
  repo?: string;
};

export const featuredWork: FeaturedProject[] = [
  {
    id: "dma",
    index: "01",
    year: "2025 — 2026",
    title: "Digital Medical Academy",
    role: "Production full-stack",
    summary:
      "A year on DMA’s admin tools for medical training. Certificates, attendance, login, Stripe — the unglamorous parts that still have to work on Monday.",
    highlights: [
      "Pulled certificates out of TalentLMS into Azure Blob and Postgres, with pagination and bulk downloads",
      "Reminders via Postmark, QR attendance, PDF snapshots, and a webhook that takes exam grades",
      "Rewrote the auth portal in React/Express so people could log in across apps, then wired Stripe billing",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "MUI",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Azure",
      "Stripe",
    ],
    visual: "dma",
  },
  {
    id: "swiftsky",
    index: "02",
    year: "2024 — 2025",
    title: "SwiftSky LLC",
    role: "Website + DevOps",
    summary:
      "Freelance: I designed and shipped their company site on AWS, then built a mailing setup so the team wasn’t juggling everything by hand.",
    highlights: [
      "Responsive site on EC2, S3 and IAM",
      "Mailing flow for internal and external mail",
      "Solo from mockup to deploy",
    ],
    stack: ["JavaScript", "Bootstrap", "AWS EC2", "S3", "IAM"],
    visual: "sky",
  },
  {
    id: "transcendence",
    index: "03",
    year: "2024",
    title: "ft_transcendence",
    role: "Realtime web platform",
    summary:
      "42’s last project: multiplayer Pong with chat, matchmaking and tournaments. Django, Postgres, Redis, the whole thing in Docker.",
    highlights: [
      "Realtime play and chat over WebSockets",
      "Matchmaking and tournament brackets on Postgres",
      "Nginx, Redis and Compose so we could actually run it",
    ],
    stack: ["Django", "Bootstrap", "PostgreSQL", "Redis", "Docker", "Nginx"],
    repo: "https://github.com/Melsso/Transcendence",
    visual: "pong",
  },
  {
    id: "certs",
    index: "04",
    year: "2025",
    title: "Certificate Manager",
    role: "Side project",
    summary:
      "A small full-stack app I built to get faster at the boring-important bits: Prisma, a React UI, Jest on the API, Cypress on the frontend.",
    highlights: [
      "Create, check, fetch and delete certificates through a typed API",
      "Separate mock database so tests don’t trash local data",
      "Cypress runs through the forms and uploads",
    ],
    stack: ["TypeScript", "React", "Node.js", "Prisma", "Jest", "Cypress"],
    repo: "https://github.com/Zorgonth/Certificate-Manager",
    visual: "certs",
  },
];

export const moreWork = [
  {
    title: "Inception",
    blurb: "Nginx, WordPress and MariaDB from scratch in Docker, with TLS.",
    stack: ["Docker", "Nginx", "MariaDB"],
    href: "https://github.com/Zorgonth/Inception",
  },
  {
    title: "MiniShell",
    blurb: "A tiny UNIX shell in C. Pipes, redirects, and a lot of segfaults.",
    stack: ["C", "UNIX"],
    href: "https://github.com/Zorgonth/MiniShell",
  },
  {
    title: "IRC Server",
    blurb: "Chat server in C++. Channels, sockets, the RFC-ish bits.",
    stack: ["C++", "Sockets"],
    href: "https://github.com/Zorgonth/IRC",
  },
  {
    title: "Push Swap",
    blurb: "Sort numbers with two stacks and as few moves as possible.",
    stack: ["C", "Algorithms"],
    href: "https://github.com/Zorgonth/Push_Swap",
  },
  {
    title: "Philosophers",
    blurb: "Dining philosophers. Threads, mutexes, try not to deadlock.",
    stack: ["C", "Concurrency"],
    href: "https://github.com/Zorgonth/Philosophers",
  },
  {
    title: "CUDA",
    blurb: "NVIDIA’s intro course on GPU programming. Still a bit of a playground.",
    stack: ["CUDA", "C/C++"],
  },
];

export const experience = [
  {
    company: "DMA · Digital Medical Academy",
    role: "Full-Stack Developer",
    type: "Internship",
    dates: "May 2025 — Aug 2026",
    place: "Stuttgart, Germany",
    points: [
      "Worked on the live TypeScript apps — React, Next, Node, Prisma, Postgres. Wrote the code, the tests, sat in review, shipped to Azure.",
      "Built a certificate archive that syncs TalentLMS into Azure Blob and Postgres, with pagination and secure bulk downloads.",
      "Automated the annoying course ops: reminder emails, QR attendance, certificate PDFs, and a webhook for exam grades.",
      "Rewrote the login portal so users could jump between apps, plugged in Stripe billing, and locked down the usual redirect mistakes.",
      "Jest, Cypress, Playwright, GitHub Actions, Docker, Datadog, Terraform, Retool — whatever the team needed to keep moving.",
    ],
  },
  {
    company: "SwiftSky LLC",
    role: "Software Developer & DevOps Engineer",
    type: "Freelance · Remote",
    dates: "Dec 2024 — Apr 2025",
    place: "Remote",
    points: [
      "Built and deployed the company website on AWS (EC2, S3, IAM).",
      "Put a mailing system in place so internal and external mail wasn’t a mess of inboxes.",
    ],
  },
  {
    company: "Heilbronn Theater",
    role: "Augmented Reality Guide",
    type: "On-site",
    dates: "Nov 2023",
    place: "Heilbronn, Germany",
    points: [
      "Helped visitors through the AR installations and worked with the organizers to get AR into the live shows.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "Bootstrap", "MUI", "Vite"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Prisma", "Django", "Flask", "FastAPI", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "Azure",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "Datadog",
      "Render",
    ],
  },
  {
    label: "Data & Auth",
    items: ["PostgreSQL", "MariaDB", "MySQL", "JWT", "HMAC", "Azure SAS", "Stripe"],
  },
  {
    label: "Quality",
    items: ["Jest", "Playwright", "Cypress", "Supertest", "Git", "Retool"],
  },
];

export const education = [
  {
    school: "42 Heilbronn",
    detail: "Software Engineering · core curriculum",
    dates: "Mar 2023 — Dec 2024",
    note: "No classes. You pick a project, get stuck, figure it out.",
  },
  {
    school: "USTHB · Houari Boumediene",
    detail: "Process Engineering",
    dates: "2018 — 2022",
    note: "Algiers, Algeria",
  },
];

export const languages = ["English", "Arabic", "French"];
