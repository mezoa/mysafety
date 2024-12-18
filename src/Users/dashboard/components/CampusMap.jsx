import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2pwYWRzMTIwIiwiYSI6ImNtNHF2cGM5bTE3aWQyeXE0bWYwbWI3ZW8ifQ.au67dr35mj7VtbQn6X1xbQ';

// Map style options
const mapStyles = [
  { name: 'Satellite', style: 'mapbox://styles/mapbox/satellite-v9' },
  { name: 'Streets', style: 'mapbox://styles/mapbox/streets-v12' },
  { name: 'Hybrid', style: 'mapbox://styles/mapbox/satellite-streets-v12' }
];

// Updated buildings data with more precise coordinates
const buildings = [
  {
    id: 'admin',
    name: 'CSU Main New Admin Building',
    coordinates: [125.597619, 8.957245], // [longitude, latitude]
    images: {
      building: '/Users/Evac-route/IMG_20241118_111237_648.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CHASS',
    name: 'College of Humanities and Social Sciences',
    coordinates: [125.597822, 8.956142],
    images: {
      building: '/Users/Evac-route/IMG_20241118_111520_439.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CCIS',
    name: 'College of Computer and Information Sciences',
    coordinates: [125.597852, 8.955381],
    images: {
      building: '/Users/Evac-route/IMG_20241118_083929_490.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CEGS',
    name: 'College of Engineering and Geosciences',
    coordinates: [125.597914, 8.955004],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112341_651.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Masawa Hall',
    name: 'Masawa Hall',
    coordinates: [125.598705, 8.955515],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112551_741.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU Library',
    name: 'CSU-Main Library',
    coordinates: [125.596329, 8.957795],
    images: {
      building: '/Users/Evac-route/IMG_20241118_081240_207.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Education Building',
    name: 'College of Education',
    coordinates: [125.596764, 8.959226],
    images: {
      building: '/Users/Evac-route/IMG_20241118_105751_830.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Old Chass',
    name: 'Old CHASS',
    coordinates: [125.596570, 8.955590],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112128_027.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU Main Auditorium',
    name: 'CSU Main Auditorium',
    coordinates: [125.595590, 8.955989],
    images: {
      building: '/Users/Evac-route/IMG_20241118_081637_880.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU-Main Dormitory',
    name: 'CSU-Main Dormitory',
    coordinates: [125.595752, 8.955064],
    images: {
      building: '/Users/Evac-route/IMG_20241118_111841_321.jpg',
      evacuation: '/evacuation-routes/admin-building.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  }
];

export const CampusMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const popup = useRef(null);
  const [currentStyle, setCurrentStyle] = useState(mapStyles[0]);

  // Function to change map style
  const changeMapStyle = (styleOption) => {
    if (map.current) {
      map.current.setStyle(styleOption.style);
      setCurrentStyle(styleOption);
    }
  };

  useEffect(() => {
    if (map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: currentStyle.style,
      center: [125.597619, 8.957245], // CSU Main center coordinates
      zoom: 17,
      pitch: 0, // Set pitch to 0 for 2D view
      bearing: 0 // Set bearing to 0 for north-up orientation
    });

    // Add controls
    map.current.on('load', () => {
      // Add navigation control
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add markers
      buildings.forEach(building => {
        const marker = new mapboxgl.Marker({
          color: '#FF0000',
          scale: 0.8
        })
          .setLngLat(building.coordinates)
          .addTo(map.current);

        // Add click event to marker
        marker.getElement().addEventListener('click', (e) => {
          e.stopPropagation();
          
          if (popup.current) popup.current.remove();
          
          popup.current = new mapboxgl.Popup({
            maxWidth: '500px',
            closeButton: true,
            closeOnClick: true,
            className: 'centered-modal',
            focusAfterOpen: false,
          })
            .setLngLat(building.coordinates)
            .setHTML(`
              <div class="modal-content">
                <div class="modal-header">
                  <div class="header-content">
                    <h2>${building.name}</h2>
                    <div class="location-badge">
                      <i class="fas fa-map-marker-alt"></i>
                      CSU Main Campus
                    </div>
                  </div>
                </div>
                
                <div class="modal-body">
                  <div class="image-gallery">
                    <div class="main-image">
                      <img src="${building.images.building}" 
                           alt="${building.name}" 
                           class="building-image" 
                           loading="eager"
                           onerror="this.src='https://via.placeholder.com/300x200?text=Building+Image'"/>
                      <div class="image-label">Building View</div>
                    </div>
                  </div>

                  <div class="evacuation-info">
                    <div class="info-header">
                      <i class="fas fa-route"></i>
                      <h3>Evacuation Information</h3>
                    </div>
                    
                    <div class="evacuation-details">
                      <div class="route-image">
                        <img src="${building.images.evacuation}" 
                             alt="Evacuation Route" 
                             class="evacuation-image"
                             loading="eager"
                             onerror="this.src='https://via.placeholder.com/300x200?text=Evacuation+Route'"/>
                        <div class="image-label">Evacuation Route</div>
                      </div>
                      
                      <div class="instructions-box">
                        <div class="instructions-header">
                          <i class="fas fa-info-circle"></i>
                          <h4>Emergency Instructions</h4>
                        </div>
                        <p>${building.instructions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `);

          requestAnimationFrame(() => {
            popup.current.addTo(map.current);
          });
        });
      });

      // Add click handler to map to close popup when clicking outside
      map.current.on('click', () => {
        if (popup.current) {
          popup.current.remove();
        }
      });
    });

    // Error handling
    map.current.on('error', (e) => {
      console.error('Map error:', e);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="campus-map-container">
      {/* Map Style Controls */}
      <div className="map-style-controls">
        {mapStyles.map((style) => (
          <button
            key={style.name}
            className={`map-style-button ${currentStyle.name === style.name ? 'active' : ''}`}
            onClick={() => changeMapStyle(style)}
          >
            {style.name}
          </button>
        ))}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}; 