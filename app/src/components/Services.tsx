'use client';

import { useEffect, useRef } from 'react';
import { Globe, Search, Code, Megaphone, BarChart3, Smartphone } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Webdesign',
    description: 'Maßgeschneiderte Designs, die Ihre Marke perfekt repräsentieren und Besucher begeistern.',
    link: '/leistungen#webdesign',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    description: 'Gefunden werden, wo Ihre Kunden suchen. Content-Strategien mit messbarem Erfolg.',
    link: '/leistungen#seo',
  },
  {
    icon: Code,
    title: 'Webentwicklung',
    description: 'Technisch saubere Umsetzung mit modernsten Technologien für beste Performance.',
    link: '/leistungen#entwicklung',
  },
  {
    icon: Megaphone,
    title: 'Online-Marketing',
    description: 'Zielgerichtete Kampagnen, die Ihre Reichweite erhöhen und Conversions generieren.',
    link: '/leistungen#marketing',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tracking',
    description: 'Datenbasierte Entscheidungen durch professionelles Tracking und aussagekräftige Reports.',
    link: '/leistungen#analytics',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimierung',
    description: 'Perfekte Darstellung auf allen Geräten für maximale Reichweite und Nutzerzufriedenheit.',
    link: '/leistungen#mobile',
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="bg-slate-100 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div data-animate style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <SectionHeader
            preTitle="Leistungen"
            title="Alles, was Sie für den digitalen Erfolg brauchen"
            subtitle="Von der ersten Idee bis zum laufenden Betrieb — ich begleite Sie auf Ihrem Weg in die digitale Zukunft."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              data-animate
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
