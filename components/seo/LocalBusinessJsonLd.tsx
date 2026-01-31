// JSON-LD Structured Data für LocalBusiness (Schema.org)
import React from 'react';
import { BUSINESS_INFO } from '../../config/seo';

export const LocalBusinessJsonLd: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    logo: `${BUSINESS_INFO.url}${BUSINESS_INFO.logo}`,
    image: `${BUSINESS_INFO.url}${BUSINESS_INFO.image}`,
    priceRange: '$$',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Invoice',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude
      },
      geoRadius: '50000'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressRegion: 'Nordrhein-Westfalen',
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Thursday'],
        opens: '08:00',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Friday'],
        opens: '08:00',
        closes: '12:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Zahntechnische Leistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kronen und Brücken',
            description: 'Hochwertige Vollkeramik- und Zirkon-Versorgungen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Implantatprothetik',
            description: 'Individuelle Abutments, verschraubte Brücken und Stege'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CAD/CAM Fertigung',
            description: 'Digitale Planung und präzise Umsetzung'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Veneers',
            description: 'Ästhetische Verblendschalen für das perfekte Lächeln'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Schienen',
            description: 'Aufbiss-, Funktions- und Antischnarchschienen'
          }
        }
      ]
    },
    sameAs: [
      // Social Media Links können hier ergänzt werden
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
};
