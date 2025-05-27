const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

dotenv.config();
connectDb();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Body parser

// Test route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is live' });
});

//Server listen
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})