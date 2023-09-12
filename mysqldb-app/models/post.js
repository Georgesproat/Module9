const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "user",
    //     key: "id"
    //   }
    // }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true
  }
);
module.exports = Post;
