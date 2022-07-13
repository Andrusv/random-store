const express = require("express");
const users = require('../components/users/network')

const routes = function (server) {
    const router = express.Router();
    server.use('/api/v1', router);

    router.use('/users',users)
}

module.exports = routes;
