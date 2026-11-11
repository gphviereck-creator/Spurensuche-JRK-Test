// KARTE HOCHWASSER 2002

// Forschungsgebiet zwischen Wurzen und Grimma
const forschungsgebiet = [
    [51.38, 12.68],
    [51.22, 12.77]
];

// Karte erstellen
const karte = L.map("karte", {
    zoomControl: true
});

// OpenStreetMap einbinden
L.tileLayer(
    "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap-Mitwirkende</a>',
        maxZoom: 19
    }
).addTo(karte);

// Forschungsgebiet vollständig anzeigen
karte.fitBounds(forschungsgebiet);

// MARKERSYSTEM SPURENSUCHE

// Drei Markertypen
const markerFarben = {
  fotos: "#82C5EB",
  berichte: "#287DB7",
  fakten: "#123F70"
};

// Symbole für die Marker
const markerSymbole = {
  fotos: "📷",
  berichte: "💬",
  fakten: "ℹ"
};

// Pinnadel erstellen
function erstelleMarkerIcon(typ) {
  const farbe = markerFarben[typ];
  const symbol = markerSymbole[typ];

  return L.divIcon({
    className: "marker-pin marker-" + typ,
    html: `
      <svg width="36" height="48"
           viewBox="0 0 80 104">
        <path
          d="M40 3 C19 3 6 19 6 40
             C6 63 25 82 40 101
             C55 82 74 63 74 40
             C74 19 61 3 40 3Z"
          fill="${farbe}"
          stroke="white"
          stroke-width="3"
        />
        <circle cx="40" cy="39" r="19"
                fill="white"/>
        <text x="40" y="48"
              text-anchor="middle"
              font-size="25">${symbol}</text>
      </svg>
    `,
    iconSize: [36, 48],
    iconAnchor: [18, 48]
  });
}

// Funktion zum Hinzufügen neuer Marker
function neuerMarker(typ, koordinaten, beschriftung, link) {

  const marker = L.marker(koordinaten, {
    icon: erstelleMarkerIcon(typ)
  }).addTo(karte);

  marker.bindTooltip(beschriftung, {
    direction: "top",
    offset: [0, -40]
  });

  marker.on("click", function () {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  });

  return marker;
}
// ERFAHRUNGSBERICHTE 2002

neuerMarker(
  "berichte",
  [51.2333, 12.7197],
  "Erfahrungsberichte aus Grimma",
  "3-1-1-erfahrungsberichte-grimma-2002.html"
);
neuerMarker(
  "berichte",
  [51.3707, 12.7394],
  "Erfahrungsberichte aus Wurzen",
  "3-1-2-erfahrungsberichte-wurzen-2002.html"
);
neuerMarker(
  "berichte",
  [51.3600, 12.7130],
  "Erfahrungsberichte aus Bennewitz",
  "3-1-3-erfahrungsberichte-bennewitz-2002.html"
);

// FOTOMARKER 2002

neuerMarker(
  "fotos",
  [51.2333, 12.7197],
  "Fotos aus Grimma",
  "3-2-1-fotos-grimma-2002.html"
);
neuerMarker(
  "fotos",
  [51.3707, 12.7394],
  "Fotos aus Wurzen",
  "3-2-2-fotos-wurzen-2002.html"
);
neuerMarker(
  "fotos",
  [51.3600, 12.7130],
  "Fotos aus Bennewitz",
  "3-2-3-fotos-bennewitz-2002.html"
);
neuerMarker(
  "fotos",
  [51.2895, 12.7518],
  "Fotos aus Trebsen",
  "3-2-4-fotos-trebsen-2002.html"
);





