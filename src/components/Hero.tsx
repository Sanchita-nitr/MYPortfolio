// src/components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-2">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I’m <span className="text-indigo-600">Sanchita</span> — building production-grade AI & data systems.
        </h1>
        <p className="mt-4 text-slate-700 max-w-prose">
          AI/ML Engineer & Full-Stack Developer. I design scalable architectures that take models from research to real-world production — from MediMind (AI prescription assistant) to CampusSentinel (campus intelligence).
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="inline-block px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow">View Projects</a>
          <a href="#contact" className="inline-block px-5 py-3 rounded-lg border">Contact Me</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h4 className="text-sm text-slate-500">Top Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python","Machine Learning","Next.js","FastAPI","Postgres","React"].map(s => (
                <span key={s} className="text-xs px-3 py-1 bg-slate-100 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow">
            <h4 className="text-sm text-slate-500">Highlights</h4>
            <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
              <li>1st Runner-Up — Ethos Hackathon (IIT Guwahati, 2025)</li>
              <li>Finalist — Novanmash 2025</li>
              <li>IEEE INDISCON 2025 — HAR research paper</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.aside initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
        <div className="p-6 bg-white rounded-2xl shadow">
          <div className="flex flex-col items-center">
            <img src="/profile.jpg" alt="Sanchita" className="w-28 h-28 rounded-full object-cover" />
            <h4 className="mt-4 font-semibold">Sanchita Priyadarshinee</h4>
            <p className="text-xs text-slate-500">AI/ML Engineer • NIT Rourkela (ECE’27)</p>

            <div className="mt-4 w-full">
              <div className="text-xs text-slate-500">Email</div>
              <div className="mt-2 text-sm">sanchitapriyadarshinee@gmail.com</div>
              <div className="mt-1 text-sm">+91 94371 60801</div>
            </div>

            <div className="mt-4 flex gap-2">
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md hover:bg-slate-50">GitHub</a>
              <a href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md hover:bg-slate-50">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
