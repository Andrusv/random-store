const { Pool } = require('pg');
const { config } = require('../config/index');

const HOST = config.dbHost;
const PORT = config.dbPort;
const USER = config.dbAdmin;
const PASSWORD = config.dbPassword;
const DATABASE = config.dbDatabase;

const postgreSQL = new Pool({
        host: HOST,
        port: PORT,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
      })

module.exports = postgreSQL;
