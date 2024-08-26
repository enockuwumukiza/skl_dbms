const { pool:db } = require("../config/db");

const School = {
  addSchool: async (schoolData) => {
    const { name, address, latitude, longitude } = schoolData;
    const [result] = await db.query(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    return result.insertId;
  },
  getAllSchools: async () => {
    const [rows] = await db.query('SELECT * FROM schools');
    return rows;
  }
};

module.exports = School;
