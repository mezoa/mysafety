import React from 'react';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
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