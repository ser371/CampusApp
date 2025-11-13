const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../../frameworks/config/database');

const UserModel = require('./User');


const sequalise = new  Sequelize(config);


function resolveModelExport(mod) {
  if (mod && mod.default) mod = mod.default;
  if (typeof mod === 'function') return { type: 'factory', value: mod };
  if (mod && typeof mod.init === 'function') return { type: 'model', value: mod };
  return { type: 'unknown', value: mod };
}


function initModel(modExport, name) {
  const resolved = resolveModelExport(modExport);
  if (resolved.type === 'factory') {
    return resolved.value(sequalise, Sequelize.DataTypes);
  }
  if (resolved.type === 'model') {
    return resolved.value;
  }
  console.error(`Model "${name}" has unsupported export shape:`, resolved.value);
  throw new TypeError(`Model "${name}" must export a factory function or an initialized Sequelize Model`);
}


const models = {
  User: initModel(UserModel, 'User'),
};


Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

module.exports = { sequalise, ...models };