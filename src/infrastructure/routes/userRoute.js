const express = require('express');
const router = express.Router();
const UserRepository = require('../../infrastructure/repositories/UserRepository');
const RegisterUser = require('../../application/use-cases/user/RegisterUser');

const UserController = require('../../infrastructure/constroller/UserController');

// Instantiate the repository
const userRepository = new UserRepository();        

// Instantiate the use case with the repository
const registerUserUseCase = new RegisterUser(userRepository);

// Instantiate the controller with the use case
const userController = new UserController(registerUserUseCase);


// Define the route for user registration
router.post('/register', (req, res) => userController.register(req, res));
module.exports = router;