import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = ({ mapboxToken }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    mapboxgl.accessToken = mapboxToken;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [125.5977, 8.9467], // Caraga State University coordinates
      zoom: 17
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add markers for important locations
    const locations = [
      {
        coordinates: [125.5977, 8.9467],
        name: 'Main Building'
      },
      // Add more locations as needed
    ];

    locations.forEach(location => {
      new mapboxgl.Marker({
        color: '#FF0000'
      })
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`))
        .addTo(map.current);
    });

    // Cleanup
    return () => map.current?.remove();
  }, [mapboxToken]);

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: '100%', 
        height: '400px',
        borderRadius: '8px',
        overflow: 'hidden'
      }} 
    />
  );
}; 