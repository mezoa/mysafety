import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Users/yellowlogo.png" alt="MySafety" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/evacuation-routes" 
            className={`nav-link ${location.pathname === '/evacuation-routes' ? 'active' : ''}`}
          >
            Evacuation Routes
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
          >
            Events
          </Link>
          <Link 
            to="/hotlines" 
            className={`nav-link ${location.pathname === '/hotlines' ? 'active' : ''}`}
          >
            Hotlines
          </Link>
          <Link 
            to="/response-team" 
            className={`nav-link ${location.pathname === '/response-team' ? 'active' : ''}`}
          >
            Response Team
          </Link>
        </div>
        <div className="navbar-user">
          <i className="fas fa-globe language-icon"></i>
          <span className="user-name">Hakdog</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
}; 