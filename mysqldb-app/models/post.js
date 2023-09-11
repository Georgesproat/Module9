const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

//Sequelize will create this table if it doesn't exist on startup
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
    userId: {
      type: DataTypes,
      INTEGER,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true
  }
);
module.exports = Post;
