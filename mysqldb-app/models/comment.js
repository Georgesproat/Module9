const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "user", 
    //     key: "id",
    //   },
    // },
    // postId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "post",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize: dbConnect.Sequelize,
    modelName: "comments",
    timestamps: true,
  }
);

module.exports = Comment;
