"use client";
import React, { useState, useEffect } from "react";
import { ACHIEVEMENTS } from "../data/achievementsData";

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
          }
        }

        @keyframes expandBorder {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-expandBorder {
          animation: expandBorder 0.6s ease-out forwards;
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b) border-box;
          border: 2px solid transparent;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section id="achievements" className="mt-12">
        {/* Header */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="relative inline-block">
            <h3 className="text-4xl font-bold text-slate-800">
              Achievements & Publications
            </h3>
            <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full animate-expandBorder"></div>
          </div>
          <p className="mt-4 text-slate-600 text-lg">
            Recognition and contributions to the tech community
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((a, index) => (
            <div
              key={a.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer animate-scaleIn overflow-hidden ${
                hoveredIndex === index
                  ? "border-purple-400 shadow-2xl shadow-purple-200 scale-105 -translate-y-2"
                  : "border-slate-200 hover:border-purple-300"
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-0 transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : ""
              }`}></div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-bl-full transition-all duration-500 ${
                hoveredIndex === index ? "scale-150" : "scale-100"
              }`}></div>

              {/* Trophy/Award Icon */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-4 transition-all duration-500 ${
                  hoveredIndex === index ? "scale-110 rotate-6" : ""
                }`}>
                  <svg 
                    className={`w-8 h-8 text-purple-600 transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-125 animate-float" : ""
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                    />
                  </svg>
                </div>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-300 ${
                    hoveredIndex === index ? "gradient-text scale-105" : "text-purple-700"
                  }`}>
                    {a.issuer}
                  </span>
                  <div className={`flex-1 h-px bg-gradient-to-r from-purple-300 to-transparent transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-50"
                  }`}></div>
                </div>

                {/* Title */}
                <h4 className={`text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-purple-700" : ""
                }`}>
                  {a.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-slate-500 font-medium">{a.date}</span>
                </div>

                {/* Details */}
                <p className={`text-sm text-slate-600 leading-relaxed transition-all duration-300 ${
                  hoveredIndex === index ? "text-slate-700" : ""
                }`}>
                  {a.details}
                </p>

                {/* Image */}
                {a.image && (
                  <div className="mt-5 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      className={`w-full object-contain transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                )}

                {/* View Details Arrow */}
                <div className={`flex items-center gap-2 mt-5 font-semibold transition-all duration-300 ${
                  hoveredIndex === index 
                    ? "text-purple-600 translate-x-2 opacity-100" 
                    : "text-slate-400 translate-x-0 opacity-0"
                }`}>
                  <span className="text-sm">View Details</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Bottom gradient line */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-expandBorder"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className={`mt-12 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 border-2 border-purple-200 transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center animate-scaleIn" style={{ animationDelay: "400ms" }}>
              <div className="text-4xl font-bold gradient-text mb-2">
                {ACHIEVEMENTS.length}+
              </div>
              <div className="text-slate-600 font-medium">Total Achievements</div>
            </div>
            <div className="text-center animate-scaleIn" style={{ animationDelay: "500ms" }}>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-slate-600 font-medium">Excellence Rate</div>
            </div>
            <div className="text-center animate-scaleIn" style={{ animationDelay: "600ms" }}>
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-slate-600 font-medium">Growth Mindset</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}