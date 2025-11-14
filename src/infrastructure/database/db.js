const { sequalise } = require('sequelize')
const { sequalise } = require('./models')

const sequalise = new sequalise(
    process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Username
  process.env.DB_PASSWORD,   // Password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,          // Aiven requires SSL
        rejectUnauthorized: false // Only for development (see note below)
      }
    }
  }
);

module.exports = sequelize;