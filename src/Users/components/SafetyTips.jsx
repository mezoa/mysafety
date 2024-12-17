import React from 'react';

export const SafetyTipsSection = ({ tips }) => {
  return (
    <div className="safety-tips-container">
      <div className="safety-tips-header">
        <i className="fas fa-shield-alt warning-icon"></i>
        <h2>Daily Safety Tips</h2>
      </div>
      <div className="day-label">
        <i className="far fa-calendar-alt calendar-icon"></i>
        <span>Monday</span>
      </div>
      <div className="tips-content">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <i className="fas fa-info-circle tip-icon"></i>
            <p>"{tip.tip}"</p>
            <a href={tip.link}>
              <i className="fas fa-arrow-right"></i> Click here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}; 