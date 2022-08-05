const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');

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
  // categoryId: {
  //   field: 'category_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: CATEGORY_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // }
};

const ProductsModel = SQL.define(TABLE_NAME, productSchema);

// eslint-disable-next-line no-unused-vars
const associations = (models) => {
  // ProductsModel.(models.CustomersModel, {
  //   foreignKey: {
  //     name: 'user_id',
  //     type: Sequelize.UUID,
  //   },
  // });
}

module.exports = { ProductsModel, TABLE_NAME, productSchema, associations };
