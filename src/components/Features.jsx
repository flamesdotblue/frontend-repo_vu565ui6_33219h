import React from 'react';
import { Compass, TrendingUp, Target, Shield } from 'lucide-react';
import LogoMark from './LogoMark';

const items = [
  {
    icon: <Compass className="w-5 h-5" />,
    title: 'Direction by design',
    desc: 'The arrow-in-A mark anchors the brand with a clear, forward vector—instantly recognized, endlessly versatile.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Growth encoded',
    desc: 'Upward geometry signals momentum and alignment—resonating with founders seeking compounding progress.'
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Precision focus',
    desc: 'Crisp angles and clean negative space embody accuracy, automation, and smart decisioning.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'NeoPop confidence',
    desc: 'Bold, minimal surfaces with high-contrast blocks echo the CRED NeoPop ethos—iconic yet restrained.'
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <LogoMark size={32} className="text-slate-900" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Why this mark works</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
