const Storage = require('./storage');

function createCategory(category) {
  return new Promise((resolve, reject) => {
    Storage.createCategory(category)
      .then((createdCategory) => resolve(createdCategory))
      .catch((error) => reject(error.errors[0].message));
  });
}

function getAllCategories(categoryId, limit) {
  return new Promise((resolve, reject) => {
    if (categoryId) {
      return getCategoryById(categoryId)
        .then((category) => resolve(category))
        .catch((error) => reject(error));
    }

    return Storage.getAllCategorys(limit || 10)
      .then((category) => resolve(category))
      .catch((error) => reject(error));
  });
}

function getCategoryById(categoryId) {
  return new Promise((resolve, reject) => {
    Storage.getCategoryById(categoryId)
      .then((category) => resolve(category))
      .catch((error) => reject(error));
  });
}

function modifyCategory(category) {
  return new Promise((resolve, reject) => {
    const { id, ...modifyCategory } = category;

    return Storage.modifyCategory(modifyCategory, id)
      .then((modifiedCategory) => resolve(modifiedCategory))
      .catch((error) => reject(error));
  });
}

function deleteCategory(categoryId) {
  return new Promise((resolve, reject) => {
    return Storage.deleteCategory(categoryId)
      .then((deletedCategory) => resolve(deletedCategory))
      .catch((error) => reject(error));
  });
}
module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  modifyCategory,
  deleteCategory,
};
