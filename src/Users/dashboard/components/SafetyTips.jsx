import React from 'react';

export const SafetyTipsSection = ({ tips }) => {
  return (
    <section className="safety-tips-container">
      <div className="safety-tips-header">
        <span className="warning-icon">⚠️</span>
        <h2>Daily Safety Tips</h2>
      </div>
      <div className="day-label">Monday</div>
      <div className="tips-content">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <p>"{tip.tip}"</p>
            <a href={tip.link}>Click here</a>
          </div>
        ))}
      </div>
    </section>
  );
};