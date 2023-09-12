const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model {}

Like.init(
  {
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "user",
    //     key: "id"
    //   }
    // },
    // postId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "post",
    //     key: "id"
    //   }
    // }
  },
  {
    sequelize: dbConnect.Sequelize,
    modelName: "like",
    timestamps: true,
    freezeTableName: true
  }
);

module.exports = Like;
