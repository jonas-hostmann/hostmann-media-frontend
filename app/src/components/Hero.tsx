'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Globe, Search, TrendingUp } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('[data-animate]');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition = `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 200}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 200}ms`;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elements.forEach(el => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  const infoBoxes = [
    { icon: Globe, title: 'Modernes Webdesign', desc: 'Zeitgemäße Websites, die überzeugen' },
    { icon: Search, title: 'SEO-Optimierung', desc: 'Gefunden werden in Google & Co.' },
    { icon: TrendingUp, title: 'Mehr Kunden', desc: 'Conversion-optimierte Lösungen' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-white pt-28 pb-20 md:pt-32 md:pb-24"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-[1] overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary-200 to-primary-100 opacity-40 blur-[120px] animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-100 to-transparent opacity-40 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-0 w-[250px] h-[250px] rounded-full bg-primary-50 opacity-40 blur-[120px] animate-float-delayed-2" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 w-full">
        {/* Badge */}
        <div data-animate className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-medium text-primary-700">Webagentur für KMUs</span>
        </div>

        {/* Headline */}
        <h1 data-animate className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight leading-[1.1] max-w-[800px]">
          <span className="text-slate-900">Digital sichtbar.</span>
          <br />
          <span className="text-primary-600">Online erfolgreich.</span>
        </h1>

        {/* Subheadline */}
        <p data-animate className="mt-5 text-base md:text-lg text-slate-500 leading-relaxed max-w-[560px]">
          Jonas Hostmann, Student und leidenschaftlicher Webdesigner. Ich helfe kleinen und mittelständischen Unternehmen, eine professionelle digitale Präsenz aufzubauen, die sichtbar macht und Kunden bringt.
        </p>

        {/* CTA Group */}
        <div data-animate className="mt-8 flex flex-wrap gap-4">
          <Button href="/kontakt" variant="primary">
            Kostenlos beraten lassen
          </Button>
          <Button href="/leistungen" variant="secondary">
            Leistungen entdecken
          </Button>
        </div>

        {/* Info Boxes */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {infoBoxes.map((box, i) => (
            <div
              key={box.title}
              data-animate
              className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4"
              style={{ transitionDelay: `${1100 + i * 100}ms` }}
            >
              <box.icon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-slate-800">{box.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
