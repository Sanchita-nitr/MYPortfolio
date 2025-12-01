// src/components/About.tsx
"use client";
import { Code2, Database, Sparkles, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mt-12">
      {/* Hero Introduction */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg p-8 md:p-12 border border-rose-100 dark:border-slate-700">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 dark:from-rose-400 dark:to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I&apos;m Sanchita!
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              I'm a passionate <span className="font-semibold text-rose-600 dark:text-rose-400">AI/ML enthusiast</span> and <span className="font-semibold text-rose-600 dark:text-rose-400">full-stack developer</span> currently pursuing my degree in Electronics and Communications. I love building intelligent systems that solve real-world problems—from training machine learning models to deploying full-stack applications that users love.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              Whether it's experimenting with the latest AI frameworks, crafting clean APIs, or designing intuitive user interfaces, I'm always eager to learn and create something impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4">
            <Code2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Full-Stack Development
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Building responsive web applications with <span className="font-medium text-slate-900 dark:text-slate-200">Next.js, React, and Tailwind CSS</span>. I focus on creating seamless user experiences with clean, maintainable code.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded-full">Next.js</span>
            <span className="text-xs px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded-full">TypeScript</span>
            <span className="text-xs px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded-full">Tailwind CSS</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-pink-600 dark:text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            AI & Machine Learning
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Developing ML models with <span className="font-medium text-slate-900 dark:text-slate-200">PyTorch, TensorFlow, and Scikit-learn</span>. From data preprocessing to model deployment, I enjoy the entire ML pipeline.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-full">Python</span>
            <span className="text-xs px-2 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-full">PyTorch</span>
            <span className="text-xs px-2 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-full">Pandas</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            API & Backend Systems
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Creating robust RESTful APIs with <span className="font-medium text-slate-900 dark:text-slate-200">FastAPI and Node.js</span>. I design scalable backend architectures that power modern applications.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full">FastAPI</span>
            <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full">PostgreSQL</span>
            <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full">Docker</span>
          </div>
        </div>
      </div>

    </section>
  );
}