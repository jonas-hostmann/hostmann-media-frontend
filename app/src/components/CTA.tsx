'use client';

import { useEffect, useRef } from 'react';
import { Calendar, Mail } from 'lucide-react';
import Button from './Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export default function CTASection({
  title = 'Bereit, Ihr Unternehmen digital zu transformieren?',
  subtitle = 'Vereinbaren Sie ein kostenloses Erstgespräch. Gemeinsam finden wir die beste digitale Strategie für Ihr Unternehmen — unverbindlich und ohne versteckte Kosten.',
  primaryButton = { label: 'Termin vereinbaren', href: '/kontakt' },
  secondaryButton = { label: 'Direkt E-Mail schreiben', href: 'mailto:jonas@hostmann-media.de' },
}: CTASectionProps) {
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
    <section ref={sectionRef} className="relative bg-primary-900 py-20 md:py-28 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-500/15 blur-[80px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2
          data-animate
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-[700px] mx-auto"
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {title}
        </h2>
        <p
          data-animate
          className="mt-4 text-base md:text-lg text-white/75 leading-relaxed max-w-[560px] mx-auto"
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 100ms' }}
        >
          {subtitle}
        </p>
        <div
          data-animate
          className="mt-8 flex flex-wrap justify-center gap-4"
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}
        >
          <Button href={primaryButton.href} variant="white" icon={Calendar}>
            {primaryButton.label}
          </Button>
          <Button href={secondaryButton.href} variant="ghost" icon={Mail}>
            {secondaryButton.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
