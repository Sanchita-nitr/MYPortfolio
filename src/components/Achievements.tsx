// src/components/Achievements.tsx
"use client";
import React from "react";
import { ACHIEVEMENTS } from "../data/achievementsData";

export default function Achievements() {
  return (
    <section id="achievements" className="mt-12">
      <h3 className="text-2xl font-bold">Achievements & Publications</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="bg-white rounded-2xl p-6 shadow">
            <div className="text-sm text-slate-500">{a.issuer}</div>
            <div className="mt-2 font-semibold">{a.title}</div>
            <div className="mt-2 text-xs text-slate-600">{a.date}</div>
            <p className="mt-3 text-sm text-slate-700">{a.details}</p>
            {a.image && <img src={a.image} alt={a.title} className="mt-4 w-full object-contain rounded" />}
          </div>
        ))}
      </div>
    </section>
  );
}
