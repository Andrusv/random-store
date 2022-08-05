const {
  UsersModel,
  associations: userAssociations,
} = require('../components/users/model');
const {
  CustomersModel,
  associations: customerAssociations,
} = require('../components/customers/model');
const {
  OrdersModel,
  associations: orderAssociations
} = require('../components/orders/model');
const {
  ProductsModel,
  associations: productAssociations
} = require('../components/products/model');
const {
  CategoriesModel,
  associations: categoryAssociations
} = require('../components/categories/model');
const {
  OrdersProductsModel,
  associations: ordersProductsAssociations
} = require('../components/orders_products/model');

function setupModels() {
  userAssociations({ CustomersModel });
  customerAssociations({ UsersModel, OrdersModel });
  orderAssociations({ CustomersModel, OrdersProductsModel, ProductsModel })
  productAssociations({ OrdersProductsModel, OrdersModel, CategoriesModel });
  categoryAssociations({ ProductsModel });
  ordersProductsAssociations({ OrdersModel, ProductsModel, OrdersProductsModel });
}

module.exports = setupModels;
