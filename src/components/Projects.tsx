// src/components/Projects.tsx
"use client";
import React from "react";
import { PROJECTS } from "../data/projectsData";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-2xl font-bold">Projects</h3>
      <p className="mt-2 text-slate-600">Selected projects demonstrating AI, data, and full-stack capabilities.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <motion.article key={p.title} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow p-6 overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-medium">
                <img src={p.image ?? "/projects/placeholder.png"} alt={p.title} className="w-full h-full object-cover rounded-lg" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{p.title}</h4>
                  {p.achievement && <span className="text-xs text-indigo-600">{p.achievement}</span>}
                </div>

                <p className="mt-2 text-sm text-slate-600">{p.subtitle}</p>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 rounded bg-indigo-600 text-white">Demo</a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 rounded border">Code</a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
