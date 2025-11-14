// src/frameworks/database/db.js

const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../frameworks/config/database');

// Create Sequelize instance
const sequelize = new Sequelize(config);

// Import model factories
const UserFactory = require('./models/User');

// Initialize models
const User = UserFactory(sequelize, DataTypes);

// Set up associations
Object.values({ User }).forEach(model => {
  if (model.associate) model.associate({ User });
});

// IMPORTANT: Must export sequelize as a named export
module.exports = {
  sequelize,  // This line is crucial
  User,
};