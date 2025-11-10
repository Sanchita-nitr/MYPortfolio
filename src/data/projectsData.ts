// src/data/projectsData.ts
export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image?: string;
  achievement?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "MediMind",
    subtitle: "AI-powered Medical Prescription Management System",
    description:
      "AI prescription generation, patient management, JWT auth, conversational assistant using LangChain. Modular microservice architecture.",
    tech: ["Next.js", "Django REST", "FastAPI", "LangChain", "Postgres"],
    demo: "https://medimind-demo.example.com",
    github: "https://github.com/your-username/medimind",
    image: "/projects/medimind.png",
    achievement: "Finalist - Novanmash 2025",
  },
  {
    title: "CampusSentinel",
    subtitle: "Campus security intelligence & forecasting",
    description:
      "End-to-end entity-resolution and spatial forecasting with synthetic-data pipeline and explainable AI features.",
    tech: ["Next.js", "FastAPI", "scikit-learn", "pgvector"],
    demo: "https://campussentinel-demo.example.com",
    github: "https://github.com/your-username/campussentinel",
    image: "/projects/campussentinel.png",
    achievement: "1st Runner-Up - Ethos IIT Guwahati 2025",
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Imbalanced-data classification pipeline",
    description:
      "Data preprocessing, undersampling strategy, logistic regression baseline and Streamlit deployment with ~93.9% test accuracy.",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit"],
    demo: "https://fraud-demo.example.com",
    github: "https://github.com/your-username/fraud-detection",
    image: "/projects/fraud.png",
  },
  {
    title: "HAR with SE Blocks",
    subtitle: "Human Activity Recognition (Research)",
    description:
      "CNN + Squeeze-and-Excitation blocks achieving 99.61% accuracy on the WISDM dataset. Paper accepted at IEEE INDISCON 2025.",
    tech: ["TensorFlow", "CNN", "Attention"],
    github: "https://github.com/your-username/har-se",
    image: "/projects/har.png",
  },
  {
    title: "JalTantra — Flood Severity Detection",
    subtitle: "MobileNetV2 based flood severity classification",
    description:
      "Edge-optimized MobileNetV2 model with transfer learning for multi-class flood severity detection and lightweight deployment.",
    tech: ["PyTorch", "MobileNetV2", "FastAPI"],
    github: "https://github.com/your-username/jaltantra",
    image: "/projects/jaltantra.png",
  },
];
