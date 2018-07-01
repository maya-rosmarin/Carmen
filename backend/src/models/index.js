var path = require('path');
var Sequelize = require('sequelize');

const sequelize = new Sequelize('carmen', 'postgres', 'postgres', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = {
  models: models,
  models_sequelize: models.sequelize
}
