// src/infrastructure/controller/UserController.js

class UserController {
    /**
     * @param {Object} registerUserUseCase - The user registration use case
     */
    constructor(registerUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
    }

    /**
     * Handle user registration request
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    async register(req, res) {
        try {
            const { Username, PasswordHash, Email } = req.body;
            
            // Validate required fields
            if (!Username || !PasswordHash || !Email) {
                return res.status(400).json({
                    success: false,
                    error: "Missing required fields: Username, PasswordHash, and Email are required"
                });
            }

            // Execute the use case
            const newUser = await this.registerUserUseCase.execute({
                Username,
                PasswordHash,
                Email
            });

            // Return success response
            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                user: {
                    UserId: newUser.UserId,
                    Username: newUser.Username,
                    Email: newUser.Email,
                    CreatedAt: newUser.CreatedAt
                }
            });

        } catch (error) {
            // Handle different types of errors
            if (error.message.includes("already taken")) {
                return res.status(409).json({
                    success: false,
                    error: error.message
                });
            }

            // Generic error response
            return res.status(500).json({
                success: false,
                error: "Registration failed: " + error.message
            });
        }
    }
}

// This must export the CLASS itself, not an instance
module.exports = UserController;