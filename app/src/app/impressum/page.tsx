import type { Metadata } from "next";
import PuckPageRenderer from "@/components/PuckPageRenderer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Hostmann Media. Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <PuckPageRenderer
      path="/impressum"
      fallback={
        <section className="bg-white pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-[720px] mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Impressum
        </h1>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-base text-slate-600 leading-[1.8]">
              <p>Jonas Hostmann</p>
              <p>Hostmann Media</p>
              <p>[Straße]</p>
              <p>[PLZ Ort]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Kontakt</h2>
            <div className="text-base text-slate-600 leading-[1.8]">
              <p>Telefon: [Telefonnummer]</p>
              <p>E-Mail: jonas@hostmann-media.de</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Umsatzsteuer-ID</h2>
            <div className="text-base text-slate-600 leading-[1.8]">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>[USt-IdNr.]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-base text-slate-600 leading-[1.8]">
              <p>Jonas Hostmann</p>
              <p>[Straße]</p>
              <p>[PLZ Ort]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Haftung für Inhalte</h2>
            <p className="text-base text-slate-600 leading-[1.8]">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">EU-Streitschlichtung</h2>
            <p className="text-base text-slate-600 leading-[1.8]">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        </div>
      </div>
    </section>
      }
    />
  );
}
