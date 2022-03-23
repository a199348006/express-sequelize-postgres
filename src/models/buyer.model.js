module.exports = (sequelize, DataTypes, Model) => {
    class Buyer extends Model {};
    Buyer.init({
      buyer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      buyer_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      menu_id: {
        type: DataTypes.UUID,
        references: {
          model: 'menu',
          key: 'menu_id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
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
      modelName: 'Buyer', 
      // freezeTableName: true, // modelName = tableName
      tableName: 'buyer',        // Set table name in database
      timestamps: true,         // created and updated time
      underscored: true,        // 蛇型命名
      comment: "Who wants to join the order."
    });
    return Buyer;
  }