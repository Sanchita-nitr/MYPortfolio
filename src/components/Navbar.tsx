
"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-colors duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 dark:from-rose-400 dark:to-pink-500 text-white font-bold flex items-center justify-center shadow-md shadow-rose-500/30 dark:shadow-rose-400/20 group-hover:shadow-rose-500/50 dark:group-hover:shadow-rose-400/40 transition-all duration-300">
              SP
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-slate-900 dark:text-white">
                Sanchita Priyadarshinee
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                AI/ML Engineer • Full-Stack Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#projects"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 dark:from-rose-500 dark:to-pink-500 dark:hover:from-rose-600 dark:hover:to-pink-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              LinkedIn
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <a
                href="#projects"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#achievements"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Achievements
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 dark:from-rose-500 dark:to-pink-500 dark:hover:from-rose-600 dark:hover:to-pink-600 px-4 py-2 rounded-lg shadow-md text-center transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
