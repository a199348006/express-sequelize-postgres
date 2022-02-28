const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  timezone: '+08:00',
  pool: { max: 5, idle: 30000, acquire: 60000 },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;