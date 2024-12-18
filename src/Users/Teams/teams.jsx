import React from 'react';
import { Navbar } from '../components/Navbar';
import { teamsData } from './Data/teamsData';
import './Teams.css';

const Teams = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="teams-container">
        <img 
          src="/Users/Teams/Picture1.jpg" 
          alt="Emergency Response Team" 
          className="hero-image"
        />

        <div className="content-section">
          <h2 className="section-title">{teamsData.definition.title}</h2>
          <p className="section-content">{teamsData.definition.content}</p>
          <p className="section-content">{teamsData.definition.additionalInfo}</p>
        </div>

        <div className="content-section">
          <h2 className="section-title">{teamsData.roles.title}</h2>
          <p className="section-content">{teamsData.roles.description}</p>
          
          <div className="roles-grid">
            {teamsData.roles.teamRoles.map((role, index) => (
              <div key={index} className="role-card">
                <h3 className="role-title">{role.title}</h3>
                <p className="role-description">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
