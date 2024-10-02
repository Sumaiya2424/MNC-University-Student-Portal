const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

// Load environment variables from .env
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());  // For parsing JSON bodies
app.use(cors());  // Enable Cross-Origin requests

// Connect to MongoDB
connectDB();

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Student routes
app.use('/api/students', studentRoutes);

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
