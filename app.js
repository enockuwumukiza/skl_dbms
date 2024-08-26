require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const schoolRoutes = require('./routes/school.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes);

app.get('/',(req,res) =>{
  res.sendFile(path.join(__dirname, 'views','index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
