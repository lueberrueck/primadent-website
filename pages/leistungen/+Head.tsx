// SEO Head für Leistungen-Seite
export { Head };

function Head() {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>Zahnersatz & Leistungen - Kronen, Implantate, Vollkeramik | PrimaDent Herford</title>
      <meta 
        name="description" 
        content="Hochwertiger Zahnersatz aus dem Dentallabor PrimaDent Herford: Vollkeramik-Kronen, Implantate, Veneers, Teleskope, CAD/CAM-Fertigung. Präzision für Zahnarztpraxen in OWL." 
      />
      
      {/* Canonical */}
      <link rel="canonical" href="https://www.primadent-zahntechnik.de/leistungen" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zahnersatz & Leistungen | PrimaDent Dentallabor Herford" />
      <meta property="og:description" content="Vollkeramik, Implantate, Teleskope, Veneers und CAD/CAM-Zahnersatz. Höchste Qualität aus dem Meisterlabor für Praxen in Herford, Bielefeld & OWL." />
      <meta property="og:url" content="https://www.primadent-zahntechnik.de/leistungen" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.primadent-zahntechnik.de/og-image.webp" />
      
      {/* Keywords für Suchmaschinen (sekundär) */}
      <meta 
        name="keywords" 
        content="Zahnersatz Herford, Dentallabor OWL, Vollkeramik Kronen, Zirkon Brücken, Implantate, Veneers, CAD/CAM Zahntechnik, Teleskopprothese, Inlays Onlays, Zahntechniker Meister, Bielefeld" 
      />
      
      {/* Structured Data - Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Dental Laboratory Services",
          "name": "Zahntechnische Leistungen",
          "provider": {
            "@type": "LocalBusiness",
            "name": "PrimaDent Zahntechnik",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Schützenstraße 4",
              "addressLocality": "Herford",
              "postalCode": "32052",
              "addressCountry": "DE"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Herford" },
            { "@type": "City", "name": "Bielefeld" },
            { "@type": "State", "name": "Ostwestfalen-Lippe" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Zahntechnische Leistungen",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Vollkeramik Zahnersatz",
                  "description": "Kronen, Brücken, Inlays, Onlays und Veneers aus hochwertiger Vollkeramik"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Implantatprothetik",
                  "description": "Individuelle Abutments, verschraubte Brücken und Stegkonstruktionen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "CAD/CAM Fertigung",
                  "description": "Digitale Konstruktion und Präzisionsfräsung von Zahnersatz"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teleskopprothesen",
                  "description": "Herausnehmbarer Zahnersatz mit Teleskopkronen und Doppelkronen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Schienen",
                  "description": "Aufbissschienen, Funktionsschienen und Sportmundschutz"
                }
              }
            ]
          }
        })}
      </script>
    </>
  );
}
