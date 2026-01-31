import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users,
  Gem,
  Cpu,
  Truck,
  Palette,
  Handshake,
  Laptop,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import {
  ToothIcon,
  TelescopeIcon,
  ImplantIcon,
  SplintIcon,
  DentureIcon,
} from "../components/icons/DentalIcons";

interface ServiceHighlight {
  id: string;
  title: string;
  desc: string;
  icon?: LucideIcon;
  img: string;
  customIcon?: React.ReactNode;
}

// Component for individual Flip Card to manage state locally
const ServiceFlipCard: React.FC<{ service: ServiceHighlight }> = ({
  service,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="h-80 w-full perspective-1000 group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full transition-all preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-white to-lavender-pale/40 rounded-2xl shadow-lg border border-lavender-light/50 p-6 flex flex-col items-center justify-center text-center backface-hidden z-20 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Decorative Background Icon */}
          {service.customIcon ? (
            <div
              className="absolute -bottom-10 -right-10 w-48 h-48 text-lavender-light/20 rotate-12 transition-transform duration-700 ease-in-out opacity-50 [&>svg]:w-full [&>svg]:h-full"
              style={{
                transform: isFlipped ? "rotate(6deg)" : "rotate(12deg)",
              }}
            >
              {service.customIcon}
            </div>
          ) : (
            service.icon && (
              <service.icon
                strokeWidth={1}
                className={cn(
                  "absolute -bottom-10 -right-10 w-48 h-48 text-lavender-light/20 rotate-12 transition-transform duration-700 ease-in-out",
                  isFlipped && "rotate-6"
                )}
              />
            )
          )}

          {/* Main Content */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <div
              className={cn(
                "w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-lavender mb-6 shadow-lg shadow-lavender/10 transition-transform duration-300 border border-lavender-light/50",
                isFlipped && "scale-110"
              )}
            >
              {service.customIcon ? (
                <div className="w-9 h-9 text-lavender [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">
                  {service.customIcon}
                </div>
              ) : (
                service.icon && <service.icon size={36} strokeWidth={1.5} />
              )}
            </div>

            <h3
              className={cn(
                "text-xl font-bold text-gray-700 mb-3 transition-colors",
                isFlipped && "text-lavender-dark"
              )}
            >
              {service.title}
            </h3>

            <div
              className={cn(
                "w-12 h-1 bg-gradient-to-r from-lavender-light to-lavender rounded-full mb-8 transition-all duration-300",
                isFlipped && "w-20"
              )}
            ></div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full bg-gray-900 rounded-2xl shadow-xl overflow-hidden backface-hidden border border-lavender-light"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-50">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-lavender-dark/95 via-gray-900/80 to-gray-900/60"></div>

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="text-lavender-light mb-4">
              {service.customIcon ? (
                <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">
                  {service.customIcon}
                </div>
              ) : (
                service.icon && <service.icon size={32} />
              )}
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-200 text-sm mb-6 leading-relaxed font-light">
              {service.desc}
            </p>
            <a href="/leistungen" onClick={(e) => e.stopPropagation()}>
              <Button
                size="sm"
                className="bg-white/10 hover:bg-white text-white hover:text-lavender-dark border border-white/20 backdrop-blur-sm rounded-lg"
              >
                Details ansehen
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const serviceHighlights: ServiceHighlight[] = [
    {
      id: "aesthetik",
      title: "Zahnästhetik",
      desc: "Vollkeramik-Versorgungen für ästhetisch anspruchsvolle Fälle: Kronen, Inlays/Onlays, Teilkronen und Veneers – mit individueller Farbinformation, definierter Rand- und Kontaktgestaltung und finalem Qualitätscheck im Meisterlabor (Herford).",
      icon: Gem,
      img: "https://picsum.photos/400/400?random=1",
      customIcon: <ToothIcon />,
    },
    {
      id: "cadcam",
      title: "CAD/CAM",
      desc: "CAD/CAM-basierte Fertigung für reproduzierbare Ergebnisse: Kronen, Brücken und Konstruktionen digital geplant und präzise umgesetzt – ideal für planbare Abläufe, schnelle Abstimmung und sichere Passungskontrollen.",
      icon: Cpu,
      img: "https://picsum.photos/400/400?random=2",
    },
    {
      id: "teleskope",
      title: "Teleskope & Doppelkronen",
      desc: "Teleskope und Doppelkronen mit präziser Datenerfassung und kontrollierter Friktion. Für Kombiarbeiten, bei denen Passung, Grazilität und eine saubere Abstimmung zwischen Praxis und Labor entscheidend sind.",
      icon: Cpu,
      img: "https://picsum.photos/400/400?random=3",
      customIcon: <TelescopeIcon />,
    },
    {
      id: "implantate",
      title: "Implantate",
      desc: "Implantatprothetik nach Fallanforderung: individuelle Abutments, verschraubte Brücken, Stege und komplexe Konzepte. Fokus auf klare Planung, Rückfragen bei kritischen Punkten und dokumentierte Qualitätskontrolle.",
      icon: Cpu,
      img: "https://picsum.photos/400/400?random=4",
      customIcon: <ImplantIcon />,
    },
    {
      id: "schienen",
      title: "Schienen",
      desc: "Aufbiss-, Funktions- und Antischnarchschienen sowie Sportmundschutz – praxistauglich gefertigt mit klarem Workflow (Scan/Abdruck), Materialoptionen und verlässlicher Rückmeldung zu Lieferzeit/Express nach Absprache.",
      icon: Cpu,
      img: "https://picsum.photos/400/400?random=5",
      customIcon: <SplintIcon />,
    },
    {
      id: "riegel",
      title: "Riegel & Geschiebe",
      desc: "Riegel- und Geschiebeverbindungen für kombinierte Versorgungen auf natürlichen Pfeilerzähnen. Stabilität, verdeckte Verankerung und praxissichere Umsetzbarkeit stehen im Fokus – inklusive klarer Fallabstimmung.",
      icon: Cpu,
      img: "https://picsum.photos/400/400?random=6",
      customIcon: <DentureIcon />,
    },
  ];

  // Images for the homepage collage
  const collageImages = [
    {
      src: "./Blumen.webp",
      alt: "Logo und Blumen im Eingang des Labors",
      span: "md:col-span-2 md:row-span-2",
      title: "",
    },
    {
      src: "./Labor1.webp",
      alt: "Laboransicht 1",
      span: "md:col-span-1 md:row-span-1",
      title: "Laborseite 1",
    },
    {
      src: "./Labor2.webp",
      alt: "Laboransicht 2",
      span: "md:col-span-1 md:row-span-1",
      title: "Labor 2",
    },
    {
      src: "./Eingang.webp",
      alt: "Eingangsbereich Labor",
      span: "md:col-span-2 md:row-span-1",
      title: "Eingang",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-lavender-pale/30">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(147,112,219,0.08)_0%,transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(208,208,234,0.15)_0%,transparent_50%)]" />
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239370DB' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-20 h-20 bg-lavender-pale/50 rounded-full blur-xl z-0"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[10%] w-32 h-32 bg-lavender-light/30 rounded-full blur-2xl z-0"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-lavender/10 border border-lavender-light/50 text-lavender font-medium text-sm"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Ihr Meisterlabor in Herford & OWL
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-gray-800 leading-[1.1]"
              >
                Präzision, die man{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-lavender-dark to-lavender">
                    fühlen
                  </span>
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <motion.path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#underline-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#9370DB" />
                        <stop offset="100%" stopColor="#7B68EE" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>{" "}
                kann.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
              >
                Digitale Zahntechnik aus Meisterhand. Wir fertigen 
                Vollkeramik, Implantate, Teleskope und Schienen – 
                mit CAD/CAM-Präzision und persönlicher Betreuung.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a href="/kontakt">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto shadow-xl shadow-lavender/30 text-base px-8"
                  >
                    Jetzt Kontakt aufnehmen
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
                <a href="/leistungen">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base px-8 border-2"
                  >
                    Leistungen entdecken
                  </Button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lavender-pale flex items-center justify-center">
                    <Award className="w-6 h-6 text-lavender" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">20+ Jahre</p>
                    <p className="text-sm text-gray-500">Erfahrung</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lavender-pale flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-lavender" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">CAD/CAM</p>
                    <p className="text-sm text-gray-500">Präzision</p>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lavender-pale flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-lavender" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">100%</p>
                    <p className="text-sm text-gray-500">Made in Germany</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Background decorative shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-lavender/20 to-lavender-pale/40 rounded-[2.5rem] transform rotate-3" />
                
                {/* Main Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-lavender/20">
                  <img
                    src="./Labor1.webp"
                    alt="Modernes Zahnlabor mit CAD/CAM Technologie"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Card - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-6 -right-6 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white rounded-2xl p-4 shadow-xl shadow-gray-900/10 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-lavender to-lavender-dark rounded-xl flex items-center justify-center">
                        <Gem className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">Vollkeramik</p>
                        <p className="text-xs text-gray-500">Höchste Ästhetik</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-8 -left-8 z-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-900/10 border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-lavender-pale rounded-full flex items-center justify-center">
                          <Users className="w-7 h-7 text-lavender" />
                        </div>
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Meisterteam</p>
                        <p className="text-sm text-gray-500">Persönliche Betreuung</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Small Image - Overlapping */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-12 -left-16 w-40 h-40 z-30"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img
                      src="./Blumen.webp"
                      alt="PrimaDent Eingangsbereich"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lavender/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, label: "Partnerpraxen", value: "B2B", color: "from-violet-500 to-purple-600" },
              { icon: Cpu, label: "Digitaler Workflow", value: "CAD/CAM", color: "from-blue-500 to-cyan-500" },
              { icon: Award, label: "Erfahrung", value: "20+ Jahre", color: "from-amber-500 to-orange-500" },
              { icon: CheckCircle2, label: "Express/Abholung", value: "flexibel", color: "from-emerald-500 to-teal-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-900/5 border border-gray-100 hover:shadow-xl hover:border-lavender-light/50 transition-all duration-300 text-center h-full">
                  {/* Gradient Icon Background */}
                  <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <stat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (3D Flip Cards) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-lavender/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender-pale/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-lavender font-bold tracking-wider uppercase text-sm mb-3"
            >
              Unsere Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6"
            >
              Leistungsspektrum
            </motion.h2>
            {/* Animated Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-lavender-light via-lavender to-lavender-dark rounded-full mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Ihr Zahnlabor in Herford – wo Perfektion Alltag ist. 
              Wenn Sie Ihren Zahnersatz nicht fühlen können, haben wir unser Ziel erreicht.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service) => (
              <ServiceFlipCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/leistungen">
              <Button
                variant="outline"
                className="border-lavender text-lavender hover:bg-lavender hover:text-white px-10 py-6 h-auto text-lg rounded-full shadow-lg shadow-lavender/10"
              >
                Alle Leistungen ansehen
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Einblicke Collage Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lavender font-bold tracking-wider uppercase text-sm"
              >
                Unser Labor
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mt-3 mb-4"
              >
                Einblicke ins Labor
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 max-w-lg"
              >
                Moderne Ausstattung trifft auf handwerkliche Präzision – willkommen in der Schützenstraße 4.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <a href="/ueber-uns">
                <Button
                  variant="outline"
                  className="text-lavender border-lavender hover:bg-lavender hover:text-white group"
                >
                  Mehr erfahren
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Bento Grid Collage */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {collageImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500",
                  item.span,
                  "min-h-[250px] md:min-h-0"
                )}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Info & Added Value Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lavender font-bold tracking-wider uppercase text-sm"
            >
              Warum PrimaDent?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-gray-700 mt-3 mb-6"
            >
              Service & Mehrwert in Herford
            </motion.h2>
            <p className="text-gray-primary text-lg">
              Enge Zusammenarbeit im Trialog: Zahnärzt:innen, Patient:innen und
              wir als Ihr zahntechnisches Labor. Von der Beratung über die
              Fertigung bis zur Nachbetreuung – für das bestmögliche Ergebnis
              und Ihr strahlendes Lächeln!
            </p>
          </div>

          {/* 3-Column Grid layout with Center Image */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 bg-white p-5 rounded-2xl border border-lavender-light/30 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 bg-lavender-pale rounded-xl flex items-center justify-center text-lavender shadow-sm group-hover:scale-110 transition-transform">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Zuverlässiger Botendienst
                  </h3>
                  <p className="text-gray-primary text-sm leading-relaxed">
                      Wir stimmen Übergabe, Abholung und Express pragmatisch mit Ihrer Praxis ab – damit Termine planbar bleiben und Fälle sicher ankommen.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-5 bg-white p-5 rounded-2xl border border-lavender-light/30 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 bg-lavender-pale rounded-xl flex items-center justify-center text-lavender shadow-sm group-hover:scale-110 transition-transform">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Modernste Software
                  </h3>
                  <p className="text-gray-primary text-sm leading-relaxed">
                    Effiziente Verwaltung dank <strong>Datext Software</strong>.
                    Digitale Transparenz und Schnelligkeit für reibungslose
                    Abläufe.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full min-h-[400px] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
            >
              <img
                src="./Haus.webp"
                alt="PrimaDent Service Quality"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-dark/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-heading font-bold text-xl">
                    Ihr Labor vor Ort
                  </p>
                  <p className="text-sm opacity-90">
                    Persönlich. Nah. Kompetent.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 bg-white p-5 rounded-2xl border border-lavender-light/30 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 bg-lavender-pale rounded-xl flex items-center justify-center text-lavender shadow-sm group-hover:scale-110 transition-transform">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Individuelle Zahnfarbe
                  </h3>
                  <p className="text-gray-primary text-sm leading-relaxed">
                    Präzise Farbanalyse direkt in Ihrer Praxis oder in unserem
                    Labor in der Schützenstraße 4 für ein harmonisches
                    Gesamtbild.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-5 bg-white p-5 rounded-2xl border border-lavender-light/30 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 bg-lavender-pale rounded-xl flex items-center justify-center text-lavender shadow-sm group-hover:scale-110 transition-transform">
                  <Handshake size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-700 mb-2">
                    Starkes Teamwork
                  </h3>
                  <p className="text-gray-primary text-sm leading-relaxed">
                    Wir leben den Trialog:{" "}
                    <strong>Zahnarzt, Patient & Labor</strong>. Von der Beratung
                    bis zur Fertigung – wir sind Ihr Partner.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Team Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-lavender-pale rounded-full opacity-50 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-lavender-light/30 rounded-full opacity-50 blur-3xl z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
                {/* Large Team Image */}
                <img
                  src="/Team.webp"
                  alt="Das PrimaDent Team"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 text-white z-20">
                  <p className="font-heading font-bold text-xl">
                    Ein Team. Eine Vision.
                  </p>
                </div>
              </div>

              {/* Decorative Square behind */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-lavender rounded-3xl z-0 hidden md:block"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-pale text-lavender text-sm font-semibold">
                <Users size={14} />
                <span>Über PrimaDent</span>
              </div>

              <h2 className="text-4xl font-heading font-bold text-gray-700 leading-tight">
                Das Team hinter der{" "}
                <span className="text-lavender">Perfektion</span>
              </h2>

              <p className="text-lg text-gray-primary leading-relaxed">
                Moderne Technologie ist nur so gut wie die Menschen, die sie
                bedienen. Bei PrimaDent arbeiten erfahrene Zahntechnikermeister
                Hand in Hand mit CAD/CAM-Spezialisten.
              </p>

              <p className="text-gray-primary leading-relaxed">
                Wir sind ein eingespieltes, <strong>reines Team</strong> mit langjähriger Erfahrung und Ausbildungsauftrag.
                Wir verstehen uns nicht nur als
                Lieferant, sondern als Partner an Ihrer Seite – immer
                persönlich, immer verlässlich.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-lavender-pale to-white p-4 rounded-2xl border border-lavender-light/30"
                >
                  <span className="text-3xl font-bold text-lavender-dark">Meister</span>
                  <span className="block text-sm text-gray-500 font-medium mt-1">Endkontrolle & Verantwortung</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-lavender-pale to-white p-4 rounded-2xl border border-lavender-light/30"
                >
                  <span className="text-3xl font-bold text-lavender-dark">CAD/CAM</span>
                  <span className="block text-sm text-gray-500 font-medium mt-1">Digitaler Workflow</span>
                </motion.div>
              </div>

              <div className="pt-6">
                <a href="/ueber-uns">
                  <Button className="shadow-lg shadow-lavender/20 group">
                    Unser Team kennenlernen{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0">
          {/* Animated Glow Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl"
          />
          {/* Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-lavender-light text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Jetzt anfragen
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Bereit für{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-light via-white to-lavender-light">
                reibungslose
              </span>{" "}
              Zusammenarbeit?
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Ob Neupartner, Express-Fall oder Digital-Workflow: Sagen Sie uns kurz Leistung und Terminfenster. 
              Wir melden uns mit dem nächsten Schritt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl shadow-white/20 text-base px-8 group"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+4952218799670">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                >
                  05221 879 967 0
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
