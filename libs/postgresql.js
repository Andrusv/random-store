/* eslint-disable no-console */
const { config } = require('../config/index');
const { Sequelize } = require('sequelize');

const HOST = config.dbHost;
const PORT = config.dbPort;
const USER = config.dbAdmin;
const PASSWORD = config.dbPassword;
const DATABASE = config.dbDatabase;

const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

Sequelize.Promise = global.Promise;

let PostgreSQL = new Sequelize(URI, { logging: false });

function authConnection() {
  return new Promise ((resolve,reject) => {
    PostgreSQL.authenticate().then(() => {
      console.log("[db.Postgres] Conectada con éxito")
      resolve('All ok')
    }).catch(error => {
      console.error("[db.Mongo]", error.message)
      reject(error)
    })
  })
}


module.exports = {PostgreSQL, authConnection};
