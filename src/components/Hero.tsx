"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code2, Rocket } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const words = ["AI/ML Engineer", "Full-Stack Developer", "Problem Solver", "Innovation Enthusiast"];
  
  useEffect(() => {
    setIsVisible(true);

    // Typing animation for rotating words
    let charIndex = 0;
    let isDeleting = false;
    
    const typeInterval = setInterval(() => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, charIndex));
        charIndex++;
        
        if (charIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(() => {}, 2000); // Pause before deleting
        }
      } else {
        setTypedText(currentWord.slice(0, charIndex));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const topSkills = ["Python", "Machine Learning", "Next.js", "FastAPI", "Postgres", "React"];
  const highlights = [
    "1st Runner-Up — Ethos Hackathon (IIT Guwahati, 2025)",
    "Finalist — Novanmash 2025",
    "IEEE INDISCON 2025 — HAR research paper"
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }

        .shimmer-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .shimmer-btn:hover::before {
          left: 100%;
        }

        .profile-glow {
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.4),
                      0 0 80px rgba(236, 72, 153, 0.2);
        }
      `}</style>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Content - Left Side */}
        <div className={`lg:col-span-2 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          {/* Hero Title with Typing Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-800">
              Hi, I'm <span className="gradient-text">Sanchita</span>
            </h1>
            <div className="mt-3 text-2xl md:text-3xl font-bold text-slate-700">
              <span className="gradient-text">{typedText}</span>
              <span className="animate-blink gradient-text">|</span>
            </div>
            <div className="mt-4 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full" style={{ width: "180px" }}></div>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Building production-grade AI & data systems. I design scalable architectures that take models from research 
            to real-world production — from <span className="font-semibold text-purple-600">MediMind</span> (AI prescription assistant) 
            to <span className="font-semibold text-pink-600">CampusSentinel</span> (campus intelligence).
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group shimmer-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-200 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <span>View Projects</span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-purple-300 text-slate-700 font-bold transition-all duration-300 hover:border-purple-500 hover:bg-purple-50 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Skills and Highlights Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Skills Card */}
            <div 
              className="group p-6 bg-white rounded-2xl shadow-lg border-2 border-slate-200 transition-all duration-500 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-1 animate-scaleIn"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Top Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill, index) => (
                  <span
                    key={skill}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className="text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Card */}
            <div 
              className="group p-6 bg-white rounded-2xl shadow-lg border-2 border-slate-200 transition-all duration-500 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-1 animate-scaleIn"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Recent Achievements</h4>
              </div>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-700 group/item"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-pink-600 to-orange-600 group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover/item:text-pink-700 transition-colors duration-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Card - Right Side */}
        <aside className={`lg:col-span-1 transform transition-all duration-700 delay-200 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}>
          <div className="sticky top-8 p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col items-center">
              {/* Profile Image with Glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 animate-pulse-ring"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 animate-pulse-ring" style={{ animationDelay: "1s" }}></div>
                <img 
                  src="/profile.jpg" 
                  alt="Sanchita" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl profile-glow animate-float"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-4 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>

              {/* Name and Title */}
              <h4 className="text-2xl font-bold text-slate-800 text-center mb-2">
                Sanchita Priyadarshinee
              </h4>
              <p className="text-sm text-purple-600 font-semibold mb-1">
                AI/ML Engineer • Full-Stack Developer
              </p>
              <p className="text-xs text-slate-500 mb-6">
                NIT Rourkela (ECE'27)
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-6"></div>

              {/* Contact Info */}
              <div className="w-full space-y-4">
                <a 
                  href="mailto:sanchitapriyadarshinee@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-medium">Email</div>
                    <div className="text-xs text-slate-700 font-semibold truncate">sanchitapriyadarshinee@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-200">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-medium">Phone</div>
                    <div className="text-xs text-slate-700 font-semibold">+91 94371 60801</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 w-full flex gap-3">
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 shimmer-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 shimmer-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>

              {/* Status Badge */}
              <div className="mt-6 w-full p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-center animate-glow">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-green-700">Available for Work</span>
                </div>
                <p className="text-xs text-slate-600">Open to exciting opportunities</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}