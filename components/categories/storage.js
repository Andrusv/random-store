const { CategoriesModel } = require('./model');

function createProduct(category) {
  return new CategoriesModel(category).save()
}

function getAllCategories(limit) {
  return CategoriesModel.findAll({limit});
}

function getProductById(categoryId) {
  return CategoriesModel.findByPk(categoryId);
}

function modifyProduct(category, categoryId) {
  return CategoriesModel.update(category, { where: { id: categoryId } })
}

function deleteProduct(categoryId) {
  return CategoriesModel.destroy({
    where: { id: categoryId },
  });
}

module.exports = {
  createProduct,
  getAllCategories,
  getProductById,
  modifyProduct,
  deleteProduct,
};
