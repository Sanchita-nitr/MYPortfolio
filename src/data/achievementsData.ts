
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
    date: "October 2025",
    details: "CampusSentinel — predictive campus intelligence & entity-resolution system.",
    image: "/achievements/ethos.jpg",
  },
  {
    title: "Finalist — Novanmash 2025",
    issuer: "SSIPMT Raipur",
    date: "November 2025",
    details: "JalTantra — Flood Severity Detection.",
    image: "/achievements/novanmash.jpg",
  },
  {
    title: "IEEE INDISCON 2025 — Paper Accepted",
    issuer: "IEEE India Council",
    date: "2025",
    details: "'CNN-based HAR enhanced with SE blocks' — accepted to conference proceedings.",
    image: "/achievements/ieee.png",
  },
];
