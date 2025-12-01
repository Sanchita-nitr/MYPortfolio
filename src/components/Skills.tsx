"use client";
import { useState, useEffect } from "react";
import { SKILL_CATEGORIES } from "../data/skillsData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateStats(true), 500);
  }, []);

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.category)];
  
  const filteredSkills =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === selectedCategory);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes expandHeight {
          from {
            height: 0;
          }
          to {
            height: 2rem;
          }
        }

        @keyframes bounceX {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-expandHeight {
          animation: expandHeight 0.6s ease-out forwards;
        }

        .animate-bounceX {
          animation: bounceX 0.6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-countUp {
          animation: countUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <section id="skills" className="mt-12 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header with gradient background */}
      <div className={`bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-8 py-6 transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
            <p className="text-purple-100 mt-1">Expertise across modern technologies</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 animate-pulse">
            <p className="text-white font-semibold">Open to Work</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className={`px-8 py-6 border-b border-slate-200 bg-white transform transition-all duration-700 delay-100 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
      }`}>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 animate-slideIn ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-200 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:shadow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-8 py-8 space-y-8">
        {filteredSkills.map((cat, catIndex) => (
          <div 
            key={cat.category} 
            style={{ animationDelay: `${catIndex * 100}ms` }}
            className="animate-fadeInUp"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full animate-expandHeight"></div>
              <h4 className="text-xl font-bold text-slate-800">{cat.category}</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent animate-expandWidth"></div>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full animate-bounce-subtle">
                {cat.skills.length} skills
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.skills.map((s, skillIndex) => (
                <div
                  key={s.name}
                  onMouseEnter={() => setHoveredSkill(s.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${skillIndex * 50}ms` }}
                  className={`group relative flex items-center gap-4 px-5 py-4 bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer animate-scaleIn ${
                    hoveredSkill === s.name
                      ? "border-blue-500 shadow-lg shadow-blue-100 scale-105 -translate-y-1"
                      : "border-slate-200 shadow-sm hover:border-blue-300"
                  }`}
                >
                  {/* Skill Icon */}
                  {s.image && (
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredSkill === s.name ? "bg-blue-50 animate-spin-slow" : "bg-slate-50"
                      }`}>
                        <img
                          src={s.image}
                          alt={s.name}
                          className={`w-8 h-8 object-contain transition-transform duration-300 ${
                            hoveredSkill === s.name ? "scale-110" : ""
                          }`}
                        />
                      </div>
                      {hoveredSkill === s.name && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping-slow"></div>
                      )}
                    </div>
                  )}
                  
                  {/* Skill Name */}
                  <div className="flex-1 min-w-0">
                    <span className={`font-semibold transition-colors duration-300 ${
                      hoveredSkill === s.name ? "text-purple-700" : "text-slate-700"
                    }`}>
                      {s.name}
                    </span>
                    {hoveredSkill === s.name && (
                      <div className="mt-1 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-expandWidth"></div>
                    )}
                  </div>

                  {/* Hover Arrow */}
                  <div className={`transition-all duration-300 ${
                    hoveredSkill === s.name ? "opacity-100 translate-x-0 animate-bounceX" : "opacity-0 -translate-x-2"
                  }`}>
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className={`px-8 py-6 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-t border-slate-200 transform transition-all duration-700 delay-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`text-center transform transition-all duration-500 ${
            animateStats ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}>
            <div className="text-3xl font-bold gradient-text animate-countUp">
              {SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0)}
            </div>
            <div className="text-sm text-slate-600 mt-1">Total Skills</div>
          </div>
          <div className={`text-center transform transition-all duration-500 delay-100 ${
            animateStats ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}>
            <div className="text-3xl font-bold gradient-text animate-countUp">
              {SKILL_CATEGORIES.length}
            </div>
            <div className="text-sm text-slate-600 mt-1">Categories</div>
          </div>
          <div className={`text-center transform transition-all duration-500 delay-200 ${
            animateStats ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}>
            <div className="text-3xl font-bold gradient-text animate-countUp">5+</div>
            <div className="text-sm text-slate-600 mt-1">Years Experience</div>
          </div>
          <div className={`text-center transform transition-all duration-500 delay-300 ${
            animateStats ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}>
            <div className="text-3xl font-bold gradient-text animate-countUp">100%</div>
            <div className="text-sm text-slate-600 mt-1">Commitment</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}