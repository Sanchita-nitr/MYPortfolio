"use client";
import { useState, useEffect } from "react";
import { Code2, Database, Sparkles, Rocket, Zap, Award } from "lucide-react";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "Hi, I'm Sanchita!";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building responsive web applications with Next.js, React, and Tailwind CSS. I focus on creating seamless user experiences with clean, maintainable code.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      textColor: "text-purple-600"
    },
    {
      icon: Database,
      title: "AI & Machine Learning",
      description: "Developing ML models with PyTorch, TensorFlow, and Scikit-learn. From data preprocessing to model deployment, I enjoy the entire ML pipeline.",
      tags: ["Python", "PyTorch", "Pandas"],
      gradient: "from-pink-500 to-orange-500",
      bgGradient: "from-pink-50 to-orange-50",
      textColor: "text-pink-600"
    },
    {
      icon: Rocket,
      title: "API & Backend Systems",
      description: "Creating robust RESTful APIs with FastAPI and Node.js. I design scalable backend architectures that power modern applications.",
      tags: ["FastAPI", "PostgreSQL", "Docker"],
      gradient: "from-orange-500 to-purple-500",
      bgGradient: "from-orange-50 to-purple-50",
      textColor: "text-orange-600"
    }
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>

      <section id="about" className="mt-12">
        {/* Hero Introduction */}
        <div className={`relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-purple-200 overflow-hidden transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          {/* Animated background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-400 to-pink-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

          <div className="relative z-10 flex items-start gap-6">
            {/* Icon with pulse rings */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 animate-pulse-ring"></div>
              <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 animate-pulse-ring" style={{ animationDelay: "1s" }}></div>
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-300 animate-float">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-1">
              {/* Typing animation title */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>

              {/* Gradient underline */}
              <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full mb-6 animate-expandWidth" style={{ maxWidth: "200px" }}></div>

              {/* Description with highlighted text */}
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-4">
                I'm a passionate <span className="font-bold gradient-text">AI/ML enthusiast</span> and{" "}
                <span className="font-bold gradient-text">full-stack developer</span> currently pursuing my degree in{" "}
                Electronics and Communications. I love building intelligent systems that solve real-world problems—from{" "}
                training machine learning models to deploying full-stack applications that users love.
              </p>

              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Whether it's experimenting with the latest AI frameworks, crafting clean APIs, or designing intuitive{" "}
                user interfaces, I'm always eager to learn and create something impactful.
              </p>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-200 shadow-lg shimmer-effect">
                  <Zap className="w-6 h-6 text-purple-600 animate-float" />
                  <div>
                    <div className="text-2xl font-bold gradient-text">3+</div>
                    <div className="text-xs text-slate-600 font-medium">Years Coding</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg shimmer-effect" style={{ animationDelay: "0.5s" }}>
                  <Award className="w-6 h-6 text-pink-600 animate-float" style={{ animationDelay: "0.5s" }} />
                  <div>
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-xs text-slate-600 font-medium">Projects Built</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`group relative bg-white rounded-2xl shadow-lg border-2 p-6 transition-all duration-500 cursor-pointer animate-scaleIn overflow-hidden ${
                  hoveredCard === index
                    ? "border-purple-400 shadow-2xl shadow-purple-200 scale-105 -translate-y-2"
                    : "border-slate-200 hover:border-purple-300"
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 transition-opacity duration-500 ${
                  hoveredCard === index ? "opacity-100" : ""
                }`}></div>

                {/* Decorative corner */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full transition-transform duration-500 ${
                  hoveredCard === index ? "scale-150" : "scale-100"
                }`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg transition-all duration-500 ${
                    hoveredCard === index ? "scale-110 rotate-6" : ""
                  }`}>
                    <Icon className="w-7 h-7 text-white" />
                    {hoveredCard === index && (
                      <div className="absolute inset-0 border-4 border-purple-400 border-t-transparent rounded-xl animate-rotate"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 ${
                    hoveredCard === index ? item.textColor : ""
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        style={{ animationDelay: `${tagIndex * 50}ms` }}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border-2 transition-all duration-300 ${
                          hoveredCard === index
                            ? `bg-gradient-to-r ${item.gradient} text-white border-transparent scale-105`
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  {hoveredCard === index && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} animate-expandWidth`}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`mt-10 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-center shadow-2xl shadow-purple-300 transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <h3 className="text-3xl font-bold text-white mb-3">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            I'm currently open to work and excited about new opportunities. Let's connect and create innovative solutions!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}