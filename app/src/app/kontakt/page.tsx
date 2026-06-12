import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, User, ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTA";
import PuckPageRenderer from "@/components/PuckPageRenderer";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Jonas Hostmann von Hostmann Media für Webdesign, SEO und digitales Marketing. Kostenlose Erstberatung.",
};

const contactCards = [
  { icon: Mail, label: "E-Mail", value: "jonas@hostmann-media.de" },
  { icon: Phone, label: "Telefon", value: "[Telefonnummer]" },
  { icon: MapPin, label: "Standort", value: "[PLZ Ort]" },
  { icon: Clock, label: "Erreichbarkeit", value: "Mo–Fr, 09:00–18:00 Uhr" },
];

const faqs = [
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Je nach Umfang dauert ein typisches Webdesign-Projekt zwischen 2 und 6 Wochen. Nach einem ausführlichen Gespräch erstelle ich Ihnen einen realistischen Zeitplan.",
  },
  {
    question: "Was kostet eine neue Website?",
    answer: "Die Kosten hängen vom Umfang und den Funktionen ab. Ich biete transparente Festpreise an — versteckte Kosten gibt es bei mir nicht. Kontaktieren Sie mich für ein unverbindliches Angebot.",
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer: "Ja! Nach dem Launch stehe ich Ihnen für Updates, Erweiterungen und technischen Support zur Verfügung. So bleibt Ihre Website stets aktuell und sicher.",
  },
];

export default function KontaktPage() {
  return (
    <PuckPageRenderer
      path="/kontakt"
      fallback={
        <>
          {/* Hero */}
      <section className="relative bg-primary-900 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary-500/15 blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-400 text-xs font-medium mb-4">
            <Mail className="w-3 h-3" />
            Kontakt
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Kontakt
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/75 max-w-[560px] mx-auto">
            Haben Sie Fragen oder ein Projekt im Sinn? Schreiben Sie mir — ich antworte innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-primary-600">
                Schreiben Sie mir
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                Lassen Sie uns Ihr Projekt besprechen
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                Egal ob Neugier, konkretes Projekt oder nur ein erster Austausch — ich freue mich auf jede Nachricht. Gemeinsam finden wir die beste Lösung für Ihre digitale Präsenz.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                {contactCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{card.label}</p>
                      <p className="text-sm text-slate-500">{card.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Placeholder */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">Folgen Sie mir</p>
                <div className="flex gap-3">
                  {/* LinkedIn */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  {/* Instagram */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  {/* X / Twitter */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
              <h3 className="text-2xl font-bold text-slate-800">Kontaktformular</h3>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                Füllen Sie das Formular aus und ich melde mich bei Ihnen.
              </p>
              <ContactForm fullWidthButton />
              <p className="mt-4 text-xs text-slate-400">
                Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-primary-600 hover:underline">Datenschutzerklärung</a> zu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-slate-100 rounded-2xl mx-4 md:mx-6 lg:mx-auto max-w-[1200px] h-[300px] flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-lg font-semibold text-slate-500">[PLZ Ort]</p>
          <p className="text-sm text-slate-400 mt-1">Standort von Hostmann Media</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            preTitle="FAQ"
            title="Häufige Fragen"
            variant="center"
          />
          <div className="mt-8 max-w-2xl mx-auto flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-xl px-6 py-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-base font-semibold text-slate-800">{faq.question}</h4>
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Noch Fragen?"
        subtitle="Ich bin für Sie da. Schreiben Sie mir einfach."
        primaryButton={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
        secondaryButton={{ label: "Leistungen entdecken", href: "/leistungen" }}
      />
    </>
      }
    />
  );
}
