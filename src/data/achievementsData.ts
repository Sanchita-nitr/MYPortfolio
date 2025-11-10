// src/data/achievementsData.ts
export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  details?: string;
  image?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Runner-Up — Ethos Hackathon",
    issuer: "IIT Guwahati",
    date: "Nov 2025",
    details: "CampusSentinel — predictive campus intelligence & entity-resolution system.",
    image: "/achievements/ethos.png",
  },
  {
    title: "Finalist — Novanmash 2025",
    issuer: "NIT Rourkela",
    date: "2025",
    details: "MediMind — AI healthcare assistant & prescription automation.",
    image: "/achievements/novanmash.png",
  },
  {
    title: "IEEE INDISCON 2025 — Paper Accepted",
    issuer: "IEEE India Council",
    date: "2025",
    details: "'CNN-based HAR enhanced with SE blocks' — accepted to conference proceedings.",
  },
];
