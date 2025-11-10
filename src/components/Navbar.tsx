// src/components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold flex items-center justify-center">SP</div>
          <div>
            <div className="font-semibold">Sanchita Priyadarshinee</div>
            <div className="text-xs text-slate-500">AI/ML Engineer • Full-Stack Developer</div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#achievements" className="text-sm hover:underline">Achievements</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/" target="_blank" rel="noreferrer" className="ml-2 text-sm px-3 py-1 rounded border">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}
