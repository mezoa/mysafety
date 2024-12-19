const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create applications directory if it doesn't exist
const applicationsDir = path.join(__dirname, 'applications');
if (!fs.existsSync(applicationsDir)) {
  fs.mkdirSync(applicationsDir);
}

// API endpoint to handle application submissions
app.post('/api/submit-application', (req, res) => {
  try {
    const application = req.body;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `application_${timestamp}.txt`;
    const filePath = path.join(applicationsDir, fileName);

    // Format the application data
    const applicationContent = `
Application Details:
-------------------
First Name: ${application.firstName}
Last Name: ${application.lastName}
ID Number: ${application.idNumber}
Email: ${application.email}
Contact Number: ${application.contactNumber}
Submission Date: ${new Date().toLocaleString()}
===================
    `.trim();

    // Write to file
    fs.writeFileSync(filePath, applicationContent);

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Failed to save application' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 