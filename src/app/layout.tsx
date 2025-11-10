// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Sanchita Priyadarshinee — AI/ML Engineer",
  description: "Portfolio — AI/ML Engineer • Full-Stack Developer • NIT Rourkela (ECE'27)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
