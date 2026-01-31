// SEO Head für Über-Uns-Seite
export { Head };

function Head() {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>Über Uns - Meisterlabor für Zahntechnik in Herford | PrimaDent</title>
      <meta 
        name="description" 
        content="Lernen Sie PrimaDent kennen: Erfahrenes Meisterteam, 20+ Jahre Expertise, 100% Made in Germany. Ihr Dentallabor für präzisen Zahnersatz in Herford & OWL." 
      />
      
      {/* Canonical */}
      <link rel="canonical" href="https://www.primadent-zahntechnik.de/ueber-uns" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Über Uns - PrimaDent Meisterlabor Herford" />
      <meta property="og:description" content="Erfahrenes Zahntechniker-Team mit Meisterqualifikation. CAD/CAM-Technologie und handwerkliche Präzision für Praxen in OWL." />
      <meta property="og:url" content="https://www.primadent-zahntechnik.de/ueber-uns" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.primadent-zahntechnik.de/og-image.webp" />
      
      {/* Keywords */}
      <meta 
        name="keywords" 
        content="Zahntechniker Herford, Meisterlabor OWL, Dentallabor Team, Zahntechnikermeister, PrimaDent Team, Zahntechnik Bielefeld" 
      />
    </>
  );
}
