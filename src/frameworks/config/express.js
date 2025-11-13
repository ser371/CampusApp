require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const helmet = require('helmet');

const createExpressApp = () => {
    const app = express();

    //Middlewares


    //rate limiting
    // const limiter = ratelimit({
    //     windowMs: 15 * 60 * 1000, 
    //     max: 100 
    // });
    // app.use(limiter);

    //body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const userRoutes = require('../../infrastructure/routes/userRoute');
    app.use('/users', userRoutes);

    return app;
}

module.exports = createExpressApp;

