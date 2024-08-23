const asyncHandler = require('express-async-handler');
const School = require('../models/school.model');
const { calculateDistance } = require('../utils/geolocation');

const addSchool = asyncHandler(async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({ message: 'Invalid data' });
  }

  const schoolId = await School.addSchool(req.body);
  res.status(201).json({ message: 'School added', schoolId });
});

const listSchools = asyncHandler(async (req, res) => {
  const { latitude, longitude } = req.query;

  if (typeof latitude === 'undefined' || typeof longitude === 'undefined') {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
  }

  const schools = await School.getAllSchools();

  const sortedSchools = schools.map(school => {
    const distance = calculateDistance(latitude, longitude, school.latitude, school.longitude);
    return { ...school, distance };
  }).sort((a, b) => a.distance - b.distance);

  res.json({ schools: sortedSchools });
});

module.exports = { addSchool, listSchools };
