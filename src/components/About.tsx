// src/components/About.tsx
"use client";
import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-12 bg-white rounded-2xl shadow p-6">
      <h3 className="text-2xl font-bold">About</h3>
      <p className="mt-4 text-slate-700 max-w-prose">
        I’m an AI & Machine Learning engineer and full-stack developer who loves turning messy data into reliable, production-ready systems. My work spans end-to-end product development: research and model prototyping, creating robust APIs, and deploying user-friendly frontends.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <div className="text-sm text-slate-500">Primary Focus</div>
          <div className="mt-1 font-medium">ML Engineering & Data Systems</div>
          <div className="text-xs text-slate-500 mt-2">Model-to-production pipelines, API design, and performance-conscious deployments.</div>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="text-sm text-slate-500">Tools I Use</div>
          <div className="mt-1 font-medium">Python, PyTorch/TensorFlow, Scikit-learn, FastAPI</div>
          <div className="text-xs text-slate-500 mt-2">Also: Next.js, Tailwind, PostgreSQL, LangChain, Gemini.</div>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="text-sm text-slate-500">Looking For</div>
          <div className="mt-1 font-medium">Internships & Roles in Data Science / ML Engineering</div>
          <div className="text-xs text-slate-500 mt-2">Open to remote or on-site internships and collaborative research projects.</div>
        </div>
      </div>
    </section>
  );
}
