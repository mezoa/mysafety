import React from 'react';

export const NewsUpdates = ({ updates }) => {
  return (
    <div className="news-updates">
      <h2>News and Updates</h2>
      {updates.map((update, index) => (
        <div key={index} className="update-item">
          <img src={update.image} alt={update.title} />
          <div className="update-content">
            <h3>{update.title}</h3>
            <p>{update.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}; 