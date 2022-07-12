const { ProductsModel } = require("./model");

function createProduct(products) {
  return new ProductsModel({products}).save();
}

// eslint-disable-next-line no-unused-vars
function getAllProducts(limit) {
  return ProductsModel.findAll();
}

function getProductById(productId) {
  return ProductsModel.find({ productId });
}

function modifyProduct(product) {
  return new ProductsModel.find({ _id: product.productId }).modifyOne({
    ...product
  });
}

function deleteProduct(productId) {
  return ProductsModel.find({ _id: productId }).deleteOne({
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
