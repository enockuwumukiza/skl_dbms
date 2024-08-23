require('dotenv').config();
const express = require('express');
const cors = require('cors');
const schoolRoutes = require('./routes/school.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes);

app.get('/', (req, res) => {
  res.send('<h1>School Management API</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
