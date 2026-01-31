// Zentrale SEO- und Business-Konfiguration für PrimaDent Zahntechnik
export const BUSINESS_INFO = {
  name: 'PrimaDent Zahntechnik',
  legalName: 'PrimaDent Zahntechnik GmbH',
  url: 'https://www.primadent-zahntechnik.de',
  telephone: '+49 5221 50742',
  email: 'info@primadent-zahntechnik.de',
  address: {
    streetAddress: 'Schützenstraße 4',
    postalCode: '32049',
    addressLocality: 'Herford',
    addressCountry: 'DE'
  },
  openingHours: 'Mo, Di, Do 08:00-17:30, Mi, Fr 08:00-12:00',
  geo: {
    latitude: 52.1145,
    longitude: 8.6725
  },
  logo: '/logo.webp',
  image: '/og-image.webp'
} as const;

// Default SEO Werte
export const DEFAULT_SEO = {
  title: 'PrimaDent Zahntechnik - Präzision & Qualität aus Meisterhand',
  description: 'Modernes Dentallabor in Herford: Zahnersatz, Implantate, Kronen & Brücken. Höchste Qualität, digitale Fertigung und individuelle Beratung für Zahnarztpraxen.',
  keywords: 'Zahntechnik, Dentallabor, Zahnersatz, Implantate, Kronen, Brücken, Herford, CAD/CAM, Veneers, Inlays, Onlays',
  ogImage: `${BUSINESS_INFO.url}/og-image.webp`
} as const;
