import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([15, 30], 2);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Add markers for community members
    const markers = [
      { coordinates: [40.7, -74], title: "New York" },
      { coordinates: [51.5072, -0.1276], title: "London" },
      { coordinates: [35.6895, 139.6917], title: "Tokyo" },
      { coordinates: [48.8566, 2.3522], title: "Paris" },
      { coordinates: [-33.8688, 151.2093], title: "Sydney" },
    ];

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div class="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>`,
      iconSize: [16, 16],
    });

    markers.forEach(marker => {
      L.marker([marker.coordinates[0], marker.coordinates[1]], { icon: customIcon })
        .bindPopup(`<h3 class="font-semibold">${marker.title}</h3>`)
        .addTo(map.current!);
    });

    // Add dark mode styling
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-tile-pane {
        filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
      }
      .leaflet-container {
        background: #1a1b1e;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      map.current?.remove();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default Map;