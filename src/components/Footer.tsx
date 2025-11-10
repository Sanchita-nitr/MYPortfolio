// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t">
      <div className="container text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Sanchita Priyadarshinee — Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
