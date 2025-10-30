import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Aligned A for Compass
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A minimalist, iconic mark that merges direction and ambition. Negative space forms an
            upward arrow that peaks as the letter A—communicating alignment, growth, and precision.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-slate-800">
              Explore features
            </a>
            <a href="#vision" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 font-medium hover:bg-slate-50">
              Design vision
            </a>
          </div>
        </div>
        <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-slate-200 bg-white">
          <Spline
            scene="https://prod.spline.design/qw5pDw-Wh4PXvDw4/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient edges that do not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>
      </div>
    </section>
  );
}
