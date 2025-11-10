// src/components/Skills.tsx
"use client";
import React from "react";
import { SKILLS } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="mt-12 bg-white rounded-2xl shadow p-6">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <span key={s} className="px-3 py-2 text-sm bg-slate-50 rounded-lg shadow-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
