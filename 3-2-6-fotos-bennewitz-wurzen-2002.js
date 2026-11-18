/* ==============================
   FOTOGALERIE - SPURENSUCHE
   ============================== */

/*
  Hier werden die Bilderstrecken
  und ihre Fotos eingetragen.
*/

const bilderstrecken = {

  /* BILDERSTRECKE 1 */

  "bruecke": [

    {
      datei: "Eisenbahnbrücke-Bennewitz-2002-1.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-1.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-2.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-3.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-4.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-5.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-6.JPG",
      titel: "...",
      beschreibung: "..."
    },
    
    {
      datei: "Muldenbrücke-2002-7.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-8.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-9.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-10.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-11.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-12.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-13.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-14.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-15.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-16.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-17.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-18.JPG",
      titel: "...",
      beschreibung: "..."
    },
    
    {
      datei: "Muldenbrücke-2002-19.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-20.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-21.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-22.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-23.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-25.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Muldenbrücke-2002-26.JPG",
      titel: "...",
      beschreibung: "..."
    },

  ],

  /* BILDERSTRECKE 2 */

  "mulde": [

    {
      datei: "Mulde-Bennewitz-Wurzen-2002-1.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Mulde-Bennewitz-Wurzen-2002-2.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Mulde-Bennewitz-Wurzen-2002-3.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Mulde-Bennewitz-Wurzen-2002-4.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Mulde-Bennewitz-Wurzen-2002-5.JPG",
      titel: "...",
      beschreibung: "..."
    },

  ],

};


/* ==============================
   BILDERSTRECKEN INITIALISIEREN
   ============================== */

document.querySelectorAll(".bilderstrecke")
  .forEach((strecke) => {

    const id = strecke.dataset.strecke;
    const bilder = bilderstrecken[id];

    if (!bilder || bilder.length === 0) {
      console.warn(
        "Keine Bilder für Bilderstrecke:", id
      );
      strecke.hidden = true;
      return;
    }

    let aktuell = 0;

    const bild =
      strecke.querySelector(".strecken-bild");

    const titel =
      strecke.querySelector(".bildtitel");

    const beschreibung =
      strecke.querySelector(".bildbeschreibung");

    const zaehler =
      strecke.querySelector(".bildzaehler");

    const zurueck =
      strecke.querySelector(".zurueck");

    const weiter =
      strecke.querySelector(".weiter");


    /* FOTO ANZEIGEN */

    function anzeigen() {

      const foto = bilder[aktuell];

      bild.src = foto.datei;
      bild.alt = foto.titel;

      titel.textContent = foto.titel;

      beschreibung.textContent =
        foto.beschreibung;

      zaehler.textContent =
        `Foto ${aktuell + 1} von ${bilder.length}`;

    }


    /* VORHERIGES FOTO */

    zurueck.addEventListener("click", () => {

      aktuell =
        (aktuell - 1 + bilder.length)
        % bilder.length;

      anzeigen();

    });


    /* NÄCHSTES FOTO */

    weiter.addEventListener("click", () => {

      aktuell =
        (aktuell + 1) % bilder.length;

      anzeigen();

    });


    /* ERSTES FOTO LADEN */

    anzeigen();

  });