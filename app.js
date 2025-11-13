const createExpressApp = require("./src/frameworks/config/express");
const { sequalise } = require('./src/infrastructure/database/models');

const app = createExpressApp();

const connectToDatabase = async () =>{
    try{
        await sequalise.authenticate();
        console.log('Database connected successfully.');

        //sync database models
        await sequalise.sync({ force: false });
        console.log('Database synchronized successfully.');
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}
connectToDatabase();

module.exports = app;