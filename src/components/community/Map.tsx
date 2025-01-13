import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainer.current).setView([15, 30], 2);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

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
        .addTo(map);
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
    styleRef.current = style;

    // Force a resize after initialization to ensure proper rendering
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10"
      style={{ zIndex: 0 }}
    />
  );
};

export default Map;