import React from 'react';
import LogoMark from './LogoMark';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={28} className="text-slate-900" />
          <span className="font-semibold tracking-tight text-slate-900">Compass</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#vision" className="hover:text-slate-900 transition-colors">Vision</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
