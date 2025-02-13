import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// Basic route check
app.get('/', (req, res) => {
  res.send('Welcome to Movie Night Planner API!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});