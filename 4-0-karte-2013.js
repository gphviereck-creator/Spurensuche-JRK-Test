// KARTE HOCHWASSER 2013

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
// ERFAHRUNGSBERICHTE 2013

neuerMarker(
  "berichte",
  [51.2333, 12.7197],
  "Erfahrungsberichte aus Grimma",
  "4-1-1-erfahrungsberichte-grimma-2013.html"
);

neuerMarker(
  "berichte",
  [51.2439, 12.7550],
  "Erfahrungsberichte aus Dorna",
  "4-1-2-erfahrungsberichte-dorna-2013.html"
);

neuerMarker(
  "berichte",
  [51.3351, 12.5472],
  "Erfahrungsberichte aus Zweenfurth",
  "4-1-3-erfahrungsberichte-zweenfuhrt-2013.html"
);

neuerMarker(
  "berichte",
  [51.347, 12.527],
  "Erfahrungsberichte aus Kleinpösna",
  "4-1-4-erfahrungsberichte-kleinpoesna-2013.html"
);

neuerMarker(
  "berichte",
  [51.350, 12.540],
  "Erfahrungsberichte aus Borsdorf",
  "4-1-5-erfahrungsberichte-borsdorf-2013.html"
);

// Fotos 2013
neuerMarker(
  "fotos",
  [51.2333, 12.7197],
  "Fotos aus Grimma 2013",
  "4-2-1-fotos-grimma-2013.html"
);

neuerMarker(
  "fotos",
  [51.2281, 12.7257],
  "Fotos der Hängebrücke Grimma 2013",
  "4-2-2-fotos-haengebruecke-2013.html"
);

neuerMarker(
  "fotos",
  [51.3351, 12.5472],
  "Fotos aus Zweenfurth 2013",
  "4-2-3-fotos-zweenfuhrt-2013.html"
);

neuerMarker(
  "fotos",
  [51.3500, 12.5400],
  "Fotos aus Borsdorf 2013",
  "4-2-4-fotos-borsdorf-2013.html"
);

neuerMarker(
  "fotos",
  [51.3760, 12.6700],
  "Fotos aus Püchau 2013",
  "4-2-5-fotos-puechau-2013.html"
);

