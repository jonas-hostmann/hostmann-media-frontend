'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Target } from 'lucide-react';
import CheckItem from './CheckItem';
import Badge from './Badge';

const highlights = [
  'Studierter Webentwickler mit Fokus auf Praxis',
  'Spezialisiert auf KMU-Bedürfnisse',
  'Transparente Kommunikation & faire Preise',
  'SEO-First Ansatz von Beginn an',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, i) => {
              const htmlEl = el as HTMLElement;
              setTimeout(() => {
                htmlEl.style.opacity = '1';
                htmlEl.style.transform = el.classList.contains('scale-in') ? 'scale(1)' : 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            data-animate
            className="scale-in relative"
            style={{ opacity: 0, transform: 'scale(0.95)', transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
              <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-primary-300" />
            </div>
            {/* Floating Card */}
            <div
              data-animate
              className="absolute -bottom-4 -right-2 md:right-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 300ms' }}
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">100% Fokus auf Ergebnisse</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <span
              data-animate
              className="text-xs font-semibold uppercase tracking-[0.05em] text-primary-600"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}
            >
              Über mich
            </span>
            <h2
              data-animate
              className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}
            >
              Jonas Hostmann
            </h2>
            <p
              data-animate
              className="text-base md:text-lg text-slate-500 leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}
            >
              Als Student verbinde ich frische Ideen mit praxiserprobten Methoden. Mein Ziel ist es, kleinen und mittelständischen Unternehmen eine professionelle digitale Präsenz zu ermöglichen — transparent, fair und mit echtem Mehrwert.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {highlights.map((text, i) => (
                <div
                  key={text}
                  data-animate
                  style={{ opacity: 0, transform: 'translateY(40px)', transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 100}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 100}ms` }}
                >
                  <CheckItem text={text} />
                </div>
              ))}
            </div>

            <div
              data-animate
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms' }}
            >
              <Badge>Student mit praxiserprobtem Know-how</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
