import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import './sign-in.css';
import { setUserSession, getUserSession, checkDummyCredentials } from '../../utils/sessionManager';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    idNumber: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const formatIdNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/[^\d]/g, '');
    
    // Only format if we have numbers
    if (cleaned.length > 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 8)}`;
    }
    
    // Return just the cleaned numbers if 3 or fewer digits
    return cleaned;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'idNumber') {
      // Get current and new number of digits
      const currentDigits = formData.idNumber.replace(/[^\d]/g, '');
      const newDigits = value.replace(/[^\d]/g, '');
      
      // Only format if we're adding digits or if the new value has 4 or more digits
      if (newDigits.length >= currentDigits.length || newDigits.length >= 4) {
        const formattedValue = formatIdNumber(value);
        setFormData(prev => ({
          ...prev,
          [name]: formattedValue
        }));
      } else {
        // For deletion, just update with the current value
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate ID number format: XXX-XXXXX
    const idNumberRegex = /^\d{3}-\d{5}$/;
    if (!formData.idNumber) {
      newErrors.idNumber = 'ID number is required';
    } else if (!idNumberRegex.test(formData.idNumber)) {
      newErrors.idNumber = 'Please enter a valid ID number (XXX-XXXXX)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // First check dummy credentials
      const dummyUser = checkDummyCredentials(formData.idNumber, formData.password);
      if (dummyUser) {
        setUserSession({ ...dummyUser, isLoggedIn: true });
        navigate('/dashboard');
        return;
      }

      // Then check regular session storage
      const storedUser = getUserSession();
      if (storedUser && storedUser.idNumber === formData.idNumber) {
        setUserSession({ ...storedUser, isLoggedIn: true });
        navigate('/dashboard');
      } else {
        setErrors({ idNumber: 'Invalid ID number or password' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <span className="greeting">Welcome back!</span>
          <Link to="/signup" className="create-account-link">
            Create an account
          </Link>
        </div>

        <div className="signin-content">
          <div className="signin-form-section">
            <div className="logo-container">
              <img src="/Group 5 LogoYellow.svg" alt="MySafety" />
            </div>
            <h2 className="form-title">Sign In</h2>
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-field">
                <label htmlFor="idNumber" className="field-label">ID Number</label>
                <div className="input-wrapper">
                  <input
                    id="idNumber"
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="000-00000"
                    className={`form-input ${errors.idNumber ? 'error' : ''}`}
                    maxLength="9" // 3 digits + hyphen + 5 digits
                  />
                  {errors.idNumber && <span className="error-message">{errors.idNumber}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password" className="field-label">Password</label>
                <div className="input-wrapper">
                  <div className="password-input">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`form-input ${errors.password ? 'error' : ''}`}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <FaEyeSlash className="toggle-icon" /> : <FaEye className="toggle-icon" />}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
              </div>

              <button type="submit" className="signin-btn">
                Sign in
              </button>
            </form>
          </div>

          <div className="social-login-section">
            <img 
              src="/sign in.jpg" 
              alt="Promotional content" 
              className="promo-image"
            />
          </div>
        </div>

        <div className="signin-footer">
          <Link to="/forgot-password" className="forgot-password-link">
            Can't log in?
          </Link>
          <div className="terms-container">
            <p className="terms-text">
              Secure Login with reCAPTCHA subject to Google 
              <Link to="/terms" className="inline-link"> Terms</Link> & 
              <Link to="/privacy" className="inline-link"> Privacy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
