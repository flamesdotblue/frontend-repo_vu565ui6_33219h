import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="vision" className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Design vision</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The Aligned A logo leverages negative space to form an upward arrow that simultaneously
                suggests the peak of the letter A. The surrounding solid block keeps the mark bold and
                versatile across surfaces—from app icons to billboards. Its sharp geometry conveys
                direction, growth, and alignment—offering a timeless symbol for founders navigating
                complex decisions with automated excellence.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white">
              <div className="aspect-square grid place-items-center">
                {/* Reuse SVG directly for precise presentation */}
                <svg viewBox="0 0 100 100" className="w-48 h-48 text-slate-900">
                  <defs>
                    <mask id="a-mask-inline" maskUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="100" height="100" fill="white" />
                      <rect x="47" y="18" width="6" height="64" fill="black" />
                      <polygon points="50,22 27,76 36,76 50,44" fill="black" />
                      <polygon points="50,22 73,76 64,76 50,44" fill="black" />
                      <rect x="42" y="50" width="16" height="6" fill="black" />
                      <polygon points="50,12 40,26 60,26" fill="black" />
                    </mask>
                  </defs>
                  <rect x="4" y="4" width="92" height="92" rx="12" fill="currentColor" mask="url(#a-mask-inline)" />
                </svg>
              </div>
              <p className="mt-6 text-sm text-slate-600">
                Minimal detail. Maximum signal. Designed to remain crisp at any scale and on any
                background, with a form that is both memorable and meaningful.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
