import React from "react";
import { motion } from "framer-motion";

const AGB: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-lavender-light/30"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-700 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="space-y-8 text-gray-primary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 1 Geltungsbereich</h2>
              <p>
                Für die Geschäftsbeziehung zwischen PrimaDent Zahntechnik (nachfolgend „Auftragnehmer“) und dem Auftraggeber (Zahnarzt/Praxis) gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 2 Vertragsabschluss</h2>
              <p>
                Der Vertrag kommt durch die Übergabe von Arbeitsunterlagen (Abformungen, Modelle, digitale Datensätze) und den damit verbundenen Auftrag zur Herstellung von zahntechnischen Werkstücken zustande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
              <p className="mb-2">
                1. Es gelten die zum Zeitpunkt des Auftragseingangs gültigen Preislisten des Auftragnehmers zzgl. der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="mb-2">
                2. Kostenvoranschläge sind freibleibend. Eine Überschreitung um bis zu 10 % gilt als genehmigt.
              </p>
              <p>
                3. Rechnungen sind sofort nach Erhalt ohne Abzug zahlbar, sofern nicht anders vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 4 Lieferzeit und Versand</h2>
              <p>
                Liefertermine werden nach bestem Ermessen angegeben. Bei Lieferverzögerungen durch höhere Gewalt oder Betriebsstörungen verlängert sich die Lieferfrist angemessen. Der Versand erfolgt auf Gefahr des Auftraggebers, auch bei Nutzung unseres Botendienstes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 5 Gewährleistung</h2>
              <p className="mb-2">
                1. Der Auftraggeber hat die Arbeiten sofort nach Empfang auf Richtigkeit und Passgenauigkeit zu prüfen. Mängel sind unverzüglich, spätestens jedoch innerhalb von 10 Werktagen nach Empfang, schriftlich anzuzeigen.
              </p>
              <p>
                2. Bei berechtigten Mängeln hat der Auftragnehmer das Recht auf Nachbesserung oder Ersatzlieferung. Schlägt die Nachbesserung fehl, kann der Auftraggeber Minderung oder Wandelung verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 6 Haftung</h2>
              <p>
                Der Auftragnehmer haftet nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen. Für Schäden, die durch fehlerhafte Modelle oder Abformungen des Auftraggebers entstehen, wird keine Haftung übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 7 Eigentumsvorbehalt</h2>
              <p>
                Die gelieferten Werkstücke bleiben bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung Eigentum des Auftragnehmers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">§ 8 Gerichtsstand</h2>
              <p>
                Erfüllungsort und Gerichtsstand ist Herford, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AGB;