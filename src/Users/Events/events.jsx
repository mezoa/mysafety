import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { eventData } from './Data/eventsData';
import ApplicationModal from './components/ApplicationModal';
import './Events.css';

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="events-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>
            {eventData.hero.title}<br/>
            {eventData.hero.subtitle}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="event-wrapper">
          <h1 className="join-us">{eventData.eventDetails.title}</h1>
          
          <div className="event-description">
            {eventData.eventDetails.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a 
            href="#" 
            className="registration-btn" 
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Registration Form
          </a>

          <div className="event-overview">
            <h2>Event Overview:</h2>
            
            <div className="detail-item">
              <strong>Date:</strong> {eventData.eventDetails.overview.date}
            </div>
            
            <div className="detail-item">
              <strong>Time:</strong> {eventData.eventDetails.overview.time}
            </div>
            
            <div className="detail-item">
              <strong>Location:</strong>
              <ul className="location-details">
                <li>
                  In-person - {eventData.eventDetails.overview.location.inPerson.venue}
                  <span className="note">({eventData.eventDetails.overview.location.inPerson.note})</span>
                </li>
                <li>
                  Online - {eventData.eventDetails.overview.location.online}
                </li>
              </ul>
            </div>

            <div className="relevant-for">
              <strong>Relevant and suitable for:</strong>
              <ul>
                {eventData.eventDetails.targetAudience.map((audience, index) => (
                  <li key={index}>{audience}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Events;
