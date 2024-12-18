import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { SafetyTipsSection } from '../dashboard/components/SafetyTips';
import { LatestNews } from '../dashboard/components/LatestNews';
import './styles/evac_route.css';
import EvacNewsUpdates from './components/EvacNewsUpdates';

const EvacuationRoute = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(0);

  const buildings = [
    {
      id: 1,
      name: 'College of Engineering and Geosciences',
      image: '/Users/Evac-route/IMG_20241118_112341_651.jpg',
      evacuationMaps: [
        {
          floor: '1st Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        },
        {
          floor: '2nd Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        },
        {
          floor: '3rd Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        },
        {
          floor: '4th Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'College of Education',
      image: '/Users/Evac-route/IMG_20241118_105751_830.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'CSU-Main Library',
      image: '/Users/Evac-route/IMG_20241118_081240_207.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 4,
      name: 'New Admin Building',
      image: '/Users/Evac-route/IMG_20241118_111237_648.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 5,
      name: 'College of Computing and Information Sciences',
      image: '/Users/Evac-route/IMG_20241118_083929_490.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 6,
      name: 'College of Humanities and Social Sciences',
      image: '/Users/Evac-route/IMG_20241118_111520_439.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 7,
      name: 'Masawa Hall',
      image: '/Users/Evac-route/IMG_20241118_112551_741.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    },
    {
      id: 8,
      name: 'Old CHASS',
      image: '/Users/Evac-route/IMG_20241118_112128_027.jpg',
      evacuationMaps: [
        {
          floor: 'Ground Floor',
          map: '/Users/Evac-route/Evac_route.jpg'
        }
      ]
    }
  ];

  // Sample data for other components
  const safetyTips = [
    { tip: "Review the location of the nearest fire extinguisher in your classroom or hallway." },
    { tip: "Keep an updated list of emergency contacts with the school administration." }
  ];

  const newsItems = [
    {
      date: "Today",
      title: "Magnitude 5.1 Earthquake Strikes Agusan del Norte",
      description: "A magnitude 5.1 earthquake rocked Agusan del Norte early Friday morning...",
      link: "#"
    },
    {
      date: "January 5, 2023",
      title: "Patients evacuated after 7.4 magnitude quake in Butuan",
      description: "Residents and medical personnel evacuate patients from a hospital after...",
      link: "#"
    }
  ];

  // Reset floor when closing modal
  const handleCloseModal = () => {
    setSelectedBuilding(null);
    setCurrentFloor(0);
  };

  return (
    <div className="evacuation-page">
      <Navbar />
      <div className="evacuation-content">
        <div className="main-content">
          <section className="buildings-section">
            <div className="buildings-header">
              <i className="fas fa-building"></i>
              <h2>List of Buildings</h2>
            </div>
            <div className="buildings-grid">
              {buildings.map((building) => (
                <div 
                  key={building.id} 
                  className="building-card"
                  onClick={() => setSelectedBuilding(building)}
                >
                  <img src={building.image} alt={building.name} />
                  <h3>{building.name}</h3>
                </div>
              ))}
              <div className="see-more-card">
                <div className="see-more-content">
                  <i className="fas fa-arrow-right"></i>
                  <p>See More</p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="info-sections">
            <LatestNews newsItems={newsItems} />
          </div>
        </div>

        <div className="sidebar">
          <SafetyTipsSection tips={safetyTips} />
          <EvacNewsUpdates />
        </div>
      </div>

      {selectedBuilding && (
        <div className="evacuation-modal-overlay" onClick={handleCloseModal}>
          <div className="evacuation-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedBuilding.name}</h2>
            </div>

            {selectedBuilding.evacuationMaps.length > 1 && (
              <div className="floor-tabs">
                {selectedBuilding.evacuationMaps.map((map, index) => (
                  <button
                    key={index}
                    className={`floor-tab ${currentFloor === index ? 'active' : ''}`}
                    onClick={() => setCurrentFloor(index)}
                  >
                    {map.floor}
                  </button>
                ))}
              </div>
            )}

            <div className="modal-content-wrapper">
              <div className="modal-content">
                <img 
                  src={selectedBuilding.evacuationMaps[currentFloor].map} 
                  alt={`${selectedBuilding.name} evacuation route`} 
                  className="evacuation-map"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvacuationRoute;
