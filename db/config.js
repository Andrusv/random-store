/* eslint-disable no-console */
const { config } = require('../config/index');

const HOST = config.dbHost;
const PORT = config.dbPort;
const USER = config.dbAdmin;
const PASSWORD = config.dbPassword;
const DATABASE = config.dbDatabase;
const DATABASEMANAGER = config.dbDatabaseManager;

const URI = `${DATABASEMANAGER}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

module.exports = {
  development: {
    url: URI,
    dialect: DATABASEMANAGER,
  },
  production: {
    url: URI,
    dialect: DATABASEMANAGER,
  }
}


