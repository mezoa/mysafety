import React from 'react';

export const LatestNews = ({ newsItems }) => {
  return (
    <div className="news-section">
      <div className="news-header">
        <div className="news-title-wrapper">
          <i className="fas fa-newspaper"></i>
          <h2 style={{ color: '#FFBA00' }}>Latest News</h2>
        </div>
      </div>
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <div className="news-date">
            <i className="far fa-clock"></i>
            <span>{item.date}</span>
          </div>
          <h3 style={{ 
            color: '#0C3B2E',
            fontWeight: '600',
            fontSize: '16px',
            marginBottom: '8px'
          }}>
            {item.title}
          </h3>
          <p>{item.description}</p>
          <a href={item.link}>
            <i className="fas fa-arrow-right"></i> See more
          </a>
        </div>
      ))}
      <button className="show-more">
        <i className="fas fa-plus"></i> Show more
      </button>
    </div>
  );
};

export const NewsItem = ({ item }) => (
  <div className="notification-item">
    <div className="notification-title">{item.title}</div>
    <div className="notification-date">
      <i className="far fa-clock"></i>
      <span>{item.date}</span>
    </div>
  </div>
); 