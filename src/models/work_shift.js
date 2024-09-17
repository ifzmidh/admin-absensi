// Definisikan model User
const work_shift = (sequelize, DataTypes) => {
  return sequelize.define(
    "work_shift",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      shift: {
        type: DataTypes.ENUM("pagi", "malam"), // Definisi ENUM sesuai dengan tabel MySQL
        allowNull: true, // Sesuai dengan `DEFAULT NULL`
      },
    },
    {
      freezeTableName: true,
    }
  );
};

export default work_shift;
