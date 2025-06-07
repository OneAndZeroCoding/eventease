
const express = require('express');
const dotenv = require('dotenv'); 
const connectDB = require('./config/db');

dotenv.config();      // Load environment variables
connectDB();          // Connect to MongoDB

const app = express();         
app.use(express.json());   // Parses incoming json

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

//routes
const userRoutes = require("./routes/userRoutes");
app.use('/auth/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
