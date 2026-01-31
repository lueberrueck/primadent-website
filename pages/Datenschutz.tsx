import React from "react";
import { motion } from "framer-motion";

const Datenschutz: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-lavender-light/30"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-700 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="font-bold mb-2">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="font-bold mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <h3 className="font-bold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                PrimaDent Zahntechnik<br />
                Schützenstraße 4<br />
                32049 Herford<br />
                Telefon: +49 (0) 5221 50742<br />
                E-Mail: info@zahnkunst24.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="font-bold mb-2">Technisch notwendige Daten</h3>
              <p className="mb-4">
                Beim Besuch unserer Website werden automatisch technische Daten (z.B. IP-Adresse, Browser-Typ, Betriebssystem) durch unseren Hosting-Anbieter erfasst. Diese Daten sind für den Betrieb der Website technisch notwendig und werden nach 7 Tagen automatisch gelöscht.
              </p>
              <p className="mb-4">
                Diese Website verwendet keine Tracking-Cookies und setzt keine Analyse-Tools ein. Lediglich für technisch notwendige Funktionen können Session-Cookies verwendet werden, die nach dem Schließen des Browsers automatisch gelöscht werden.
              </p>

              <h3 className="font-bold mb-2">Kontaktanfragen</h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">5. Externe Dienste und 2-Klick-Lösung</h2>
              <h3 className="font-bold mb-2">Google Maps (2-Klick-Lösung)</h3>
              <p className="mb-4">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4">
                <strong>Wir setzen eine datenschutzfreundliche 2-Klick-Lösung ein:</strong> Die Google Maps-Karte wird erst geladen, nachdem Sie aktiv auf den Button „Karte laden" geklickt haben. Erst durch Ihren Klick wird eine Verbindung zu den Servern von Google hergestellt und Daten übertragen. Ohne Ihre aktive Einwilligung werden keine Daten an Google gesendet.
              </p>
              <p className="mb-4">
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
              </p>
              <p className="mb-4">
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Die Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), die Sie durch Klick auf „Karte laden" erteilen.
              </p>
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google unter: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline">https://policies.google.com/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">6. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">7. Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-lavender hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;
