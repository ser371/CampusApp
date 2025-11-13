// This file assumes it's being imported by an index file 
// that passes the Sequelize instance and DataTypes object.

/**
 * Defines the User model for Sequelize.
 * @param {import('sequelize').Sequelize} sequelize The Sequelize instance.
 * @param {import('sequelize').DataTypes} DataTypes The Sequelize DataTypes.
 * @returns {import('sequelize').Model} The User model.
 */
module.exports = (sequelize, DataTypes) => {
    // 1. Extend the Sequelize base Model class
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'UserID' // Maps to the SQL column name
        },
        Username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            field: 'Username'
        },
        PasswordHash: {
            type: DataTypes.STRING(255), // Increased size for safety
            allowNull: false,
            field: 'PasswordHash'
        },
        Email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            },
            field: 'Email'
        },
        CreatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'CreatedAt'
        },
        LastLoginTime: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastLoginTime'
        }
    }, {
        // 2. Options object (Second argument to define or init)
        sequelize,
        modelName: 'User',          // The internal model name (camelCase is standard)
        tableName: 'Users',         // The actual table name in the database
        timestamps: false,          // Disables Sequelize's automatic createdAt/updatedAt
        freezeTableName: true       // Prevents Sequelize from pluralizing the table name
    });

    return User;
};