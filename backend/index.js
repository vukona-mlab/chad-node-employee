const express = require('express');
const cors = require('cors');
require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json());


// Get all employees
app.get('/', async (req, res) => {
  try {
    res.status(200).json({ data: 500 });
  } catch (error) {
    res.status(500).send('Error fetching employees');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
