const express = require("express");
const response = require("../../network/response");
const { createProduct,
  getAllProducts,
  modifyProduct,
  deleteProduct } = require("./controller");

const router = express.Router();

router.post("/", (req, res) => {
  createProduct(req.body.products)
    .then((products) => response.success(req, res, products, 200))
    .catch((error) =>
      response.error(req, res, "Error en base de datos", null, error)
    );
});

router.get("/", (req, res) => {
  getAllProducts(req.body.productId, req.query.limit)
    .then((products) => response.success(req, res, products, 200))
    .catch((error) =>
      response.error(req, res, "Error en base de datos", null, error)
    );
});

router.patch("/", (req, res) => {
  modifyProduct(req.body.Product)
    .then((productUpdated) => response.success(req, res, productUpdated, 200))
    .catch((error) =>
      response.error(req, res, "Error en base de datos", null, error)
    );
});

router.delete("/", (req, res) => {
  deleteProduct(req.body.productId)
    .then((deletedProduct) => response.success(req, res, deletedProduct, 200))
    .catch((error) =>
      response.error(req,res,"Error en base de datos",null,error
      )
    );
});

module.exports = router;
