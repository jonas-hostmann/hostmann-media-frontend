import type { Metadata } from "next";
import PuckPageRenderer from "@/components/PuckPageRenderer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Hostmann Media. Informationen über den Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <PuckPageRenderer
      path="/datenschutz"
      fallback={
        <section className="bg-white pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-[720px] mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Datenschutzerklärung
        </h1>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Verantwortliche Stelle</h2>
            <div className="text-base text-slate-600 leading-[1.8]">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <br />
              <p>Jonas Hostmann</p>
              <p>Hostmann Media</p>
              <p>[Straße]</p>
              <p>[PLZ Ort]</p>
              <br />
              <p>Telefon: [Telefonnummer]</p>
              <p>E-Mail: jonas@hostmann-media.de</p>
              <br />
              <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Hosting</h2>
            <p className="text-base text-slate-600 leading-[1.8]">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Externes Hosting</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Dieses Angebot nutzt den Hosting-Dienst der folgenden Anbieter:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-500">[Hosting-Anbieter]</p>
              <p className="text-sm text-slate-500">[Adresse des Hosters]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Datenschutz</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Speicherdauer</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Wir verarbeiten und speichern Ihre personenbezogenen Daten nur für den Zeitraum, der zur Erfüllung des Speicherungszwecks erforderlich ist oder sofern dies durch gesetzliche Vorgaben vorgesehen wurde.
            </p>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Ihre Rechte</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
            <ul className="mt-4 ml-4 flex flex-col gap-2 list-disc list-inside">
              <li className="text-base text-slate-600">Recht auf Auskunft</li>
              <li className="text-base text-slate-600">Recht auf Berichtigung</li>
              <li className="text-base text-slate-600">Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;)</li>
              <li className="text-base text-slate-600">Recht auf Einschränkung der Verarbeitung</li>
              <li className="text-base text-slate-600">Recht auf Datenübertragbarkeit</li>
              <li className="text-base text-slate-600">Widerspruchsrecht</li>
              <li className="text-base text-slate-600">Widerruf einer Einwilligung</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Kontaktformular</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Anfrage per E-Mail oder Telefon</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Cookies</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Plugins und Tools</h2>
            <h3 className="text-lg font-semibold text-slate-700 mt-6 mb-3">Google Fonts</h3>
            <p className="text-base text-slate-600 leading-[1.8]">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-base text-slate-600 leading-[1.8]">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt die neue Datenschutzerklärung.
            </p>
            <p className="text-sm text-slate-400 mt-4">Stand: Juni 2026</p>
          </div>
        </div>
      </div>
    </section>
      }
    />
  );
}
