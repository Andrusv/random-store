require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    host: process.env.HOST || 'http://localhost',
    env: process.env.NODE_ENV || 'development',
    dbHost: process.env.DB_HOST,
    dbAdmin: process.env.DB_ADMIN,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbDatabase: process.env.DB_DATABASE,
    dbDatabaseManager: process.env.DB_DATABASE_MANAGER
}

module.exports = { config }
