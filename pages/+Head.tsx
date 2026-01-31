// Globale Head-Komponente für alle Seiten (Default-Werte)
import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { DEFAULT_SEO, BUSINESS_INFO } from '../config/seo';
import { pageSeo } from '../config/page-seo';
import { LocalBusinessJsonLd } from '../components/seo/LocalBusinessJsonLd';

export default function Head() {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  
  // Hole SEO-Daten für aktuelle Seite
  const seoData = pageSeo[pathname as keyof typeof pageSeo] || {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description
  };

  const pageTitle = seoData.title;
  const pageDescription = seoData.description;
  const pageCanonical = `${BUSINESS_INFO.url}${pathname}`;
  const pageOgImage = DEFAULT_SEO.ogImage;

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={DEFAULT_SEO.keywords} />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Theme Color für Browser */}
      <meta name="theme-color" content="#9371dc" />
      <meta name="msapplication-TileColor" content="#9371dc" />
      
      {/* Geo Tags für lokale Suche */}
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Herford" />
      <meta name="geo.position" content="52.1145;8.6725" />
      <meta name="ICBM" content="52.1145, 8.6725" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageCanonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      
      {/* Structured Data */}
      <LocalBusinessJsonLd />
    </>
  );
}
