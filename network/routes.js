const express = require("express");
const users = require('../components/users/network')
const customers = require('../components/customers/network')
const orders = require('../components/orders/network')
const categories = require('../components/categories/network')
const products = require('../components/products/network')


const routes = function (server) {
    const router = express.Router();
    server.use('/api/v1', router);

    router.use('/users',users)
    router.use('/customers',customers)
    router.use('/orders',orders)
    router.use('/categories',categories)
    router.use('/products',products)
}

module.exports = routes;
