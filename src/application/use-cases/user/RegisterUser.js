// src/application/use-cases/user/RegisterUser.js

// Corrected path for User entity
const User = require("../../../domain/entities/User");

// Corrected path for IUserRepository
const IUserRepository = require("../../ports/IUserRepository");

class RegisterUser {
    /**
     * @param {IUserRepository} userRepository 
     */
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ Username, PasswordHash, Email }) {
        // Check if username already exists
        const existingUser = await this.userRepository.findByUsername(Username);
        if (existingUser) {
            throw new Error(`Username '${Username}' is already taken`);
        }

        // Create new user entity
        const newUser = new User({
            Username,
            PasswordHash,
            Email
        });

        // Save user to repository
        const savedUser = await this.userRepository.save(newUser);
        
        return savedUser;
    }
}

module.exports = RegisterUser;