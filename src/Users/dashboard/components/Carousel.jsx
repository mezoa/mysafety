import React, { useState, useEffect } from 'react';

export const CarouselSection = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-section">
      <div className="hero-section">
        <div className="carousel-overlay"></div>
        <button className="carousel-nav prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <div className="carousel-content">
          <img 
            src={items[currentIndex].image} 
            alt={items[currentIndex].title} 
            className="carousel-image"
          />
          <div className="carousel-text">
            <h1>Stay Safe with</h1>
            <h1>our Evacuation Routes</h1>
          </div>
        </div>
        <button className="carousel-nav next" onClick={nextSlide}>
          <span>›</span>
        </button>
      </div>
    </section>
  );
};
