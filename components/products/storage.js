const { ProductsModel } = require('./model');

function createProduct(product) {
  return new ProductsModel(product).save()
}

function getAllProducts(limit) {
  return ProductsModel.findAll({limit});
}

function getProductById(productId) {
  return ProductsModel.findByPk(productId);
}

function modifyProduct(product, productId) {
  return ProductsModel.update(product, { where: { id: productId } })
}

function deleteProduct(productId) {
  return ProductsModel.destroy({
    where: { id: productId },
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
};
