// Definisikan model User
const User = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nik: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    work_shift_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    work_location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    roles_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });
};

export default User;
