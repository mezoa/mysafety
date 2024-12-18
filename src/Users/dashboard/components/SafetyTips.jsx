import React, { useState } from 'react';
import '../styles/SafetyModal.css';

export const SafetyTipsSection = ({ tips }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="safety-tips-container">
        <div className="safety-tips-header">
          <i className="fas fa-bullhorn warning-icon"></i>
          <h2>Daily Safety Tips</h2>
        </div>
        <div className="day-label">
          <i className="far fa-clock"></i>
          <span>Monday</span>
        </div>
        <div className="tips-content">
          {tips.map((tip, index) => (
            <div key={index} className="tip-item">
              <p>"{tip.tip}"</p>
              <a href="#" onClick={openModal}>Click here</a>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="safety-modal-overlay" onClick={closeModal}>
          <div className="safety-modal" onClick={e => e.stopPropagation()}>
            <i className="fas fa-times modal-close" onClick={closeModal}></i>
            
            <div className="modal-content">
              <div className="modal-header">
                <i className="fas fa-shield-alt"></i>
                <h2>Emergency Preparedness Checklist For School</h2>
              </div>

              <div className="checklist-container">
                <div className="checklist-item">
                  <h3>1. Locate Exits and Safe Zones</h3>
                  <ul>
                    <li>Identify two nearby exits.</li>
                    <li>Note tornado shelters (windowless rooms) and earthquake-safe spots (under desks).</li>
                  </ul>
                </div>

                <div className="checklist-item">
                  <h3>2. Find Fire Safety Equipment</h3>
                  <ul>
                    <li>Locate fire extinguishers and alarms near exits or in hallways.</li>
                  </ul>
                </div>

                <div className="checklist-item">
                  <h3>3. Know Lockdown Hiding Spots</h3>
                  <ul>
                    <li>Identify areas to hide out of sight in your classroom, away from doors and windows.</li>
                  </ul>
                </div>

                <div className="checklist-item">
                  <h3>4. Locate First Aid and AEDs</h3>
                  <ul>
                    <li>Note where first aid kits and AEDs are stored (usually in classrooms, offices, and near the gym).</li>
                  </ul>
                </div>

                <div className="checklist-item">
                  <h3>5. Review Evacuation Meeting Points</h3>
                  <ul>
                    <li>Know the outdoor assembly area for your class after evacuation.</li>
                  </ul>
                </div>

                <div className="reminder-box">
                  <p>Always stay calm, follow instructions, and prioritize safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};