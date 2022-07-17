/* eslint-disable no-console */
const { config } = require('../config/index');
const { Sequelize } = require('sequelize');

const HOST = config.dbHost;
const PORT = config.dbPort;
const USER = config.dbAdmin;
const PASSWORD = config.dbPassword;
const DATABASE = config.dbDatabase;
const DATABASEMANAGER = config.dbDatabaseManager;

const URI = `${DATABASEMANAGER}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

let SQL = new Sequelize(URI, { logging: false });

function authConnection() {
  return new Promise((resolve, reject) => {
    SQL.authenticate()
      .then(() => {
        console.log(`[db.${DATABASEMANAGER}] Conectada con éxito`);
        resolve('All ok');
      })
      .catch((error) => {
        console.error(`[db.${DATABASEMANAGER}]`, error.message);
        reject(error);
      });
  });
}

module.exports = { SQL, authConnection };
