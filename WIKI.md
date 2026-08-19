# WIKI.md — Hook's Legacy Website Project

## Panoramica Progetto
**Obiettivo**: Trasformare il sito wearekeepersofthesea.com da pagina base a landing page professionale per il gioco mobile "Hook's Legacy", ispirata a The Room e House of Da Vinci.

**Sito attuale**: https://www.wearekeepersofthesea.com/ (GitHub Pages, dominio custom)
**Repo GitHub**: https://github.com/HooksLegacyTeam/HooksLegacy
**Google Play**: https://play.google.com/store/apps/details?id=com.HooksLegacyDev.HooksLegacyEp1

---

## Stato di Avanzamento

| STEP | Descrizione | Stato | Note |
|------|-------------|-------|------|
| 0 | Creazione agents.md e WIKI.md | COMPLETATO | |
| 1 | Analisi asset disponibili | COMPLETATO | |
| 2 | Progettazione architettura | COMPLETATO | |
| 3 | Struttura file e cartelle | COMPLETATO | CNAME, .nojekyll, assets/ |
| 4 | Sviluppo index.html | COMPLETATO | Landing page completa |
| 5 | Sviluppo privacy.html | COMPLETATO | GDPR compliant, 13 sezioni |
| 6 | Sviluppo CSS theme | COMPLETATO | Dark gaming, Cinzel + Inter |
| 7 | Ottimizzazione immagini | COMPLETATO | 10 file WebP creati (logo, screenshots, story, favicon) |
| 8 | Deploy e test | DA FARE | Push su GitHub Pages |

---

## STEP 1 — Analisi Asset Disponibili

### Asset locali (We Are Keepers Of The Sea/)
- `SCREENSHOT/` — Screenshot del gioco (5 file PNG)
- `SCREENSHOT/SCREENSHOT STORE/` — Screenshot ottimizzati per App Store (14 formati iPhone/iPad)
- `IMAGES/` — Immagine developer (4096x2304 PNG/JPG)
- `ICONS/` — Icone del gioco
- `LOGO 1000x1000.png` — Logo quadrato
- `Logo 512x512.png` — Logo piccolo
- `Logo Developer.png` — Logo sviluppatore
- `Reddit Banner.jpg` — Banner Reddit
- `VIDEO TRAILER/` — Video trailer del gioco

### Asset da GitHub (HooksLegacy/)
- `index.html` — Pagina attuale (inline CSS, molto base)
- `privacy-policy/index.html` — Privacy policy esistente (HTML semplice)
- `CNAME` — Configurazione dominio
- `app-ads.txt` — Configurazione ads

### Struttura attuale del sito
```
index.html          ← Pagina principale (bruttina)
privacy-policy/
  index.html        ← Privacy policy
CNAME               ← Dominio custom
app-ads.txt         ← Configurazione ads
```

### Struttura target (proposta)
```
index.html          ← Landing page professionale
privacy.html        ← Privacy policy professionale
assets/
  css/style.css     ← Theme gaming dark
  img/              ← Immagini ottimizzate
    logo.webp
    screenshot-1.webp
    screenshot-2.webp
    ...
    play-badge.svg   ← Google Play badge
  js/main.js        ← Animazioni e interattività
CNAME               ← Mantenuto
```

---

## STEP 2 — Progettazione Architettura

### Design System
- **Tema**: Dark navy (#0a0e1a → #0d1322)
- **Accent oro**: #d4a574 (pirate gold)
- **Accent azzurro**: #22d3ee (ocean blue)
- **Font titoli**: Cinzel Decorative (pirate/medieval)
- **Font corpo**: Inter (moderno, leggibile)
- **Border radius**: 16px (card), 999px (bottoni)
- **Ombre**: 0 20px 60px rgba(0,0,0,0.45)

### Layout
1. **Hero Section** (100vh)
   - Logo centrato grande
   - Titolo "HOOK'S LEGACY" con effetto glow
   - Sottotitolo: "The Captain's Cabin Awaits"
   - Google Play badge cliccabile
   - Scroll indicator

2. **Screenshots Section**
   - Carosello screenshot del gioco (da SCREENSHOT STORE)
   - Navigazione freccette
   - Counter "1 / 5"

3. **Features Section**
   - 4 card con icone: Puzzle, Immersive, Mystery, Adventure
   - Testo breve per ogni feature

4. **Story Section**
   - Narrazione trama del gioco
   - Background sfumato con effetto particelle

5. **Episodes Section**
   - "Episode 1 of 10"
   - Progress bar o mappa episodi
   - "Coming Soon" per episodi futuri

6. **Download Section (CTA finale)**
   - Google Play badge grande
   - "Available Now"
   - Rating stars (se disponibili)

7. **Footer**
   - Logo + copyright
   - Link: Privacy Policy, Google Play, GitHub
   - "Hooks Legacy Team"

---

## STEP 3 — Struttura File

### File da creare nella cartella SITO/
```
SITO/
├── index.html
├── privacy.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── logo.webp (ridimensionato da Logo 1000x1000.png)
│   │   ├── screenshot-1.webp (da SCREENSHOT STORE)
│   │   ├── screenshot-2.webp
│   │   ├── screenshot-3.webp
│   │   ├── screenshot-4.webp
│   │   ├── screenshot-5.webp
│   │   ├── play-badge.svg (Google Play badge ufficiale)
│   │   └── favicon.ico
│   └── js/
│       └── main.js
├── CNAME
├── .nojekyll (per GitHub Pages)
└── README.md
```

---

## STEP 4 — Sviluppo index.html

### Struttura HTML5 semantica
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags SEO -->
  <!-- Open Graph tags -->
  <!-- Favicon -->
  <!-- Google Fonts: Cinzel + Inter -->
  <!-- CSS link -->
</head>
<body>
  <header> <!-- Nav minimale, logo + links --> </header>
  <main>
    <section class="hero"> <!-- Logo + titolo + CTA --> </section>
    <section class="screenshots"> <!-- Carosello --> </section>
    <section class="features"> <!-- 4 card features --> </section>
    <section class="story"> <!-- Narrazione trama --> </section>
    <section class="episodes"> <!-- Mappa episodi --> </section>
    <section class="download"> <!-- CTA finale --> </section>
  </main>
  <footer> <!-- Crediti + links --> </footer>
  <script> <!-- Animazioni --> </script>
</body>
</html>
```

---

## STEP 5 — Sviluppo privacy.html

### Contenuti richiesti (GDPR compliant)
1. Titolare del trattamento
2. Dati raccolti (nessuno dal sito, solo AdMob nell'app)
3. Finalità del trattamento
4. Base giuridica
5. Diritti dell'interessato (GDPR art. 15-22)
6. Periodo di conservazione
7. Trasferimento dati extra-UE
8. Minori
9. Modifiche
10. Contatti

### Note
- Il sito NON raccoglie dati (no analytics, no cookie, no form)
- L'app usa AdMob (dati raccolti da Google)
- Mantenere riferimento a "wearekeepersofthesea.com" come dominio
- Aggiornare data a oggi

---

## STEP 6 — CSS Theme

### Variabili CSS
```css
:root {
  --bg: #0a0e1a;
  --bg-alt: #0d1322;
  --surface: #111726;
  --border: #232c44;
  --text: #e8ecf4;
  --muted: #98a2b8;
  --gold: #d4a574;
  --gold-bright: #f0c87a;
  --cyan: #22d3ee;
  --font-display: 'Cinzel Decorative', serif;
  --font-body: 'Inter', sans-serif;
}
```

### Effetti speciali
- Glow effect sul titolo principale
- Parallax leggero sullo sfondo
- Fade-in on scroll per le sezioni
- Hover effects sulle card
- Animazione pulse sul Google Play badge

---

## STEP 7 — Ottimizzazione Immagini

### Sorgenti
1. `SCREENSHOT/SCREENSHOT STORE/[Iphone 6.5 6.7 6.9] 2868x1320/` — 5 screenshot ITA
2. `Logo 1000x1000.png` — Logo principale
3. `IMAGES/Immagine Developer 4096x2304.png` — Immagine hero/sfondo

### Processo
1. Selezionare screenshot migliori (IT1-5)
2. Ridimensionare a 1200x560 (web)
3. Convertire in WebP con qualità 80%
4.压缩 logo a 400x400 WebP
5. Creare favicon.ico 32x32

---

## STEP 8 — Deploy e Test

### Checklist
- [ ] Push su repo GitHub (branch main)
- [ ] Verificare GitHub Pages attivo
- [ ] Test dominio wearekeepersofthesea.com
- [ ] Lighthouse audit (>90 tutte le metriche)
- [ ] Mobile-friendly test
- [ ] Test link Google Play
- [ ] Test privacy policy link
- [ ] Cross-browser test (Chrome, Safari, Firefox)

### Comandi utili
```bash
# Ottimizzazione immagini (da SITO/ con ImageMagick)
convert input.png -resize 1200x -quality 80 output.webp

# Test locale
python -m http.server 8000
# Aprire http://localhost:8000

# Push su GitHub
git add .
git commit -m "feat: professional gaming landing page"
git push origin main
```

---

## Note per Continuità
- Se il contesto si perde, rileggere agents.md per le direttive
- Consultare WIKI.md per lo stato di avanzamento
- Gli asset sono nella cartella: `C:\Users\danie\Documents\We Are Keepers Of The Sea\`
- Il reference site è in: `C:\Users\danie\Desktop\PYTHON\TIME TRAVEL GAME\Site\`
- Il progetto Unity è in: `C:\Users\danie\Documents\Unity\Mansion Survivor\2024-07-03 - The Keepers of The Sea\`
