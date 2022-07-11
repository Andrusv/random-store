const { Client } = require('pg');
const { config } = require('../config/index')

const host = config.dbHost
const port = config.dbPort
const user = config.dbAdmin
const password = config.dbPassword
const database = config.dbDatabase

Client.Promise = global.Promise

async function postgresConnection() {
  const client = new Client({
    host,
    port,
    user,
    password,
    database
  });
  return await client
    .connect()
    .then((client) => {
      // eslint-disable-next-line no-console
      console.log('[db.Postgresql] Conectada con éxito')
      return client
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error('[db.Postgresql]', err.message));
}

module.exports = postgresConnection;
