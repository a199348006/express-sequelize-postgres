require('dotenv').config();
const { Sequelize, DataTypes, Model } = require('sequelize');
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
db.store = require('./store.model')(sequelize, DataTypes, Model);
db.menu = require('./menu.model')(sequelize, DataTypes, Model);
db.order = require('./order.model')(sequelize, DataTypes, Model);
db.buyer = require('./buyer.model')(sequelize, DataTypes, Model);
// associations
db.buyer.belongsTo(db.menu, { foreignKey: 'menu_id' });
db.buyer.belongsTo(db.order, { foreignKey: 'order_id' });
db.menu.belongsTo(db.store, { foreignKey: 'store_id' });

module.exports = db;