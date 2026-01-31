# PrimaDent Zahntechnik - SEO-Optimierte Website

Diese Website nutzt **Vike** für Server-Side Rendering (SSG/Pre-Rendering), um optimale SEO-Performance zu gewährleisten.

## 🚀 Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten (localhost:3000)
npm run dev
```

## 📦 Build & Deployment

### Lokaler Build

```bash
# Statische Website generieren (SSG)
npm run build

# Build lokal testen
npm run preview
```

Nach dem Build findest du die fertigen Dateien in `dist/client/`:
- Alle HTML-Dateien (pre-rendered)
- `sitemap.xml`
- `robots.txt`
- Assets (JS, CSS, Bilder)

### Deployment auf Netlify

1. **Netlify Dashboard**: New site from Git
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
3. **Deploy** klicken

**netlify.toml** (optional, für erweiterte Konfiguration):

```toml
[build]
  command = "npm run build"
  publish = "dist/client"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment auf Cloudflare Pages

1. **Cloudflare Dashboard**: Pages → Create a project
2. **Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `dist/client`
3. **Save and Deploy**

### Deployment auf Vercel

1. **Vercel Dashboard**: New Project
2. **Framework Preset**: Vite
3. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
4. **Deploy**

## ✅ SEO-Features

- ✅ **Pre-Rendering (SSG)**: Alle Seiten als statische HTML-Dateien
- ✅ **Meta-Tags**: Title, Description, Canonical, Open Graph, Twitter Cards
- ✅ **JSON-LD**: LocalBusiness Structured Data (Schema.org)
- ✅ **Sitemap**: Automatisch generierte `sitemap.xml`
- ✅ **Robots.txt**: SEO-freundliche Robots-Konfiguration
- ✅ **Performance**: Optimierte Assets, Code-Splitting

## 🔍 SEO-Validierung

Nach dem Deployment:

1. **View Source** (Rechtsklick → Seitenquelltext):
   - Meta-Tags sollten direkt im HTML sichtbar sein
   - JSON-LD Script-Tag prüfen

2. **Google Rich Results Test**:
   ```
   https://search.google.com/test/rich-results
   ```

3. **Lighthouse Audit** (Chrome DevTools):
   - Performance
   - SEO
   - Accessibility

4. **Sitemap prüfen**:
   ```
   https://www.primadent-zahntechnik.de/sitemap.xml
   ```

## 📁 Projektstruktur

```
/
├── pages/                    # Vike Pages (Filesystem Routing)
│   ├── +config.ts           # Globale Vike Config
│   ├── +Head.tsx            # Globale Head-Tags
│   ├── +Layout.tsx          # Globales Layout (Navbar, Footer)
│   ├── index/
│   │   ├── +Page.tsx        # Startseite
│   │   ├── +config.ts       # SEO für Startseite
│   │   └── +Head.tsx        # JSON-LD für Startseite
│   ├── leistungen/
│   ├── ueber-uns/
│   ├── kontakt/
│   ├── impressum/
│   ├── datenschutz/
│   └── agb/
├── config/
│   └── seo.ts               # Zentrale SEO & Business Config
├── components/
│   ├── seo/
│   │   └── LocalBusinessJsonLd.tsx
│   ├── layout/
│   └── ui/
├── lib/
│   └── sitemap-plugin.ts    # Vite Plugin für Sitemap/Robots
└── renderer/
    ├── +onRenderClient.tsx  # Client-Side Hydration
    └── +onRenderHtml.tsx    # Server-Side Rendering
```

## 🛠️ Konfiguration anpassen

### Business-Daten ändern

Bearbeite [config/seo.ts](config/seo.ts):

```typescript
export const BUSINESS_INFO = {
  name: 'Dein Firmenname',
  url: 'https://deine-domain.de',
  telephone: '+49 123 456789',
  // ...
};
```

### Neue Seite hinzufügen

1. Erstelle Ordner: `pages/neue-seite/`
2. Erstelle `+Page.tsx`:
   ```tsx
   export { Page };
   
   function Page() {
     return <div>Neue Seite</div>;
   }
   ```
3. Erstelle `+config.ts` für SEO:
   ```typescript
   export default {
     title: 'Neue Seite | PrimaDent',
     description: 'Beschreibung...',
     canonical: 'https://www.primadent-zahntechnik.de/neue-seite'
   };
   ```
4. Füge Route zu `lib/sitemap-plugin.ts` hinzu

## 📞 Support

Bei Fragen zur Website-Konfiguration:
- **Vike Dokumentation**: https://vike.dev
- **Vite Dokumentation**: https://vitejs.dev
