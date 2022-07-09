const express = require("express");
const products = require('../components/products/network')

const routes = function (server) {
    const router = express.Router();
    server.use('/api/v1', router);

    router.use('/products',products)
}

module.exports = routes;
