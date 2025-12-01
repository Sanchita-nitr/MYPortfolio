
export type Skill = {
  name: string;
  image?: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: [
      {name: "CPP", image: "/skills/CPP.png" },
      { name: "Python", image: "/skills/python.png" },
      { name: "JavaScript", image: "/skills/JS.png" },
      { name: "TypeScript", image: "/skills/TS.png" },

    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", image: "/skills/next.webp" },
      { name: "React.js", image: "/skills/react.jpg" },
      { name: "Tailwind CSS", image: "/skills/tail.jpg" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", image: "/skills/fast.png" },
      { name: "Django REST", image: "/skills/dj.png" },
      { name: "LangChain", image: "/skills/langchain-dark.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL & PostgreSQL", image: "/skills/sql.webp" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "GitHub", image: "/skills/github.jpeg" },
      { name: "Vercel", image: "/skills/logo-vercel.png" },
      { name: "Streamlit", image: "/skills/streamlit.webp" },
      { name: "Docker", image: "/skills/docker.webp" },

    ],
  },
];

// Backwards-compatible flat list (optional)
export const SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => s.name));
