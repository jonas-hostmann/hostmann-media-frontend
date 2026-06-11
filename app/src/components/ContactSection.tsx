'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactDetails = [
  { icon: Mail, label: 'E-Mail', value: 'jonas@hostmann-media.de' },
  { icon: Phone, label: 'Telefon', value: '[Telefonnummer]' },
  { icon: MapPin, label: 'Standort', value: '[PLZ Ort]' },
  { icon: Clock, label: 'Erreichbarkeit', value: 'Mo–Fr, 09:00–18:00 Uhr' },
];

export default function ContactSection() {
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
                htmlEl.style.transform = 'translateY(0)';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <span
              data-animate
              className="text-xs font-semibold uppercase tracking-[0.05em] text-primary-600"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Kontakt
            </span>
            <h2
              data-animate
              className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Lassen Sie uns reden
            </h2>
            <p
              data-animate
              className="text-base text-slate-500 leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Haben Sie ein Projekt im Kopf oder Fragen zu meinen Leistungen? Ich freue mich auf Ihre Nachricht.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {contactDetails.map((detail, i) => (
                <div
                  key={detail.label}
                  data-animate
                  className="flex items-center gap-4"
                  style={{ opacity: 0, transform: 'translateY(40px)', transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">{detail.label}</p>
                    <p className="text-sm text-slate-500">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            data-animate
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}
          >
            <ContactForm fullWidthButton />
          </div>
        </div>
      </div>
    </section>
  );
}
