import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../../utils/sessionManager';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const userData = getUserSession();
    if (userData && userData.isLoggedIn) {
      setUser(userData);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

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