require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')
const schoolRoutes = require('./routes/school.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
