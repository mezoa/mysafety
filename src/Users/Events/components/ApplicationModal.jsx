import React from 'react';
import './ApplicationModal.css';

const ApplicationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Application Form</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <div className="name-inputs">
              <div>
                <input type="text" placeholder="First name" required />
                <span className="input-label">First name</span>
              </div>
              <div>
                <input type="text" placeholder="Last name" required />
                <span className="input-label">Last name</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>ID Number</label>
            <input type="text" placeholder="ex. 211-02009" required style={{ width: '95%' }} />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="ex. cj.pds120@gmail.com" required style={{ width: '95%' }} />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" placeholder="ex. 09923804733" required style={{ width: '95%' }} />
          </div>

          <button type="submit" className="submit-button">Submit Application</button>
        </form>
      </div>a
    </div>
  );
};

export default ApplicationModal; 