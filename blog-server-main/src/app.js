const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: '*', // allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allow any HTTP method
    allowedHeaders: ['Content-Type', 'Authorization'], // allow headers
    credentials: true, // allow credentials (e.g. cookies)
    maxAge: 3600, // cache CORS configuration for 1 hour
  };
  
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));