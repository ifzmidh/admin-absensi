import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 3000;

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
