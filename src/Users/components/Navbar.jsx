import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../../utils/sessionManager';
import { NewsItem } from '../dashboard/components/LatestNews';
import { notificationItems } from './NotificationData';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userData = getUserSession();
    if (userData && userData.isLoggedIn) {
      setUser(userData);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    clearUserSession();
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/dashboard">
            <img src="/Users/yellowlogo.png" alt="MySafety" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link 
            to="/dashboard" 
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
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
        <div className="notifications-dropdown" ref={dropdownRef}>
          <div 
            className="notification-icon" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className="fas fa-bell"></i>
          </div>
          {showNotifications && (
            <div className="notifications-menu">
              <h3 className="notifications-header">Notifications</h3>
              {notificationItems.map((item, index) => (
                <div key={index} className="notification-item">
                  <div className="notification-title">{item.title}</div>
                  <div className="notification-date">
                    <i className="far fa-clock"></i>
                    <span>{item.date}</span>
                  </div>
                  <div className="notification-description">{item.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="navbar-user">
          <i className="fas fa-globe language-icon"></i>
          <div 
            className="user-dropdown"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="user-name">
              {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
            </span>
            <span className="dropdown-arrow">▼</span>
            
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleSignOut} className="sign-out-btn">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 