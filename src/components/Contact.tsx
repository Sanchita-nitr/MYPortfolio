// src/components/Contact.tsx
"use client";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="mt-12">
      <h3 className="text-2xl font-bold">Get in touch</h3>
      <div className="mt-6 bg-white rounded-2xl p-6 shadow grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Open to</h4>
          <p className="mt-2 text-slate-700">Data Science internships, ML engineering roles, and collaborations.</p>

          <div className="mt-6">
            <div className="text-sm text-slate-500">Email</div>
            <div className="text-sm mt-1">sanchitapriyadarshinee@gmail.com</div>

            <div className="text-sm text-slate-500 mt-4">Location</div>
            <div className="text-sm mt-1">Rourkela, Odisha, India</div>

            <div className="mt-6 flex gap-2">
              <a href="mailto:sanchitapriyadarshinee@gmail.com" className="px-4 py-2 rounded bg-indigo-600 text-white">Email me</a>
              <a href="https://www.linkedin.com/in/sanchita-priyadarshinee-9912b6282/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded border">LinkedIn</a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <input name="name" placeholder="Your name" className="w-full border rounded px-4 py-2" required />
          <input name="email" placeholder="Your email" className="w-full border rounded px-4 py-2" required />
          <textarea name="message" placeholder="Message" rows={6} className="w-full border rounded px-4 py-2" required />
          <button type="submit" className="px-6 py-2 rounded bg-indigo-600 text-white">Send</button>
          {submitted && <div className="text-sm text-green-600">Thanks! I will reply soon.</div>}
        </form>
      </div>
    </section>
  );
}
