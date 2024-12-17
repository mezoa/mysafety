import React from 'react';

export const LatestNews = ({ newsItems }) => {
  return (
    <div className="news-section">
      <div className="news-header">
        <i className="fas fa-newspaper"></i>
        <h2>Latest News</h2>
      </div>
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <div className="news-date">
            <i className="far fa-clock"></i>
            <span>{item.date}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link}>
            <i className="fas fa-arrow-right"></i> see more
          </a>
        </div>
      ))}
      <button className="show-more">
        <i className="fas fa-plus"></i> Show more
      </button>
    </div>
  );
}; 