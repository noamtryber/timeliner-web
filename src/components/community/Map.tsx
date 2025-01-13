import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1Ijoibm9hbXRyeWJlciIsImEiOiJjbHRxbGZlNmQwMGJqMmtvOWd4ZGNxZnF4In0.YeqHpUZs4_u1RsHYMaXk7g';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: 1.5,
      center: [30, 15] as [number, number],
      projection: 'globe',
      pitch: 45,
    });

    // Add markers for community members
    const markers: Array<{ coordinates: [number, number]; title: string }> = [
      { coordinates: [-74, 40.7], title: "New York" },
      { coordinates: [-0.1276, 51.5072], title: "London" },
      { coordinates: [139.6917, 35.6895], title: "Tokyo" },
      { coordinates: [2.3522, 48.8566], title: "Paris" },
      { coordinates: [151.2093, -33.8688], title: "Sydney" },
    ];

    markers.forEach(marker => {
      new mapboxgl.Marker({ color: "#9b87f5" })
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${marker.title}</h3>`))
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      map.current?.remove();
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