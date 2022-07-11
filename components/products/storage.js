const { ProductModel } = require("./model");
const postgreSQL = require('../../libs/postgresql')

function createProduct(products) {
  return new ProductModel({products}).save();
}

// eslint-disable-next-line no-unused-vars
function getAllProducts(limit) {
  return new Promise(  (resolve) => {
    resolve(postgreSQL.query('SELECT * from tasks'))
  }).then(response => response.rows)
}

function getProductById(productId) {
  return ProductModel.find({ productId });
}

function modifyProduct(product) {
  return new ProductModel.find({ _id: product.productId }).modifyOne({
    ...product
  });
}

function deleteProduct(productId) {
  return ProductModel.find({ _id: productId }).deleteOne({
    _id: productId,
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
};
