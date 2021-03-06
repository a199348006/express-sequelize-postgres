module.exports = (sequelize, DataTypes, Model) => {
  class Store extends Model {};
  Store.init({
    store_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    store_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING    
    },
    delivery_min_order: {
      type: DataTypes.INTEGER,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Store', 
    // freezeTableName: true, // modelName = tableName
    tableName: 'store',       // Set table name in database
    timestamps: true,         // created and updated time
    underscored: true,        // 蛇型命名
    comment: "Store detail."
  });
  return Store;
}