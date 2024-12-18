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
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CHASS',
    name: 'College of Humanities and Social Sciences',
    coordinates: [125.597822, 8.956142],
    images: {
      building: '/Users/Evac-route/IMG_20241118_111520_439.jpg',
      evacuation: '/Users/Evac-route/Evac_route.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CCIS',
    name: 'College of Computer and Information Sciences',
    coordinates: [125.597852, 8.955381],
    images: {
      building: '/Users/Evac-route/IMG_20241118_083929_490.jpg',
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CEGS',
    name: 'College of Engineering and Geosciences',
    coordinates: [125.597914, 8.955004],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112341_651.jpg',
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Masawa Hall',
    name: 'Masawa Hall',
    coordinates: [125.598705, 8.955515],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112551_741.jpg',
      evacuation: '/Users/Evac-route/Evac_route.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU Library',
    name: 'CSU-Main Library',
    coordinates: [125.596329, 8.957795],
    images: {
      building: '/Users/Evac-route/IMG_20241118_081240_207.jpg',
      evacuation: '/Users/Evac-route/Evac_route.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Education Building',
    name: 'College of Education',
    coordinates: [125.596764, 8.959226],
    images: {
      building: '/Users/Evac-route/IMG_20241118_105751_830.jpg',
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'Old Chass',
    name: 'Old CHASS',
    coordinates: [125.596570, 8.955590],
    images: {
      building: '/Users/Evac-route/IMG_20241118_112128_027.jpg',
      evacuation: '/Users/Evac-route/Evac_route.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU Main Auditorium',
    name: 'CSU Main Auditorium',
    coordinates: [125.595590, 8.955989],
    images: {
      building: '/Users/Evac-route/IMG_20241118_081637_880.jpg',
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
    },
    instructions: 'Exit through the main entrance. Proceed to the oval ground assembly area.'
  },
  {
    id: 'CSU-Main Dormitory',
    name: 'CSU-Main Dormitory',
    coordinates: [125.595752, 8.955064],
    images: {
      building: '/Users/Evac-route/IMG_20241118_111841_321.jpg',
      evacuation: '/Users/Evac-route/Evac_route_1st.jpg'
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
          e.stopPropagation(); // Prevent map click from immediately closing popup
          
          if (popup.current) popup.current.remove();
          
          popup.current = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false,
            className: 'building-popup',
            focusAfterOpen: false,
            maxWidth: 'none',
            anchor: 'center',
            offset: 0,
            positionOptions: {
              trackResize: false
            }
          })
            .setLngLat(map.current.getCenter())
            .setHTML(`
              <div class="popup-content">
                <div class="popup-header">
                  <h3>${building.name}</h3>
                </div>
                
                <div class="popup-body">
                  <div class="building-section">
                    <div class="image-container">
                      <img src="${building.images.building}" 
                           alt="${building.name}" 
                           class="building-image" 
                           onerror="this.src='https://via.placeholder.com/300x200?text=Building+Image'"/>
                    </div>
                  </div>

                  <div class="evacuation-section">
                    <h4>Evacuation Route</h4>
                    <div class="image-container">
                      <img src="${building.images.evacuation}" 
                           alt="Evacuation Route" 
                           class="evacuation-image"
                           onerror="this.src='https://via.placeholder.com/300x200?text=Evacuation+Route'"/>
                    </div>
                    <div class="evacuation-instructions">
                      <p>${building.instructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            `)
            .addTo(map.current);
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