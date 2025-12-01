"use client";
import { useState, useEffect } from "react";
import { PROJECTS } from "../data/projectsData";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extract unique tech categories
  const allTech = [...new Set(PROJECTS.flatMap(p => p.tech))];
  const filters = ["All", "React", "Python", "Node.js", "ML/AI"];

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
            transform: scale(0.9);
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
            transform: translateY(-8px);
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.4);
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

        @keyframes rotate360 {
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

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-expandWidth {
          animation: expandWidth 0.6s ease-out forwards;
        }

        .animate-rotate {
          animation: rotate360 20s linear infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .tech-badge {
          position: relative;
          overflow: hidden;
        }

        .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left 0.5s;
        }

        .tech-badge:hover::before {
          left: 100%;
        }
      `}</style>

      <section id="projects" className="mt-12">
        {/* Header */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="relative inline-block">
                <h3 className="text-4xl font-bold text-slate-800">Featured Projects</h3>
                <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full animate-expandWidth"></div>
              </div>
              <p className="mt-4 text-slate-600 text-lg">
                Selected projects demonstrating AI, data, and full-stack capabilities
              </p>
            </div>

            {/* Project Count Badge */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 px-6 py-3 rounded-2xl border-2 border-purple-200 animate-pulse-glow">
              <div className="text-3xl font-bold gradient-text">{PROJECTS.length}</div>
              <div className="text-sm text-slate-600 font-medium">Projects</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className={`mt-8 flex flex-wrap gap-3 transform transition-all duration-700 delay-100 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        }`}>
          {filters.map((f, index) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 animate-scaleIn ${
                filter === f
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, index) => (
            <article
              key={p.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`group relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-500 cursor-pointer animate-scaleIn ${
                hoveredIndex === index
                  ? "border-purple-400 shadow-2xl shadow-purple-200 scale-[1.02] -translate-y-2"
                  : "border-slate-200 hover:border-purple-300"
              }`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-0 transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : ""
              }`}></div>

              {/* Decorative corner circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>

              <div className="relative z-10 p-6">
                <div className="flex items-start gap-5">
                  {/* Project Icon/Image */}
                  <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index ? "scale-110 rotate-6 shadow-lg" : ""
                  }`}>
                    {p.image ? (
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg 
                        className={`w-10 h-10 text-purple-600 transition-transform duration-500 ${
                          hoveredIndex === index ? "animate-float" : ""
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    
                    {/* Rotating ring on hover */}
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 border-4 border-purple-400 border-t-transparent rounded-2xl animate-rotate"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Achievement */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className={`text-xl font-bold text-slate-800 transition-colors duration-300 ${
                        hoveredIndex === index ? "text-purple-700" : ""
                      }`}>
                        {p.title}
                      </h4>
                      {p.achievement && (
                        <span className="flex-shrink-0 text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 animate-float">
                          {p.achievement}
                        </span>
                      )}
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm font-semibold text-purple-600 mb-3">
                      {p.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t, techIndex) => (
                        <span
                          key={t}
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                          className={`tech-badge text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200 transition-all duration-300 ${
                            hoveredIndex === index ? "scale-105 border-purple-300" : ""
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-purple-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-sm transition-all duration-300 hover:border-purple-400 hover:text-purple-700 hover:scale-105 hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient indicator */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-expandWidth"></div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className={`mt-12 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 border-2 border-purple-200 text-center transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <h4 className="text-2xl font-bold text-slate-800 mb-3">
            Want to see more?
          </h4>
          <p className="text-slate-600 mb-6">
            Check out my GitHub for additional projects and contributions
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}