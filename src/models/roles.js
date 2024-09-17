import timestamp from "./timestamp.js";

// Definisikan model User
const Role = (sequelize, DataTypes) => {
  return sequelize.define("Role", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    ...timestamp,
  });
};

export default Role;
