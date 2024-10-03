const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();



app.use(cors({
  origin: ['https://mnc-university-student-portal.vercel.app'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true 
}));
app.use(express.json());  
app.use(cors());  

connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/api/students', studentRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
