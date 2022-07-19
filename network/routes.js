const express = require("express");
const users = require('../components/users/network')
const customers = require('../components/customers/network')


const routes = function (server) {
    const router = express.Router();
    server.use('/api/v1', router);

    router.use('/users',users)
    router.use('/customers',customers)
}

module.exports = routes;
