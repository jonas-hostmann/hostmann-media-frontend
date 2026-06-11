import type { Metadata } from "next";
import { Globe, Search, Code, Megaphone, BarChart3, Smartphone, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Professionelle Webdesign-, SEO- und Marketing-Leistungen für KMUs. Von der Konzeption bis zur Umsetzung — alles aus einer Hand.",
};

interface ServiceDetail {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  reversed: boolean;
}

const services: ServiceDetail[] = [
  {
    id: "webdesign",
    icon: Globe,
    title: "Webdesign",
    subtitle: "Maßgeschneiderte Designs, die beeindrucken",
    description: "Ihr Webauftritt ist Ihre digitale Visitenkarte. Ich erstelle ansprechende, moderne Designs, die Ihre Marke perfekt repräsentieren und Besucher von der ersten Sekunde an begeistern. Jedes Design ist individuell auf Ihre Zielgruppe abgestimmt.",
    features: ["Individuelles Design nach Ihren Wünschen", "Responsive für alle Bildschirmgrößen", "Benutzerfreundliche Navigation", "Optimale Ladezeiten"],
    gradient: "from-blue-600 to-blue-700",
    reversed: false,
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Content",
    subtitle: "Gefunden werden, wo Ihre Kunden suchen",
    description: "Eine schöne Website nützt wenig, wenn sie niemand findet. Ich optimiere Ihre Inhalte für Suchmaschinen und entwickle Content-Strategien, die langfristig Traffic und qualifizierte Leads generieren.",
    features: ["Keyword-Analyse & -Strategie", "On-Page & Off-Page Optimierung", "Content-Erstellung & Planung", "Regelmäßige SEO-Reports"],
    gradient: "from-indigo-600 to-indigo-700",
    reversed: true,
  },
  {
    id: "entwicklung",
    icon: Code,
    title: "Webentwicklung",
    subtitle: "Technisch sauber, zukunftssicher",
    description: "Hinter jedem großartigen Design steht solide Technik. Ich entwickle Ihre Website mit modernsten Technologien, die schnell, sicher und skalierbar sind — für langfristigen Erfolg ohne technische Schulden.",
    features: ["Moderne Frameworks & Technologien", "Performance-Optimierung", "Sicherheitsstandards", "Wartung & Support"],
    gradient: "from-emerald-600 to-emerald-700",
    reversed: false,
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Online-Marketing",
    subtitle: "Reichweite aufbauen, Conversions steigern",
    description: "Digitales Marketing ist mehr als nur Werbung. Ich entwickle zielgerichtete Strategien, die Ihre Zielgruppe dort erreichen, wo sie sich aufhält — und sie in zahlende Kunden verwandeln.",
    features: ["Social Media Marketing", "E-Mail-Marketing Kampagnen", "Google Ads & PPC", "Conversion-Optimierung"],
    gradient: "from-amber-600 to-amber-700",
    reversed: true,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Tracking",
    subtitle: "Daten verstehen, Erfolge messen",
    description: "Ohne Daten sind Sie im Dunkeln. Ich richte professionelles Tracking ein, das Ihnen zeigt, was auf Ihrer Website passiert — von Besucherzahlen bis zu Conversion-Raten. So treffen Sie fundierte Entscheidungen.",
    features: ["Google Analytics 4 Setup", "Conversion-Tracking", "Custom Dashboards", "Monatliche Reporting"],
    gradient: "from-rose-600 to-rose-700",
    reversed: false,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Optimierung",
    subtitle: "Perfekt auf jedem Gerät",
    description: "Über 60% aller Website-Besuche erfolgen über Mobilgeräte. Ich sorge dafür, dass Ihre Website auf Smartphones und Tablets genauso gut aussieht und funktioniert wie auf dem Desktop.",
    features: ["Mobile-First Designansatz", "Touch-optimierte Bedienung", "Schnelle mobile Ladezeiten", "App-ähnliche User Experience"],
    gradient: "from-violet-600 to-violet-700",
    reversed: true,
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Sub Hero */}
      <section className="relative bg-primary-900 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-500/15 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-400 text-xs font-medium mb-4">
            <SparklesIcon />
            Unsere Leistungen
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Leistungen
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/75 max-w-[600px] mx-auto">
            Von der strategischen Planung bis zur technischen Umsetzung — ich biete Ihnen alle Services aus einer Hand für Ihren digitalen Erfolg.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${service.reversed ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className={`flex flex-col gap-5 ${service.reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{service.title}</h3>
                    <p className="mt-1 text-base text-primary-600 font-medium">{service.subtitle}</p>
                  </div>
                  <p className="text-base text-slate-500 leading-relaxed">{service.description}</p>
                  <ul className="flex flex-col gap-3 mt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${service.reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center`}>
                    <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-12 h-12 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Lassen Sie uns Ihr Projekt verwirklichen"
        subtitle="Ob Webdesign, SEO oder komplette digitale Transformation — ich begleite Sie vom Konzept bis zum Launch."
        primaryButton={{ label: "Projekt anfragen", href: "/kontakt" }}
        secondaryButton={{ label: "Zurück zur Startseite", href: "/" }}
      />
    </>
  );
}

function SparklesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
