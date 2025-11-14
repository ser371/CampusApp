// module.exports = {
//   database: process.env.DB_NAME || 'campusProject',
//   username: process.env.DB_USER || 'sa',
//   password: process.env.DB_PASSWORD || '',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT) || 1433,
//   dialect: 'mssql',
//   logging: process.env.NODE_ENV === 'development' ? console.log : false,
//   dialectOptions: {
//     options: {
//       encrypt: true,
//       trustServerCertificate: true,
//       enableArithAbort: true,
//       requestTimeout: 30000,
//       // Add this for better compatibility
//       useUTC: false
//     }
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };


// src/frameworks/config/database.js
// src/frameworks/config/database.js

const dbType = process.env.DB_TYPE || 'mssql';

const commonConfig = {
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

let config;

if (dbType === 'mysql') {
  // MySQL configuration
  config = {
    ...commonConfig,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialectOptions: {
      charset: 'utf8mb4',
      ssl: {
        // For Aiven MySQL with self-signed certificate
        rejectUnauthorized: false,
        // Alternative: Download and use Aiven's CA certificate
        // ca: fs.readFileSync(path.join(__dirname, 'aiven-ca.pem'))
      }
    }
  };
} else {
  // MSSQL configuration (existing)
  config = {
    ...commonConfig,
    database: process.env.DB_NAME || 'campusProject',
    username: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 1433,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
        enableArithAbort: true,
        requestTimeout: 30000,
        useUTC: false
      }
    }
  };
}

module.exports = config;