const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');

const TABLE_NAME = 'Categories'
const categorySchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

const CategoriesModel = SQL.define(TABLE_NAME, categorySchema);


const associations = (models) => {
  CategoriesModel.hasMany(models.ProductsModel, {
    as: 'products'
  });
}

module.exports = { CategoriesModel, TABLE_NAME, categorySchema, associations };
