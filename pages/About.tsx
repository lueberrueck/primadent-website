import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Award, Users, Cpu, CheckCircle2, Heart, Sparkles } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-pale/60 via-white to-slate-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-lavender font-bold tracking-wider uppercase text-sm mb-4"
          >
            Über uns
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mb-6"
          >
            Tradition trifft Innovation
          </motion.h1>
          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-lavender-light via-lavender to-lavender-dark rounded-full mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Seit über 20 Jahren steht PrimaDent für zahntechnische Präzision in Herford. 
            Unser Meisterteam vereint handwerkliche Expertise mit modernster CAD/CAM-Technologie.
          </motion.p>
        </div>
      </section>

      {/* Team Overview Section - ohne Einzelbilder */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender/20 to-lavender-pale/30 rounded-[2rem] transform rotate-2" />
              <img 
                src="/Blumen.webp" 
                alt="PrimaDent Zahntechnik Team - Meisterlabor Herford" 
                className="relative z-10 rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-lavender to-lavender-dark rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Meister & Spezialisten</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-lavender font-bold tracking-wider uppercase text-sm">Unser Team</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
                Erfahrung & Leidenschaft
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wir sind ein eingespieltes <strong>Team</strong> mit langjähriger Erfahrung 
                und Ausbildungsauftrag. Unsere Zahntechnikermeister kontrollieren jede Arbeit 
                persönlich vor der Auslieferung.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bei PrimaDent arbeiten erfahrene Spezialisten Hand in Hand – von der 
                CAD/CAM-Konstruktion bis zur finalen Veredelung. Wir verstehen uns nicht nur 
                als Lieferant, sondern als Partner an Ihrer Seite.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-2xl border border-lavender-light/30 shadow-sm"
                >
                  <span className="text-3xl font-bold text-lavender-dark">20+</span>
                  <span className="block text-sm text-gray-500 font-medium mt-1">Jahre Erfahrung</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-4 rounded-2xl border border-lavender-light/30 shadow-sm"
                >
                  <span className="text-3xl font-bold text-lavender-dark">100%</span>
                  <span className="block text-sm text-gray-500 font-medium mt-1">Made in Germany</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lavender font-bold tracking-wider uppercase text-sm"
            >
              Unsere Werte
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mt-3 mb-4"
            >
              Was uns auszeichnet
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Leidenschaft", desc: "Jeder Zahnersatz ist ein Unikat. Wir nehmen uns Zeit für individuelle Lösungen, die sich perfekt einfügen.", color: "from-rose-500 to-pink-600" },
              { icon: Award, title: "Qualität", desc: "Nur CE-zertifizierte Materialien, Meisterendkontrolle und 100% Fertigung in Deutschland.", color: "from-amber-500 to-orange-500" },
              { icon: Sparkles, title: "Präzision", desc: "Modernste CAD/CAM-Technologie kombiniert mit handwerklicher Veredelung durch unser Expertenteam.", color: "from-violet-500 to-purple-600" },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-lavender">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Quality Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-white border-l-4 border-l-lavender hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Unsere Philosophie</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Jeder Zahnersatz ist ein Unikat, so wie jeder Patient einzigartig ist. 
                  Wir nehmen uns die Zeit, individuelle Lösungen zu entwickeln, die sich 
                  harmonisch in das Gesamtbild einfügen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Qualität ist für uns kein Zufall, sondern das Ergebnis von Fachwissen, 
                  hochwertigen Materialien und Leidenschaft für das Detail.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-white border-l-4 border-l-lavender hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Qualitätsversprechen</h3>
                <ul className="space-y-3">
                  {[
                    "Ausschließlich CE-zertifizierte Materialien",
                    "100% Fertigung in unserem Labor in Herford",
                    "Ständige Fortbildung unseres Meisterteams",
                    "Garantie auf festsitzenden Zahnersatz",
                    "Enger Austausch mit den behandelnden Praxen"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-lavender mt-0.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-lavender font-bold tracking-wider uppercase text-sm">Standort</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
                Ihr Labor vor Ort in Herford
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                In der Schützenstraße 4 in Herford fertigen wir Zahnersatz für Praxen 
                in ganz OWL – von Bielefeld bis Minden. Persönliche Beratung und 
                kurze Wege sind für uns selbstverständlich.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Persönliche Farbnahme möglich
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Botendienst nach Absprache
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="./Haus.webp" 
                alt="PrimaDent Gebäude Schützenstraße 4 Herford" 
                className="rounded-3xl shadow-xl w-full aspect-video object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;