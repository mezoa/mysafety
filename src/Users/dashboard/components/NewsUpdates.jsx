import React from 'react';

const NewsUpdates = ({ updates }) => {
  return (
    <div className="news-updates-section">
      <div className="news-updates-header">
        <i className="far fa-newspaper news-icon"></i>
        <h2 style={{ color: '#FFBA00' }}>News and Updates</h2>
      </div>
      <div className="updates-list">
        {updates.map((update, index) => (
          <div key={index} className="update-item">
            <div className="update-date">
              <i className="far fa-calendar-alt"></i>
              <span>{update.date}</span>
            </div>
            <div className="update-content">
              <img src={update.image} alt={update.title} className="update-image" />
              <div className="update-text">
                <h3 style={{ color: '#0C3B2E' }}>{update.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdates; 