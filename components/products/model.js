const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');
const { CategoriesModel } = require('../categories/model');

const TABLE_NAME = 'Products'
const productSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: CategoriesModel,
      key: 'id'
    },
    onDelete: 'SET NULL'
  }
};

const ProductsModel = SQL.define(TABLE_NAME, productSchema, {
  updatedAt: false,
});

const associations = (models) => {
  ProductsModel.belongsTo(models.CategoriesModel, {
    as: 'Categories',
    foreignKey: {
      name: 'category_id',
      type: Sequelize.UUID,
    },
  });

  ProductsModel.belongsToMany(models.OrdersModel, {
    through: models.OrdersProductsModel,
    foreignKey: 'product_id',
    otherKey: 'order_id'
  });
}

module.exports = { ProductsModel, TABLE_NAME, productSchema, associations };
