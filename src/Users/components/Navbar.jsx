import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Users/logo.png" alt="MySafety" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/evacuation-routes" className="nav-link">Evacuation Routes</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/hotlines" className="nav-link">Hotlines</Link>
          <Link to="/response-team" className="nav-link">Response Team</Link>
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