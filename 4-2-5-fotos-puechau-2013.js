/* ==============================
   FOTOGALERIE - SPURENSUCHE
   ============================== */

/*
  Hier werden die Bilderstrecken
  und ihre Fotos eingetragen.
*/

const bilderstrecken = {

  /* BILDERSTRECKE 1 */

  "püchau": [

    {
      datei: "Püchau-2013-1.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-2.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-3.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-4.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-5.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-6.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-7.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-8.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-9.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-10.JPG",
      titel: "...",
      beschreibung: "..."
    },

    {
      datei: "Püchau-2013-11.JPG",
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