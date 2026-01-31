// Vite Plugin: Automatische Generierung von sitemap.xml und robots.txt
import type { Plugin } from 'vite';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { BUSINESS_INFO } from '../config/seo';

interface Route {
  path: string;
  priority: number;
  changefreq: string;
}

const routes: Route[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/leistungen', priority: 0.9, changefreq: 'monthly' },
  { path: '/ueber-uns', priority: 0.8, changefreq: 'monthly' },
  { path: '/kontakt', priority: 0.9, changefreq: 'monthly' },
  { path: '/impressum', priority: 0.5, changefreq: 'yearly' },
  { path: '/datenschutz', priority: 0.5, changefreq: 'yearly' },
  { path: '/agb', priority: 0.5, changefreq: 'yearly' }
];

function generateSitemap(): string {
  const baseUrl = BUSINESS_INFO.url;
  const today = new Date().toISOString().split('T')[0];

  const urls = routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateRobotsTxt(): string {
  const baseUrl = BUSINESS_INFO.url;
  return `# robots.txt für ${BUSINESS_INFO.name}
User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap-robots',
    apply: 'build',
    closeBundle() {
      const outDir = 'dist/client';
      
      try {
        const sitemap = generateSitemap();
        const robots = generateRobotsTxt();

        writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf-8');
        writeFileSync(join(outDir, 'robots.txt'), robots, 'utf-8');

        console.log('✅ sitemap.xml und robots.txt erfolgreich generiert');
      } catch (error) {
        console.error('❌ Fehler beim Generieren von sitemap.xml/robots.txt:', error);
      }
    }
  };
}
