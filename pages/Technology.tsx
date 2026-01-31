import React from "react";
import { motion } from "framer-motion";
import { Cpu, Printer, Scan, Monitor } from "lucide-react";
import { Card } from "../components/ui/Card";

const Technology: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden bg-gray-900 text-white h-[60vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/800?grayscale')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          
          <div className="relative z-10 text-center max-w-3xl px-4">
            <span className="inline-block py-1 px-3 rounded-full bg-lavender/20 border border-lavender/50 text-lavender-light text-sm font-medium mb-6 backdrop-blur-md">
              High-Tech Zahnmedizin
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Zukunft <span className="text-lavender">gestalten</span>
            </h1>
            <p className="text-xl text-gray-300">
              Unser Labor ist mit den modernsten CAD/CAM-Systemen ausgestattet, um höchste Präzision bis ins Mikrometer zu gewährleisten.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-bold text-gray-700">Präzision durch Innovation</h2>
            <p className="text-gray-primary leading-relaxed">
              Die Digitalisierung hat die Zahntechnik revolutioniert. Wir setzen konsequent auf digitale Workflows, ohne das handwerkliche Können zu vernachlässigen. Unsere Ausstattung umfasst modernste 5-Achs-Fräsmaschinen, 3D-Drucker der neuesten Generation und High-End Scanner.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-lavender-pale/30 rounded-xl border border-lavender-light">
                <p className="text-3xl font-bold text-lavender">5µm</p>
                <p className="text-sm text-gray-600">Fräspräzision</p>
              </div>
              <div className="p-4 bg-lavender-pale/30 rounded-xl border border-lavender-light">
                <p className="text-3xl font-bold text-lavender">100%</p>
                <p className="text-sm text-gray-600">Digital Ready</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/400/500?random=10" alt="Milling machine" className="rounded-2xl shadow-lg mt-12 w-full h-auto object-cover" />
            <img src="https://picsum.photos/400/500?random=11" alt="3D Printing" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>

        {/* Tech Stack */}
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Unsere Technologie</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Scan, title: "High-End Scanner", desc: "Streifenlichtscanner für maximale Detailgenauigkeit bei der Modell-Digitalisierung." },
            { icon: Monitor, title: "CAD Design", desc: "Exocad und 3Shape Software für komplexe Konstruktionen und Implantatplanung." },
            { icon: Cpu, title: "CAM Fräsung", desc: "Industrielle 5-Achs-Fräsmaschinen für Zirkon, Metall und Kunststoffe." },
            { icon: Printer, title: "3D Druck", desc: "DLP-Druckverfahren für Modelle, Schienen und Bohrschablonen." },
          ].map((item, i) => (
            <Card key={i} className="text-center p-8 hover:border-lavender transition-colors">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-lavender mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-primary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;