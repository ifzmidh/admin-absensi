// Definisikan model User
const work_location = (sequelize, DataTypes) => {
  return sequelize.define(
    "work_location",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: true, // Sesuai dengan definisi `DEFAULT NULL` di skema MySQL
      },
    },
    {
      freezeTableName: true,
    }
  );
};

export default work_location;
