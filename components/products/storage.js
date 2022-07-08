const { ProductModel } = require("./model");

function createProduct(products) {
  return new ProductModel({products}).save();
}

function getAllProducts(limit) {
  return ProductModel.find(limit)
}

function getProductById(productId) {
  return ProductModel.find({ productId });
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
  deleteProduct,
};
