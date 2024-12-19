import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './sign-up.css';
import { setUserSession, isDummyUser } from '../../utils/sessionManager';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    idNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState({});

  const formatIdNumber = (value) => {
    const cleaned = value.replace(/[^\d]/g, '');
    
    if (cleaned.length > 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 8)}`;
    }
    
    return cleaned;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'idNumber') {
      const currentDigits = formData.idNumber.replace(/[^\d]/g, '');
      const newDigits = value.replace(/[^\d]/g, '');
      
      if (newDigits.length >= currentDigits.length || newDigits.length >= 4) {
        const formattedValue = formatIdNumber(value);
        setFormData(prev => ({
          ...prev,
          [name]: formattedValue
        }));
      } else {
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

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // ID Number validation
    const idNumberRegex = /^\d{3}-\d{5}$/;
    if (!formData.idNumber) {
      newErrors.idNumber = 'ID number is required';
    } else if (!idNumberRegex.test(formData.idNumber)) {
      newErrors.idNumber = 'Please enter a valid ID number (XXX-XXXXX)';
    } else if (isDummyUser(formData.idNumber)) {
      newErrors.idNumber = 'This ID number is already registered';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Store user data in session
      setUserSession({
        idNumber: formData.idNumber,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName
      });
      navigate('/signin');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-header">
          <Link to="/signin" className="back-link">
            Already have an account? Sign in
          </Link>
        </div>

        <div className="signin-content">
          <div className="social-login-section">
            <img 
              src="/sign in.jpg" 
              alt="Promotional content" 
              className="promo-image"
            />
          </div>

          <div className="signup-form-section">
            <div className="logo-container">
              <img src="/Group 5 LogoYellow.svg" alt="MySafety" />
            </div>
            <h2 className="form-title">Create Account</h2>
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="name-fields-container">
                <div className="form-field">
                  <label htmlFor="firstName" className="field-label">First Name</label>
                  <div className="input-wrapper">
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="lastName" className="field-label">Last Name</label>
                  <div className="input-wrapper">
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email" className="field-label">Email</label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

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
                    maxLength="9"
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
                      className={`form-input ${errors.password ? 'error' : ''}`}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="confirmPassword" className="field-label">Confirm Password</label>
                <div className="input-wrapper">
                  <div className="password-input">
                    <input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>

              <button type="submit" className="signin-btn">
                Create Account
              </button>
            </form>
          </div>
        </div>

        <div className="signin-footer">
          <div className="terms-container">
            <p className="terms-text">
              By creating an account, you agree to our
              <Link to="/terms" className="inline-link"> Terms</Link> & 
              <Link to="/privacy" className="inline-link"> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
