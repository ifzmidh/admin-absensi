import timestamp from "./timestamp.js";

// Definisikan model User
const Division = (sequelize, DataTypes) => {
  return sequelize.define("Division", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true, // Kolom ini boleh null sesuai dengan definisi tabel
    },
    ...timestamp,
  });
};

export default Division;
