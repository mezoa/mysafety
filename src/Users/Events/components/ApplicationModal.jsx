import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  Button, 
  IconButton, 
  Box, 
  Grid 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ApplicationModal.css';

const ApplicationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    contactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      try {
        const response = await fetch('http://localhost:5000/api/submit-application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            idNumber: formData.idNumber,
            email: formData.email,
            contactNumber: formData.contactNumber
          })
        });

        if (response.ok) {
          alert('Application submitted successfully!');
          
          // Reset form and close modal
          setFormData({
            firstName: '',
            lastName: '',
            idNumber: '',
            email: '',
            contactNumber: ''
          });
          onClose();
        } else {
          alert('Failed to submit application');
        }
      } catch (error) {
        console.error('Error submitting application:', error);
        alert('Error submitting application');
      }
    } else {
      form.reportValidity();
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: '16px',
          maxWidth: '500px',
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          bgcolor: '#0C3B2E',
          color: 'white',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '22px', fontWeight: 600 }}>Application Form</span>
        <IconButton 
          onClick={onClose}
          sx={{ 
            color: 'white',
            p: 0.5,
            '&:hover': { 
              opacity: 0.8 
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2.5, pt: 2.5 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            {/* Name Fields */}
            <Grid item xs={12}>
              <Box sx={{ mb: 0.5, fontWeight: 500 }}>Name</Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    placeholder="First name"
                    variant="outlined"
                    size="small"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    placeholder="Last name"
                    variant="outlined"
                    size="small"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* ID Number Field */}
            <Grid item xs={12}>
              <Box sx={{ mb: 0.5, fontWeight: 500 }}>ID Number</Box>
              <TextField
                fullWidth
                required
                placeholder="Enter your student ID (e.g., 211-02009)"
                variant="outlined"
                size="small"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f8f9fa'
                  }
                }}
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12}>
              <Box sx={{ mb: 0.5, fontWeight: 500 }}>Email Address</Box>
              <TextField
                fullWidth
                required
                type="email"
                placeholder="Enter your email address"
                variant="outlined"
                size="small"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f8f9fa'
                  }
                }}
              />
            </Grid>

            {/* Contact Number Field */}
            <Grid item xs={12}>
              <Box sx={{ mb: 0.5, fontWeight: 500 }}>Contact Number</Box>
              <TextField
                fullWidth
                required
                type="tel"
                placeholder="Enter your contact number"
                variant="outlined"
                size="small"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f8f9fa'
                  }
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: '#FFBA00',
                  py: 1.2,
                  fontSize: '15px',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: '#e5a800'
                  }
                }}
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal; 