import React from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useCookieConsent } from "../../context/CookieContext";

const Footer: React.FC = () => {
  const { resetConsent } = useCookieConsent();

  return (
    <footer className="bg-gray-50 border-t border-lavender-light/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
                <img 
                  src="/logo.webp" 
                  alt="PrimaDent Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-heading font-bold text-gray-600">
                Prima<span className="text-lavender">Dent</span>
                </span>
            </a>
            <p className="text-gray-primary text-sm leading-relaxed">
              Ihr Premium-Partner für hochwertige Zahnprothetik. Wir verbinden handwerkliche Präzision mit modernster digitaler Technologie für das perfekte Lächeln.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-lavender transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lavender transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lavender transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-700 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Startseite", href: "/" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Über Uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-primary hover:text-lavender text-sm transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender-light mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-gray-700 mb-6">Leistungen</h3>
            <ul className="space-y-3">
              {[
                { name: "Kronen & Brücken", href: "/leistungen#kronen" },
                { name: "Implantattechnik", href: "/leistungen#implantate" },
                { name: "Veneers & Ästhetik", href: "/leistungen#aesthetik" },
                { name: "Teleskope & Doppelkronen", href: "/leistungen#teleskope" },
                { name: "Schienen", href: "/leistungen#schienen" },
              ].map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-primary hover:text-lavender text-sm transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-gray-700 mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-primary">
                <MapPin className="w-5 h-5 text-lavender shrink-0 mt-0.5" />
                <span>Schützenstraße 4<br />32049 Herford</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-primary">
                <Phone className="w-5 h-5 text-lavender shrink-0" />
                <a href="tel:+4952215074" className="hover:text-lavender transition-colors">+49 (0) 5221 50742</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-primary">
                <Mail className="w-5 h-5 text-lavender shrink-0" />
                <a href="mailto:info@primadent-zahntechnik.de" className="hover:text-lavender transition-colors">info@primadent-zahntechnik.de</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lavender-light/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} PrimaDent Zahntechnik GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-lavender transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-lavender transition-colors">Datenschutz</a>
            <a href="/agb" className="hover:text-lavender transition-colors">AGB</a>
            <button 
                onClick={resetConsent} 
                className="hover:text-lavender transition-colors text-left focus:outline-none"
                aria-label="Cookie Einstellungen öffnen"
            >
                Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;