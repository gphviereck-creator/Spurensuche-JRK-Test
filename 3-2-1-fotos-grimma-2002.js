/* ==============================
   FOTOGALERIE - SPURENSUCHE
   ============================== */

/*
  Hier werden die Bilderstrecken
  und ihre Fotos eingetragen.
*/

const bilderstrecken = {

  /* GRIMMA 2002 - BILDERSTRECKE 1 */

  "grimma-innenstadt": [

    {
      datei: "Grimma-2002-2.png",
      titel: "B1",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-5.png",
      titel: "B2",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-6.png",
      titel: "B3",
      beschreibung: "..."
    },

    {
      datei: "Grimma-Pöppelmanbrücke-2002-1.png",
      titel: "B4",
      beschreibung: "..."
    },

    {
      datei: "Grimma-Pöppelmanbrücke-2002-2.png",
      titel: "B5",
      beschreibung: "..."
    }

  ],


  /* GRIMMA 2002 - BILDERSTRECKE 2 */

  "grimma-bruecke": [

    {
      datei: "Grimma-2002-1.png",
      titel: "B6",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-3.png",
      titel: "B7",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-4.png",
      titel: "B8",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-7.png",
      titel: "B9",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-8.png",
      titel: "B10",
      beschreibung: "..."
    },

    {
      datei: "Grimma-2002-9.png",
      titel: "B11",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-10.png",
      titel: "B12",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-11.png",
      titel: "B13",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-12.jpg",
      titel: "B14",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-13.jpg",
      titel: "B15",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-14.jpg",
      titel: "B16",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-15.jpg",
      titel: "B17",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-16.jpg",
      titel: "B18",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-17.jpg",
      titel: "B19",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-18.jpg",
      titel: "B20",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-19.jpg",
      titel: "B21",
      beschreibung: "..."
    },

     {
      datei: "Grimma-2002-20.jpg",
      titel: "B22",
      beschreibung: "..."
    },

  ]

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
