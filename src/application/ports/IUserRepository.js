// src/application/ports/IUserRepository.js

class IUserRepository {
    /**
     * Save a user entity to the repository
     * @param {Object} userEntity - The user entity to save
     * @returns {Promise<Object>} - The saved user entity
     */
    async save(userEntity) {
        throw new Error("save() method must be implemented by repository");
    }

    /**
     * Find a user by username
     * @param {string} username - The username to search for
     * @returns {Promise<Object|null>} - The found user entity or null if not found
     */
    async findByUsername(username) {
        throw new Error("findByUsername() method must be implemented by repository");
    }

    /**
     * Find a user by ID
     * @param {string} userId - The user ID to search for
     * @returns {Promise<Object|null>} - The found user entity or null if not found
     */
    async findById(userId) {
        throw new Error("findById() method must be implemented by repository");
    }

    /**
     * Update a user entity
     * @param {Object} userEntity - The user entity to update
     * @returns {Promise<Object>} - The updated user entity
     */
    async update(userEntity) {
        throw new Error("update() method must be implemented by repository");
    }

    /**
     * Delete a user by ID
     * @param {string} userId - The user ID to delete
     * @returns {Promise<boolean>} - True if deletion was successful
     */
    async delete(userId) {
        throw new Error("delete() method must be implemented by repository");
    }
}

module.exports = IUserRepository;