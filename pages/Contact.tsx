import React from "react";
import { MapPin, Phone, Mail, Clock, Lock } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useCookieConsent } from "../context/CookieContext";

const Contact: React.FC = () => {
  const { consent, acceptCookies } = useCookieConsent();

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-700 mb-6">Kontakt</h1>
          <p className="text-gray-primary text-lg leading-relaxed">
            Wir sind persönlich für Sie da. Rufen Sie uns an, schreiben Sie uns eine E-Mail oder besuchen Sie uns in unserem Labor in Herford.
          </p>
        </div>

        {/* Centered Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <Card className="p-8 flex items-start space-x-6 hover:border-lavender transition-all duration-300 group">
              <div className="bg-lavender-pale p-4 rounded-2xl text-lavender shrink-0 group-hover:bg-lavender group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-700 mb-3">Anschrift</h3>
                <p className="text-gray-primary leading-relaxed text-lg">
                  PrimaDent Zahntechnik<br />
                  Schützenstraße 4<br />
                  32049 Herford<br />
                  Deutschland
                </p>
              </div>
            </Card>

            <Card className="p-8 flex items-start space-x-6 hover:border-lavender transition-all duration-300 group">
              <div className="bg-lavender-pale p-4 rounded-2xl text-lavender shrink-0 group-hover:bg-lavender group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-700 mb-3">Telefon & Fax</h3>
                <div className="text-gray-primary leading-relaxed text-lg">
                  <a href="tel:+4930123456" className="hover:text-lavender transition-colors block font-medium mb-1">
                    Tel: +49 (0) 30 123 456
                  </a>
                  <span className="block text-gray-400">
                    Fax: +49 (0) 30 123 457
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex items-start space-x-6 hover:border-lavender transition-all duration-300 group">
              <div className="bg-lavender-pale p-4 rounded-2xl text-lavender shrink-0 group-hover:bg-lavender group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-700 mb-3">E-Mail</h3>
                <div className="text-gray-primary leading-relaxed text-lg">
                  <a href="mailto:info@primadent.de" className="hover:text-lavender transition-colors block mb-1">
                    info@primadent.de
                  </a>
                  <a href="mailto:labor@primadent.de" className="hover:text-lavender transition-colors block text-gray-500 text-base">
                    labor@primadent.de
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 flex items-start space-x-6 hover:border-lavender transition-all duration-300 group">
              <div className="bg-lavender-pale p-4 rounded-2xl text-lavender shrink-0 group-hover:bg-lavender group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-700 mb-3">Öffnungszeiten</h3>
                <div className="text-gray-primary space-y-2 text-lg">
                    <div className="flex justify-between gap-8">
                        <span className="font-medium">Mo - Do:</span> 
                        <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-medium">Fr:</span> 
                        <span>08:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between gap-8 text-gray-400 text-base">
                        <span>Sa - So:</span> 
                        <span>Geschlossen</span>
                    </div>
                </div>
              </div>
            </Card>
        </div>
        
        {/* Map Section with Cookie Consent Logic */}
        <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden h-[450px] bg-gray-200 relative border-4 border-white shadow-2xl transition-all">
                {consent === 'accepted' ? (
                   <iframe 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     loading="lazy" 
                     allowFullScreen 
                     referrerPolicy="no-referrer-when-downgrade"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.9675999649813!2d8.668641076686557!3d52.11444497202099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3d1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSch%C3%BCtzenstra%C3%9Fe%204%2C%2032049%20Herford!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                     title="Google Maps PrimaDent Standort"
                   ></iframe>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 p-6 text-center">
                      <div className="bg-lavender-pale p-4 rounded-full mb-4">
                        <Lock size={32} className="text-lavender" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-700 mb-2">Karte deaktiviert</h3>
                      <p className="max-w-md mb-6 text-gray-primary">
                        Aus Datenschutzgründen (DSGVO) ist Google Maps standardmäßig deaktiviert. 
                        Um die Karte anzuzeigen, stimmen Sie bitte der Nutzung von Cookies zu.
                      </p>
                      <Button onClick={acceptCookies} className="shadow-lg shadow-lavender/20">
                        Karte aktivieren & Cookies akzeptieren
                      </Button>
                      <p className="text-xs text-gray-400 mt-4 max-w-xs">
                        Durch Aktivieren der Karte werden Daten an Google übertragen.
                      </p>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
