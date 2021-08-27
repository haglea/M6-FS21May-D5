import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";
import Comment from "./Comment.js";
import Cart from "./Cart.js";

Product.belongsTo(Category, {
    onDelete: "cascade", 
    foreignKey: { allowNull: false }, // to prevent null in id's, foreign key defined in Product
});
Category.hasMany(Product, {
    onDelete: "cascade", 
    foreignKey: { allowNull: false }, //foreign key defined in Product
});

Comment.belongsTo(User); // foreign key comment
User.hasMany(Comment);

Comment.belongsTo(Product);
Product.hasMany(Comment);


/* many-to-many */
Product.belongsToMany(User, { through: { model: Cart, unique: false } }); 
//unique: false => to prevnt creating primary key, foreign keys product & user

User.belongsToMany(Product, { through: { model: Cart, unique: false } }); 
//unique: false => to prevnt creating primary key, foreign keys product & user

Cart.belongsTo(User); //foreign key cart
User.hasMany(Cart);

Cart.belongsTo(Product);
Product.hasMany(Cart);

export default { Category, Product, User, Comment, Cart };