import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Comment = sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      schema: "development",
    }
  );
  
  export default Comment;