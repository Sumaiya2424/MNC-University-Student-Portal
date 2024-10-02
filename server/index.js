const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

app.use(express.json());  // For parsing JSON bodies
app.use(cors());  // Enable Cross-Origin requests

connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/api/students', studentRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
