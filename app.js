// const createExpressApp = require("./src/frameworks/config/express");
// // const { sequalise } = require('./src/infrastructure/database/models');
// // Import database connection
// // const db = require('./src/frameworks/database/db');
// // Import database connection
// const db = require('./src/infrastructure/database/db');


// const connectToDatabase = async () =>{
//     try{
//          console.log('Attempting to connect to database...');
//         // await sequalise.authenticate();
//            await db.sequelize.authenticate();
//         console.log('Database connected successfully.');

//         //sync database models
//         await sequalise.sync({ force: false });
//         console.log('Database synchronized successfully.');
//     }
//     catch(error){
//         console.error('Unable to connect to the database:', error);
//         process.exit(1);
//     }
// }

// // Debug: Check if environment variables are loaded
// console.log('Environment variables:');
// console.log('DB_NAME:', process.env.DB_NAME);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);
// // Connect to database



// // Debug: Check what's being imported
// console.log('Database export:', db);
// console.log('Sequelize instance:', db.sequelize);

// connectToDatabase();

// // Rest of your app setup
// const app = createExpressApp();

// // ... middleware, routes, etc.

// module.exports = app;








const createExpressApp = require("./src/frameworks/config/express");
// const { sequalise } = require('./src/infrastructure/database/models');
// Import database connection
// const db = require('./src/frameworks/database/db');
// Import database connection
// const db = require('./src/infrastructure/database/db');
const { Sequelize } = require('sequelize');


const dbConfig = require('./src/frameworks/config/database');

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig);

// Function to connect to database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Call the connection function
connectToDatabase();

// Rest of your app setup
const app = createExpressApp();

// ... middleware, routes, etc.

module.exports = app;