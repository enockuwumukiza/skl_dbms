require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2')
const schoolRoutes = require('./routes/school.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes);



const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port:process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
  connection.end();
});

app.get('/', (req, res) => {
  res.send('<h1>School Management API</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
