import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Cart = sequelize.define(
  "cart", 
  {
  id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
  },
  },
  {
    schema: "development",
  }
);

export default Cart;