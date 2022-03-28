module.exports = (sequelize, DataTypes, Model) => {
  class Menu extends Model {};
  Menu.init({
    menu_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    menu_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'store', // use table name
        key: 'store_id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Menu', 
    // freezeTableName: true, // modelName = tableName
    tableName: 'menu',        // Set table name in database
    timestamps: true,         // created and updated time
    underscored: true,        // 蛇型命名
    comment: "Store's menu."
  });
  return Menu;
}