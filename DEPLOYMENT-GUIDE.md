# 🚀 PrimaDent Zahntechnik - Deployment Guide

## 📚 Wie funktioniert die Struktur?

### Vike SSG (Static Site Generation)

Deine Website nutzt **Vike** für Pre-Rendering. Das bedeutet:
- Beim Build werden alle Seiten als **statische HTML-Dateien** generiert
- Die HTML-Dateien enthalten bereits alle SEO-Meta-Tags und Inhalte
- Suchmaschinen sehen sofort den kompletten Content (kein Client-Side Rendering)
- Die Seite lädt extrem schnell

### Projekt-Struktur

```
pages/                          # Alle Seiten (Vike Filesystem Routing)
├── +config.ts                 # Globale Vike-Einstellungen (SSG aktiviert)
├── +Head.tsx                  # Globale Meta-Tags (title, description, etc.)
├── +Layout.tsx                # Layout für alle Seiten (Navbar, Footer, CSS-Import)
├── Home.tsx                   # Startseiten-Content
├── Services.tsx               # Leistungen-Content
├── About.tsx                  # Über Uns-Content
├── Contact.tsx                # Kontakt-Content
├── Impressum.tsx              # Impressum-Content
├── Datenschutz.tsx            # Datenschutz-Content
├── AGB.tsx                    # AGB-Content
├── index/+Page.tsx            # Route: / (Startseite)
├── index/+Head.tsx            # JSON-LD für Startseite
├── leistungen/+Page.tsx       # Route: /leistungen
├── ueber-uns/+Page.tsx         # Route: /ueber-uns
├── kontakt/+Page.tsx          # Route: /kontakt
├── kontakt/+Head.tsx          # JSON-LD für Kontakt
├── impressum/+Page.tsx        # Route: /impressum
├── datenschutz/+Page.tsx      # Route: /datenschutz
└── agb/+Page.tsx              # Route: /agb

config/
├── seo.ts                     # Firmendaten (Name, Adresse, Tel, etc.) - HIER ANPASSEN!
└── page-seo.ts                # SEO-Titel und Beschreibungen pro Seite

components/
├── seo/
│   └── LocalBusinessJsonLd.tsx   # Google Structured Data
├── layout/
│   ├── Navbar.tsx             # Navigation
│   └── Footer.tsx             # Fußzeile
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    └── CookieBanner.tsx

lib/
├── sitemap-plugin.ts          # Auto-Generierung von sitemap.xml + robots.txt
└── utils.ts

dist/client/                   # ⚠️ DAS WIRD HOCHGELADEN! (nach npm run build)
├── index.html                 # Generierte Startseite
├── sitemap.xml                # Generierte Sitemap
├── robots.txt                 # Generierte Robots.txt
├── assets/                    # CSS, JavaScript
├── leistungen/index.html
├── kontakt/index.html
└── ...
```

---

## ✅ Vor dem Live-Gang: Checkliste

### 1. **Firmendaten anpassen**

Öffne `config/seo.ts` und passe ALLE Daten an:

```typescript
export const BUSINESS_INFO = {
  name: 'PrimaDent Zahntechnik',                    // ✏️ Firmenname
  legalName: 'PrimaDent Zahntechnik GmbH',          // ✏️ Rechtsform
  url: 'https://www.primadent-zahntechnik.de',      // ✏️ DEINE ECHTE DOMAIN!
  telephone: '+49 123 456789',                       // ✏️ Telefonnummer
  email: 'info@primadent-zahntechnik.de',           // ✏️ E-Mail
  address: {
    streetAddress: 'Musterstraße 123',              // ✏️ Straße + Hausnummer
    postalCode: '12345',                            // ✏️ PLZ
    addressLocality: 'Berlin',                      // ✏️ Ort
    addressCountry: 'DE'                            // ✏️ Land (DE = Deutschland)
  },
  openingHours: 'Mo-Fr 08:00-17:00',               // ✏️ Öffnungszeiten
  geo: {
    latitude: 52.520008,                            // ✏️ GPS-Koordinaten
    longitude: 13.404954                            // ✏️ (Google Maps: Rechtsklick auf Standort)
  },
  logo: '/logo.webp',                                // ✏️ Logo-Pfad (Datei in public/)
  image: '/og-image.jpg'                            // ✏️ Social Media Vorschaubild
};
```

**Wie finde ich GPS-Koordinaten?**
1. Öffne Google Maps
2. Rechtsklick auf deinen Standort
3. Wähle die Koordinaten (z.B. "52.520008, 13.404954")

### 2. **SEO-Texte prüfen**

Öffne `config/page-seo.ts` und prüfe alle Titel/Beschreibungen:

```typescript
export const pageSeo = {
  '/': {
    title: 'PrimaDent Zahntechnik - Ihr Dentallabor für Präzision',  // ✏️ Max 60 Zeichen
    description: 'Modernes Zahntechniklabor...'                       // ✏️ Max 160 Zeichen
  },
  // ... weitere Seiten
};
```

**SEO-Tipps:**
- Titel: 50-60 Zeichen, Hauptkeyword am Anfang
- Description: 140-160 Zeichen, Call-to-Action
- Einzigartig für jede Seite

### 3. **Logo & Bilder hinzufügen**

Lege diese Dateien im `public/` Ordner ab:

```
public/
├── logo.webp              # Firmenlogo (empfohlen: 512x512px, PNG)
├── og-image.jpg          # Social Media Vorschaubild (1200x630px, JPG)
└── favicon.ico           # Browser-Icon (optional)
```

Das `public/` Verzeichnis wird automatisch in den Build kopiert.

### 4. **Inhalte anpassen**

Bearbeite die Seiten-Dateien:
- `pages/Home.tsx` - Startseiten-Texte
- `pages/Services.tsx` - Leistungen
- `pages/About.tsx` - Über Uns
- `pages/Contact.tsx` - Kontaktformular
- `pages/Impressum.tsx` - Impressum (rechtlich!)
- `pages/Datenschutz.tsx` - Datenschutzerklärung (rechtlich!)
- `pages/AGB.tsx` - AGB

**⚠️ WICHTIG:** Impressum & Datenschutz müssen rechtlich korrekt sein!

### 5. **Telefonnummern/E-Mails im Footer & Navbar**

Öffne `components/layout/Footer.tsx` und `components/layout/Navbar.tsx`:

```tsx
// In Footer.tsx (Zeile ~75)
<a href="tel:+4930123456">+49 (0) 30 123 456</a>
<a href="mailto:info@primadent.de">info@primadent.de</a>

// In Navbar.tsx (Zeile ~78)
<a href="tel:+49123456789">
  <Phone className="w-4 h-4" />
  <span>030 123 456</span>
</a>
```

### 6. **Google Analytics / Tracking (optional)**

Falls du Analytics nutzen möchtest, füge das Script in `pages/+Layout.tsx` hinzu:

```tsx
<head>
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script dangerouslySetInnerHTML={{__html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}} />
</head>
```

---

## 🔨 Build-Prozess

### Schritt 1: Development (optional - zum Testen)

```bash
cd "/Users/leon.ueberrueck/Documents/PrimaDent/primadent-zahntechnik (2)"

# Development-Server starten
npm run dev
```

Öffne http://localhost:3000 im Browser.

**Änderungen werden live übernommen** (Hot Module Replacement).

### Schritt 2: Production Build

```bash
# Production-Build erstellen
npm run build
```

**Was passiert beim Build?**
1. Vite kompiliert TypeScript → JavaScript
2. Tailwind CSS wird generiert und optimiert
3. Vike pre-rendert alle Seiten als statische HTML-Dateien
4. Assets werden optimiert (minified, gzip)
5. Sitemap.xml und robots.txt werden generiert
6. Alles landet in `dist/client/`

**Output:**
```
✓ 2272 modules transformed.
✓ 13 chunks built
✓ 7 HTML documents pre-rendered.
✅ sitemap.xml und robots.txt erfolgreich generiert
```

### Schritt 3: Build lokal testen (optional)

```bash
# Preview-Server starten (zeigt den Build)
npm run preview
```

Öffne http://localhost:3000 und teste:
- ✅ Alle Links funktionieren
- ✅ Layout sieht korrekt aus
- ✅ Formulare funktionieren
- ✅ Responsive Design (Handy/Tablet)

**Rechtsklick → "Seitenquelltext anzeigen"**
→ Meta-Tags und JSON-LD müssen sichtbar sein!

---

## 📤 Upload auf Webserver

### Was wird hochgeladen?

**NUR der Inhalt von `dist/client/`!**

```
dist/client/                    # ← Dieser Inhalt
├── index.html                 
├── sitemap.xml                
├── robots.txt                 
├── assets/                    
├── fonts/
├── leistungen/
│   └── index.html
├── kontakt/
│   └── index.html
└── ...
```

### Wohin hochladen?

**Auf deinem Webserver:**
```
/httpdocs/                      # ← Hierhin (oder /public_html/ oder /www/)
├── index.html                  # ← Muss direkt hier liegen!
├── sitemap.xml
├── robots.txt
└── ...
```

**⚠️ NICHT `/httpdocs/dist/client/`!**  
**Sondern direkt in `/httpdocs/`!**

### Upload-Methode 1: FTP-Client (empfohlen)

**Empfohlene Programme:**
- **FileZilla** (kostenlos, Windows/Mac/Linux)
- **Cyberduck** (kostenlos, Mac)
- **Transmit** (Mac, kostenpflichtig)

**Schritte:**
1. FTP-Client öffnen
2. Mit deinem Server verbinden (FTP/SFTP-Zugangsdaten von deinem Hoster)
3. Navigiere zu `/httpdocs/`
4. Lösche alten Inhalt (falls vorhanden)
5. Drag & Drop: **Kompletten Inhalt** von `dist/client/` hochladen

### Upload-Methode 2: Kommandozeile (für Profis)

**Via rsync (empfohlen):**
```bash
# Backup erstellen (falls bereits online)
ssh user@deinserver.de "tar -czf ~/backup-$(date +%Y%m%d).tar.gz /httpdocs/"

# Hochladen (passt Pfade an!)
rsync -avz --delete \
  dist/client/ \
  user@deinserver.de:/httpdocs/
```

**Via scp:**
```bash
scp -r dist/client/* user@deinserver.de:/httpdocs/
```

**Via sFTP:**
```bash
sftp user@deinserver.de
cd /httpdocs/
put -r dist/client/*
quit
```

### .htaccess für Apache (wichtig!)

Falls dein Server **Apache** nutzt, erstelle eine `.htaccess` Datei:

**Erstelle Datei:** `dist/client/.htaccess`

```apache
# PrimaDent Zahntechnik - Apache Config

# Aktiviere URL Rewriting
RewriteEngine On
RewriteBase /

# Erzwinge HTTPS (optional, empfohlen)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www zu non-www (optional)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Wenn Datei/Ordner nicht existiert → zeige index.html (für Vike Routing)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching (1 Jahr für Assets)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

**Dann neu builden mit .htaccess:**
```bash
npm run build
# .htaccess wird automatisch mit hochgeladen
```

---

## ✅ Nach dem Upload: Checkliste

### 1. **Website öffnen**
```
https://deine-domain.de
```

### 2. **Alle Seiten testen**
- ✅ Startseite lädt
- ✅ Navigation funktioniert
- ✅ /leistungen
- ✅ /ueber-uns
- ✅ /kontakt
- ✅ /impressum
- ✅ /datenschutz
- ✅ /agb

### 3. **Responsive Design testen**
- ✅ Chrome DevTools → Responsive Mode
- ✅ iPhone/Android
- ✅ Tablet
- ✅ Desktop

### 4. **SEO-Validierung**

**A) View Source Test:**
```
Rechtsklick → "Seitenquelltext anzeigen"
```

Prüfe ob sichtbar:
- ✅ `<title>` Tag
- ✅ `<meta name="description">`
- ✅ `<link rel="canonical">`
- ✅ Open Graph Tags (`og:title`, `og:description`, etc.)
- ✅ `<script type="application/ld+json">` (JSON-LD)

**B) Google Rich Results Test:**
```
https://search.google.com/test/rich-results
```
→ Deine URL eingeben → Teste ob LocalBusiness erkannt wird

**C) Sitemap prüfen:**
```
https://deine-domain.de/sitemap.xml
```
→ Sollte alle 7 Seiten listen

**D) Robots.txt prüfen:**
```
https://deine-domain.de/robots.txt
```
→ Sollte `Allow: /` und Sitemap-Link enthalten

### 5. **Performance-Test**

**Google Lighthouse:**
1. Chrome öffnen
2. F12 (DevTools)
3. Tab "Lighthouse"
4. "Generate report"

**Ziel:**
- Performance: 90+
- SEO: 100
- Accessibility: 90+
- Best Practices: 90+

**Weitere Tools:**
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### 6. **Google Search Console**

**Sitemap einreichen:**
1. Gehe zu https://search.google.com/search-console
2. Property hinzufügen (deine Domain)
3. Inhaberschaft bestätigen
4. Sitemaps → Neue Sitemap hinzufügen
5. URL: `https://deine-domain.de/sitemap.xml`

**URL-Inspektion:**
- Teste jede wichtige Seite
- "URL-Prüfung anfordern"

---

## 🔄 Workflow für Änderungen

### Du möchtest etwas ändern?

**1. Datei bearbeiten** (z.B. `pages/Home.tsx`)

**2. Lokal testen (optional):**
```bash
npm run dev
# → http://localhost:3000
```

**3. Production-Build erstellen:**
```bash
npm run build
```

**4. Hochladen:**
- FTP-Client öffnen
- `dist/client/` Inhalt → `/httpdocs/` hochladen (überschreiben)

**5. Cache leeren:**
- Browser: Strg+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Falls CDN: Cache über CDN-Dashboard leeren

### Häufige Änderungen:

**Texte ändern:**
→ Bearbeite `pages/Home.tsx`, `pages/Services.tsx`, etc.

**SEO anpassen:**
→ Bearbeite `config/page-seo.ts`

**Firmendaten ändern:**
→ Bearbeite `config/seo.ts`

**Styling ändern:**
→ Bearbeite Tailwind-Klassen in den Komponenten
→ Oder `index.css` für globale Styles

**Navigation anpassen:**
→ Bearbeite `components/layout/Navbar.tsx`

**Footer anpassen:**
→ Bearbeite `components/layout/Footer.tsx`

---

## 🐛 Troubleshooting

### Problem: "CSS wird nicht geladen"
**Lösung:** Prüfe ob `index.css` in `pages/+Layout.tsx` importiert ist:
```tsx
import '../index.css';
```

### Problem: "Seite 404 Not Found"
**Lösung:** 
1. Prüfe `.htaccess` (siehe oben)
2. Oder frage deinen Hoster nach "URL Rewriting"

### Problem: "Meta-Tags nicht im HTML"
**Lösung:** Du hast wahrscheinlich `npm run dev` genutzt statt `npm run build`.
→ Nur der **Build** pre-rendert die Meta-Tags!

### Problem: "Bilder werden nicht angezeigt"
**Lösung:** 
1. Bilder müssen im `public/` Ordner liegen
2. Pfade müssen absolut sein: `/logo.webp` nicht `./logo.webp`

### Problem: "Sitemap zeigt falsche Domain"
**Lösung:** Ändere `config/seo.ts` → `url: 'https://...'`
→ Dann neu builden!

---

## 📞 Support & Ressourcen

- **Vike Dokumentation:** https://vike.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Dokumentation:** https://react.dev

### Weitere Optimierungen (nach Go-Live):

1. **SSL-Zertifikat** einrichten (HTTPS)
2. **Google Analytics** einbinden
3. **Cookie-Banner** rechtlich prüfen (DSGVO)
4. **Google My Business** Profil erstellen
5. **Backlinks** aufbauen
6. **Lokale SEO** optimieren
7. **Performance** weiter optimieren

---

**Viel Erfolg mit deinem Launch! 🚀**
