import React from 'react';
import '../styles/EvacNewsUpdates.css';

const EvacNewsUpdates = () => {
  const updates = [
    {
      date: 'October 12, 2024',
      image: '/Users/Dashboard/Picture1.png',
      title: 'CSU Joins National Simultaneous Earthquake Drill'
    },
    {
      date: 'October 9, 2024',
      image: '/Users/Dashboard/Picture2.png',
      title: 'GAD forwards gender-responsiveness in National Disaster Month'
    },
    {
      date: 'October 8, 2024',
      image: '/Users/Dashboard/Picture3.png',
      title: 'CSU and DOST launch Geo-Safer Mindanao Project'
    }
  ];

  return (
    <div className="evac-news-updates-section">
      <div className="evac-news-updates-header">
        <i className="far fa-newspaper news-icon"></i>
        <h2>News and Updates</h2>
      </div>
      <div className="evac-updates-list">
        {updates.map((update, index) => (
          <div key={index} className="evac-update-item">
            <div className="evac-update-date">
              <i className="far fa-calendar-alt"></i>
              <span>{update.date}</span>
            </div>
            <div className="evac-update-content">
              <img 
                src={update.image} 
                alt={update.title} 
                className="evac-update-image"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = '/Users/Dashboard/fallback-image.png'; // Optional: provide a fallback image
                }}
              />
              <div className="evac-update-text">
                <h3>{update.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="evac-see-more">
        <button className="evac-see-more-btn">
          <i className="fas fa-arrow-right"></i>
          <span>See more updates</span>
        </button>
      </div>
    </div>
  );
};

export default EvacNewsUpdates; 