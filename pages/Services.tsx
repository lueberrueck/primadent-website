import React from "react";
import { motion } from "framer-motion";
import { Gem, Cpu, Scan, Anchor, Shield, Puzzle } from "lucide-react";
import { Card } from "../components/ui/Card";
import { cn } from "../lib/utils";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    id: "aesthetik",
    title: "Zahnästhetik",
    description: "Vollkeramik-Versorgungen für höchste ästhetische Ansprüche: Kronen, Veneers, Inlays und Onlays mit individueller Farbabstimmung.",
    icon: Gem,
    features: ["Vollkeramik & Zirkon", "Veneers", "Individuelle Farbe", "Smile Design"],
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "cadcam",
    title: "CAD/CAM Fertigung",
    description: "Digitale Präzision: Kronen, Brücken und Konstruktionen passgenau gefräst mit modernster 5-Achs-Technologie.",
    icon: Cpu,
    features: ["Präzisionsfräsung", "3D-Druck", "Digital Design", "Schnelle Lieferung"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "teleskope",
    title: "Teleskope & Doppelkronen",
    description: "Herausnehmbarer Zahnersatz mit präziser Friktion – grazil, passgenau und langlebig durch taktile Scantechnologie.",
    icon: Scan,
    features: ["Taktile Scans", "Perfekte Passung", "Grazile Optik", "Hoher Komfort"],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "implantate",
    title: "Implantatprothetik",
    description: "Individuelle Abutments, verschraubte Brücken und komplexe Versorgungen – digital geplant und präzise umgesetzt.",
    icon: Anchor,
    features: ["Ind. Abutments", "Stegarbeiten", "All-on-4", "Verschraubt"],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "schienen",
    title: "Schienen & Mundschutz",
    description: "Therapeutische und präventive Schienen: Aufbiss, Knirscher, Antischnarch und individueller Sportmundschutz.",
    icon: Shield,
    features: ["Aufbissschienen", "Sportschutz", "Antischnarch", "Funktionsschienen"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "riegel",
    title: "Riegel & Geschiebe",
    description: "Kombinierter Zahnersatz mit verdeckter Verankerung auf natürlichen Pfeilerzähnen – stabil und ästhetisch.",
    icon: Puzzle,
    features: ["Geschiebe", "Riegel", "Kombiarbeiten", "Verdeckte Anker"],
    color: "from-slate-500 to-gray-600",
  },
];

const collageItems = [
  { src: "./Labor1.webp", title: "CAD/CAM Präzisionsarbeit", alt: "Modernes CAD/CAM Labor bei PrimaDent Herford", span: "md:col-span-2 md:row-span-2" },
  { src: "./Zahn.webp", title: "Vollkeramik Zahnersatz", alt: "Hochwertige Vollkeramik Krone vom Dentallabor", span: "md:col-span-1 md:row-span-1" },
  { src: "./Labor2.webp", title: "Digitaler Workflow", alt: "Digitale Zahntechnik Arbeitsplatz", span: "md:col-span-1 md:row-span-1" },
  { src: "./Blumen.webp", title: "Willkommen bei PrimaDent", alt: "PrimaDent Dentallabor Empfangsbereich", span: "md:col-span-1 md:row-span-1" },
  { src: "./Eingang.webp", title: "Unser Standort", alt: "PrimaDent Zahntechnik Eingang Herford", span: "md:col-span-1 md:row-span-1" },
  { src: "./Haus.webp", title: "Ihr Labor in Herford", alt: "PrimaDent Gebäude Schützenstraße Herford", span: "md:col-span-2 md:row-span-1" },
];

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="relative py-28 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-pale/60 via-white to-slate-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-lavender font-bold tracking-wider uppercase text-sm mb-4"
          >
            Dentallabor Herford
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-800 mb-6"
          >
            Leistungen & Zahnersatz
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
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Vollkeramik, Implantate, Teleskope und CAD/CAM-Fertigung – 
            präzise Zahntechnik aus Meisterhand für Praxen in Herford, Bielefeld und OWL.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="h-full flex flex-col p-6 lg:p-8 group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-300" 
                hoverEffect={false}
              >
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                {/* Background Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-pale/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {service.customIcon ? (
                           <div className="w-7 h-7 text-white [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">
                             {service.customIcon}
                           </div>
                        ) : (
                           <service.icon size={28} strokeWidth={1.5} />
                        )}
                    </div>
                    {/* Decorative large icon in background */}
                    {service.customIcon ? (
                       <div className="absolute -top-6 -right-6 text-gray-100 w-28 h-28 -z-10 transform rotate-12 group-hover:rotate-0 group-hover:text-lavender-pale/30 transition-all duration-500 [&>svg]:w-full [&>svg]:h-full">
                         {service.customIcon}
                       </div>
                    ) : (
                       <service.icon className="absolute -top-6 -right-6 text-gray-100 w-28 h-28 -z-10 transform rotate-12 group-hover:rotate-0 group-hover:text-lavender-pale/30 transition-all duration-500" strokeWidth={0.5} />
                    )}
                </div>
                
                <h2 className="text-xl lg:text-2xl font-heading font-bold text-gray-800 mb-2 relative z-10 group-hover:text-lavender-dark transition-colors">
                    {service.title}
                </h2>
                
                <p className="text-gray-600 mb-5 leading-relaxed text-sm lg:text-base relative z-10 flex-grow">
                  {service.description}
                </p>

                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-2.5 py-1 rounded-lg bg-slate-50 text-xs font-medium text-gray-600 border border-slate-100 group-hover:border-lavender-light/50 group-hover:bg-lavender-pale/20 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <a 
                    href="/kontakt" 
                    className="inline-flex items-center text-sm font-medium text-lavender hover:text-lavender-dark transition-colors group/link"
                  >
                    Anfrage stellen
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unified Gallery Section (Collage) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="text-lavender font-bold tracking-wider uppercase text-sm">Einblicke</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mt-2 mb-3">Unser Labor & Arbeiten</h2>
              <p className="text-gray-600 max-w-lg">
                Modernste Ausstattung und handwerkliche Präzision vereint – Impressionen aus unserem Dentallabor in Herford.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
            {collageItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={cn(
                  "relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500",
                  item.span
                )}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-bold text-lg">{item.title}</p>
                    </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender/20 to-lavender-pale/30 rounded-[2rem] transform -rotate-2" />
              <img 
                src="./Labor1.webp" 
                alt="Digitaler Workflow im Dentallabor PrimaDent - CAD/CAM Fertigung" 
                className="relative z-10 rounded-3xl shadow-2xl w-full aspect-square object-cover"
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
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">100% Digital</p>
                    <p className="text-sm text-gray-500">CAD/CAM Workflow</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-lavender font-bold tracking-wider uppercase text-sm">Ihr Vorteil</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mt-2 mb-4">Der digitale Workflow</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Wir arbeiten mit allen gängigen Intraoralscannern zusammen (3Shape, Sirona, Medit). 
                  Senden Sie uns Ihre digitalen Abformungen direkt – für maximale Präzision und schnellere Durchlaufzeiten.
                </p>
              </div>
              
              <div className="space-y-5">
                {[
                  { title: "Intraoralscan", text: "Sie scannen direkt in Ihrer Praxis – kein Abdruckmaterial nötig." },
                  { title: "CAD-Design", text: "Wir konstruieren passgenau im 3D-Programm." },
                  { title: "Präzisionsfertigung", text: "Hochpräzise Fräsung oder 3D-Druck im Labor." },
                  { title: "Meister-Finish", text: "Finale Veredelung und Qualitätskontrolle durch unsere Zahntechnikermeister." },
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-pale to-white border-2 border-lavender text-lavender group-hover:bg-lavender group-hover:text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm">
                        {idx + 1}
                      </div>
                      {idx !== 3 && <div className="w-0.5 flex-1 bg-gradient-to-b from-lavender-light to-transparent my-2"></div>}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-lavender-dark transition-colors">{step.title}</h4>
                      <p className="text-gray-600">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;