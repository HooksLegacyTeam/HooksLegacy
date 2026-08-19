(() => {
  'use strict';

  const translations = {
    en: {
      'nav.screenshots': 'Screenshots',
      'nav.features': 'Features',
      'nav.story': 'Story',
      'nav.episodes': 'Episodes',
      'nav.play': 'Play Now',
      'hero.badge': 'Episode 1 of 10',
      'hero.subtitle': "The Captain's Cabin Awaits",
      'hero.tagline': 'Step into a 1700s pirate ship cabin. Open the mysterious box, uncover hidden clues, and solve intricate puzzles before the Kraken awakens.',
      'hero.cta': 'Get it on Google Play',
      'hero.scroll': 'Scroll to explore',
      'gallery.eyebrow': 'Gallery',
      'gallery.title': 'Inside the Cabin',
      'gallery.desc': 'Explore the mysterious world of Hook\'s Legacy.',
      'features.eyebrow': 'Gameplay',
      'features.title': 'What Awaits You',
      'features.desc': 'A handcrafted puzzle experience inspired by the greatest escape room games.',
      'features.f1.title': 'Interactive Puzzles',
      'features.f1.desc': 'Examine every object, rotate, zoom, and interact with intricate mechanisms to uncover hidden secrets.',
      'features.f2.title': 'Immersive Atmosphere',
      'features.f2.desc': 'Stunning graphics and atmospheric music transport you to a 1700s pirate ship cabin.',
      'features.f3.title': 'Deep Mystery',
      'features.f3.desc': 'Ancient artifacts, cryptic medallions, and a mysterious flute \u2014 every object tells a story.',
      'features.f4.title': 'Epic Saga',
      'features.f4.desc': 'The first episode of a 10-part adventure full of mystery, danger, and the fury of the Kraken.',
      'story.eyebrow': 'The Story',
      'story.title': 'Uncover the Secrets of the Doomed Cabin',
      'story.p1': 'You awaken in the captain\'s cabin of an ancient pirate ship. Before you sits a <span class="highlight">mysterious box</span>, covered in cryptic symbols and locked with mechanisms unknown to modern men.',
      'story.p1.hl': 'mysterious box',
      'story.p2': 'Open it. Examine the coins, the <span class="highlight">ancient hook</span>, the globe that seems to move on its own. Every corner hides a clue. Every puzzle brings you closer to the truth \u2014 and closer to the <span class="highlight">Kraken\'s fury</span>.',
      'story.p2.hl': 'ancient hook',
      'story.p2.hl2': "Kraken's fury",
      'story.p3': 'Do you have what it takes to solve the final puzzle and survive?',
      'story.badge': 'Episodes Planned',
      'episodes.eyebrow': 'The Saga',
      'episodes.title': '10 Episodes of Mystery',
      'episodes.desc': 'Hook\'s Legacy is a 10-part adventure. Episode 1 is available now.',
      'episodes.e1.title': "The Captain's Cabin",
      'episodes.google': 'Google Play',
      'episodes.apple': 'App Store',
      'episodes.coming': 'Coming Soon',
      'episodes.progress': '1 of 10 episodes released',
      'download.eyebrow': 'Available Now',
      'download.title': 'Begin Your Adventure',
      'download.desc': 'Download Hook\'s Legacy Episode 1 and step into the captain\'s doomed cabin.',
      'download.cta': 'Get it on Google Play',
      'download.meta': 'Free to play \u00b7 Android 7.0+ \u00b7 No ads required to progress',
      'credits.eyebrow': 'Credits',
      'credits.title': 'The Crew Behind the Legend',
      'credits.desc': 'The talented people who brought Hook\'s Legacy to life.',
      'credits.daniel.role': 'Developer & Creator',
      'credits.daniel.desc': 'Unity developer and mastermind behind Hook\'s Legacy. Also produced <a href="https://hookslegacyteam.github.io/TBR-Timeline-Breaker-Rewind/" target="_blank" rel="noopener">Timeline Breaker Rewind</a> and an <a href="https://github.com/HooksLegacyTeam/DDR-Pad-with-Arduino-4-to-8-FSR-GUI" target="_blank" rel="noopener">affordable DDR pad</a>.',
      'credits.valeriano.role': 'Composer & Singer',
      'credits.valeriano.desc': 'Composed and performed <a href="https://youtu.be/pboevSc9QCQ" target="_blank" rel="noopener">Here Comes the Kraken</a> and <a href="https://youtu.be/p-L8N2mwAf8" target="_blank" rel="noopener">Keepers of the Sea</a> with <a href="https://www.youtube.com/@agarthic1274" target="_blank" rel="noopener">Agarthic</a>.',
      'credits.jonny.role': '3D & Textures',
      'credits.jonny.desc': 'Created the 3D models and textures that bring the captain\'s cabin to life.',
      'credits.fabio.role': 'Lead Tester',
      'credits.fabio.desc': 'Rigorously tested every puzzle, every corner, every bug \u2014 multiple times over.',
      'footer.desc': 'A 10-part pirate puzzle adventure saga. Episode 1 is available now on Android.',
      'footer.game': 'Game',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy'
    },
    it: {
      'nav.screenshots': 'Screenshot',
      'nav.features': 'Funzionalit\u00e0',
      'nav.story': 'Storia',
      'nav.episodes': 'Episodi',
      'nav.play': 'Gioca Ora',
      'hero.badge': 'Episodio 1 di 10',
      'hero.subtitle': "La Cabina del Capitano Ti Aspetta",
      'hero.tagline': 'Entra nella cabina di una nave pirata del 1700. Apri la scatola misteriosa, scopri indizi nascosti e risolvi enigmi complessi prima che il Kraken si svegli.',
      'hero.cta': 'Scarica su Google Play',
      'hero.scroll': 'Scorri per esplorare',
      'gallery.eyebrow': 'Galleria',
      'gallery.title': 'Dentro la Cabina',
      'gallery.desc': 'Esplora il mondo misterioso di Hook\'s Legacy.',
      'features.eyebrow': 'Gameplay',
      'features.title': 'Cosa Ti Aspetta',
      'features.desc': 'Un\'esperienza di puzzle artigianale ispirata ai pi\u00f9 grandi giochi di escape room.',
      'features.f1.title': 'Puzzle Interattivi',
      'features.f1.desc': 'Esamina ogni oggetto, ruota, zooma e interagisci con meccanismi intricati per scoprire segreti nascosti.',
      'features.f2.title': 'Atmosfera Immersiva',
      'features.f2.desc': 'Grafica mozzafiato e musica atmosferica ti transportano nella cabina di una nave pirata del 1700.',
      'features.f3.title': 'Mistero Profondo',
      'features.f3.desc': 'Antichi artefatti, medaglioni criptici e un misterioso flauto \u2014 ogni oggetto racconta una storia.',
      'features.f4.title': 'Epica Saga',
      'features.f4.desc': 'Il primo episodio di un\'avventura in 10 parti piena di mistero, pericolo e la furia del Kraken.',
      'story.eyebrow': 'La Storia',
      'story.title': 'Scopri i Segreti della Cabina Dannata',
      'story.p1': 'Ti risvegli nella cabina del capitano di un\'antica nave pirata. Davanti a te siede una <span class="highlight">scatola misteriosa</span>, coperta da simboli criptici e chiusa con meccanismi sconosciuti agli uomini moderni.',
      'story.p1.hl': 'scatola misteriosa',
      'story.p2': 'Aprila. Esamina le monete, l\'<span class="highlight">antico gancio</span>, il globo che sembra muoversi da solo. Ogni nascondiglio \u00e8 un indizio. Ogni puzzle ti avvicina alla verit\u00e0 \u2014 e alla <span class="highlight">furia del Kraken</span>.',
      'story.p2.hl': 'antico gancio',
      'story.p2.hl2': 'furia del Kraken',
      'story.p3': 'Hai ci\u00f2 che ci vuole per risolvere il rompicapo finale e sopravvivere?',
      'story.badge': 'Episodi Previsti',
      'episodes.eyebrow': 'La Saga',
      'episodes.title': '10 Episodi di Mistero',
      'episodes.desc': 'Hook\'s Legacy \u00e8 un\'avventura in 10 parti. L\'Episodio 1 \u00e8 disponibile ora.',
      'episodes.e1.title': 'La Cabina del Capitano',
      'episodes.google': 'Google Play',
      'episodes.apple': 'App Store',
      'episodes.coming': 'Prossimamente',
      'episodes.progress': '1 episodio su 10 rilasciato',
      'download.eyebrow': 'Disponibile Ora',
      'download.title': 'Inizia la Tua Avventura',
      'download.desc': 'Scarica l\'Episodio 1 di Hook\'s Legacy e entra nella cabina dannata del capitano.',
      'download.cta': 'Scarica su Google Play',
      'download.meta': 'Gioco gratuito \u00b7 Android 7.0+ \u00b7 Nessuna pubblicit\u00e0 obbligatoria',
      'credits.eyebrow': 'Riconoscimenti',
      'credits.title': 'La Squadra Dietro la Leggenda',
      'credits.desc': 'Le persone talentuose che hanno dato vita a Hook\'s Legacy.',
      'credits.daniel.role': 'Sviluppatore & Creatore',
      'credits.daniel.desc': 'Sviluppatore Unity e mentore dietro Hook\'s Legacy. Ha prodotto anche <a href="https://hookslegacyteam.github.io/TBR-Timeline-Breaker-Rewind/" target="_blank" rel="noopener">Timeline Breaker Rewind</a> e una <a href="https://github.com/HooksLegacyTeam/DDR-Pad-with-Arduino-4-to-8-FSR-GUI" target="_blank" rel="noopener">pedana DDR economica</a>.',
      'credits.valeriano.role': 'Compositore & Cantante',
      'credits.valeriano.desc': 'Ha composto e interpretato <a href="https://youtu.be/pboevSc9QCQ" target="_blank" rel="noopener">Here Comes the Kraken</a> e <a href="https://youtu.be/p-L8N2mwAf8" target="_blank" rel="noopener">Keepers of the Sea</a> con <a href="https://www.youtube.com/@agarthic1274" target="_blank" rel="noopener">Agarthic</a>.',
      'credits.jonny.role': '3D & Texture',
      'credits.jonny.desc': 'Ha creato i modelli 3D e le texture che danno vita alla cabina del capitano.',
      'credits.fabio.role': 'Tester Capo',
      'credits.fabio.desc': 'Ha testato rigorosamente ogni puzzle, ogni angolo, ogni bug \u2014 pi\u00f9 volte.',
      'footer.desc': 'Una saga di puzzle pirata in 10 parti. L\'Episodio 1 \u00e8 disponibile ora su Android.',
      'footer.game': 'Gioco',
      'footer.legal': 'Legale',
      'footer.privacy': 'Privacy Policy'
    }
  };

  const STORAGE_KEY = 'hl-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(lang);
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
  }

  // Init
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  setLang(getLang());
})();
