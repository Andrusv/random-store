const { DataTypes, Sequelize } = require('sequelize');
const { PostgreSQL } = require('../../libs/postgresql');

const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

const ProductsModel = PostgreSQL.define('Users', userSchema);

PostgreSQL.sync({ force: true });

module.exports = { ProductsModel };
