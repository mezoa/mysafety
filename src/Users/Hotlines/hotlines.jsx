import React from 'react';
import { Navbar } from '../components/Navbar';
import { hotlinesData } from './Data/hotlinesData';
import './Hotlines.css';

const Hotlines = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="hotlines-container">
        <div className="section">
          <div className="section-header">Contact Us</div>
          <div className="contact-info">
            <div className="contact-row">
              <div className="contact-label">Email Address</div>
              <div className="contact-value">{hotlinesData.emailAddress}</div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Address</div>
              <div className="contact-value">{hotlinesData.address}</div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Trunk Line Number</div>
              <div className="contact-value">
                {hotlinesData.trunkLine.number}
                <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.25rem' }}>
                  {hotlinesData.trunkLine.description}
                </div>
              </div>
            </div>
          </div>

          <table className="hotlines-table">
            <thead>
              <tr>
                <th>Local Hotlines</th>
                <th>Number</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {hotlinesData.localHotlines.map((hotline, index) => (
                <tr key={index}>
                  <td>{hotline.unit}</td>
                  <td>{hotline.number}</td>
                  <td>{hotline.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <div className="section-header">FOI Receiving Officers</div>
          {hotlinesData.foiOfficers.map((officer, index) => (
            <div key={index} className="foi-officer">
              <div className="foi-name">{officer.name}</div>
              <div className="foi-position">{officer.position}</div>
              <div className="foi-contact">
                {officer.phone} {officer.local}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotlines;
