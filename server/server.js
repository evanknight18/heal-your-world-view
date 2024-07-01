require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/podcasts', require('./routes/podcastRoutes'));
app.use('/api/coaching', require('./routes/coachingRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
