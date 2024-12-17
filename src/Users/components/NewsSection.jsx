import React from 'react';

export const NewsSection = ({ news }) => {
  return (
    <div className="news-section">
      <h2>Latest News</h2>
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <h3>{item.title}</h3>
          <p className="date">{item.date}</p>
          <p>{item.content}</p>
          <a href={item.link}>Read more</a>
        </div>
      ))}
    </div>
  );
}; 