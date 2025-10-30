import React from 'react';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoMark size={24} className="text-slate-900" />
          <span className="text-sm font-medium text-slate-800">Compass</span>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Compass. Designed for founders who value clarity and momentum.
        </p>
        <a
          href="#get-started"
          className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
        >
          Get in touch
        </a>
      </div>
    </footer>
  );
}
