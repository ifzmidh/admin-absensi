import express from "express";
import cors from "cors";
import mysql from "mysql2";
import { Sequelize, DataTypes } from "sequelize";

const app = express();
const port = 3000;

const sequelize = new Sequelize("absensi", "root", "", {
  host: "localhost",
  dialect: "mysql", // Menggunakan MySQL
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

import users from "./src/models/users.js";
import division from "./src/models/division.js";
import roles from "./src/models/roles.js";
import workLocation from "./src/models/work_location.js";
import workShift from "./src/models/work_shift.js";

[users, division, roles, workLocation, workShift].map((model) =>
  model(sequelize, DataTypes)
);

// Opsi sinkronisasi
(async () => {
  try {
    await sequelize.sync({ alter: true }); // Mengubah tabel jika sudah ada
    console.log("Model User berhasil disinkronkan dengan database.");
  } catch (error) {
    console.error("Gagal sinkronisasi model dengan database:", error);
  }
})();

// Replace these values with your own MySQL connection details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "absensi",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.use(cors());

app.get("/api/users", (req, res) => {
  const query = `
    SELECT 
      u.id,
      u.name,
      u.nik,
      d.name AS division,
      s.shift,
      w.name AS location
    FROM users u
    LEFT JOIN division d ON u.division_id = d.id
    LEFT JOIN work_shift s ON u.work_shift_id = s.id
    LEFT JOIN work_location w ON u.work_location_id = w.id
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Format data sesuai kebutuhan
    const formattedResults = results.map((user) => ({
      id: user.id,
      name: user.name,
      nik: user.nik,
      division: user.division,
      shift: user.shift,
      location: user.location,
    }));

    res.json(formattedResults);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
export default sequelize;
