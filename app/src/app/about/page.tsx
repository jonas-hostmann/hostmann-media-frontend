import type { Metadata } from "next";
import { GraduationCap, User, Sparkles, Flame, Target, Award, Code, Globe, Layers } from "lucide-react";
import CTASection from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";
import PuckPageRenderer from "@/components/PuckPageRenderer";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Jonas Hostmann — Student und Webdesigner. Erfahren Sie mehr über meine Leidenschaft für digitale Lösungen und wie ich KMUs helfe, online erfolgreich zu sein.",
};

const badges = [
  { label: "SEO-zertifiziert", icon: Award },
  { label: "Full-Stack Developer", icon: Code },
  { label: "WordPress Experte", icon: Globe },
  { label: "React & Next.js", icon: Layers },
];

const values = [
  { icon: Sparkles, title: "Innovation", description: "Ich bleibe stets am Puls der Zeit und setze modernste Technologien ein, um Ihnen einen echten Wettbewerbsvorteil zu verschaffen." },
  { icon: Flame, title: "Leidenschaft", description: "Jedes Projekt ist mir wichtig. Ich bringe echte Begeisterung mit und gebe mich nicht mit Durchschnitt zufrieden." },
  { icon: Target, title: "Ergebnisorientierung", description: "Schönes Design allein reicht nicht. Ich konzentriere mich auf messbare Ergebnisse, die Ihr Unternehmen voranbringen." },
];

const timeline = [
  { year: "2024", title: "Gründung Hostmann Media", description: "Die Agentur gegründet, um KMUs bei der Digitalisierung zu unterstützen.", side: "right" },
  { year: "2023", title: "Spezialisierung auf KMU-Marketing", description: "Fokus auf Webdesign, SEO und digitale Strategien für kleine Unternehmen.", side: "left" },
  { year: "2022", title: "Beginn des Studiums", description: "Start des Studiums mit Schwerpunkt auf Webentwicklung und digitale Medien.", side: "right" },
];

export default function AboutPage() {
  return (
    <PuckPageRenderer
      path="/about"
      fallback={
        <>
          {/* Hero */}
      <section className="bg-primary-900 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center order-2 lg:order-1">
              <GraduationCap className="w-20 h-20 text-white/30" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-400 text-xs font-medium mb-4">
                <User className="w-3 h-3" />
                Jonas Hostmann
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Über mich
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed">
                Ich bin Jonas, Student und leidenschaftlicher Webdesigner. Während meines Studiums habe ich meine Begeisterung für digitale Medien und Webentwicklung entdeckt. Heute helfe ich kleinen und mittelständischen Unternehmen, sich professionell im Internet zu präsentieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium"
              >
                <badge.icon className="w-4 h-4" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            preTitle="Meine Werte"
            title="Was mich antreibt"
            variant="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-primary-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <value.icon className="w-10 h-10 text-primary-600" />
                <h4 className="text-xl font-semibold text-slate-800">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            preTitle="Werdegang"
            title="Mein Weg"
            variant="center"
          />
          <div className="mt-12 max-w-2xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200" />

            <div className="flex flex-col gap-12">
              {timeline.map((entry, i) => (
                <div key={entry.year} className={`relative flex items-start gap-6 md:gap-0 ${entry.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-[3px] border-white z-10" />
                  
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${entry.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                      <span className="text-xs font-semibold text-primary-600">{entry.year}</span>
                      <h4 className="mt-1 text-lg font-semibold text-slate-800">{entry.title}</h4>
                      <p className="mt-1 text-sm text-slate-500">{entry.description}</p>
                    </div>
                  </div>
                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Lassen Sie uns zusammenarbeiten"
        subtitle="Ich freue mich darauf, Ihr digitales Projekt zum Erfolg zu führen."
        primaryButton={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondaryButton={{ label: "Leistungen entdecken", href: "/leistungen" }}
      />
    </>
      }
    />
  );
}
