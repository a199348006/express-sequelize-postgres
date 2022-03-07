module.exports = (sequelize, DataTypes, Model) => {
  class Order extends Model {};
  Order.init({
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'store', // use table name
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Order', 
    // freezeTableName: true, // modelName = tableName
    tableName: 'order',        // Set table name in database
    timestamps: true,         // created and updated time
    underscored: true,        // 蛇型命名
    comment: "Order is created by someone."
  });
  return Order;
}