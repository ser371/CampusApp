// src/frameworks/database/models/User.js

/**
 * Defines the User model for Sequelize.
 * @param {import('sequelize').Sequelize} sequelize The Sequelize instance.
 * @param {import('sequelize').DataTypes} DataTypes The Sequelize DataTypes.
 * @returns {import('sequelize').Model} The User model.
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'UserID'
    },
    Username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: 'Username'
    },
    PasswordHash: {
      type: DataTypes.STRING(255),
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
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
    freezeTableName: true
  });

  return User;
};