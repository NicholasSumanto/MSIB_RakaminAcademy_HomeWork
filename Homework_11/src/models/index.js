require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Todo = require('./todo')(sequelize, Sequelize);

module.exports = db;
