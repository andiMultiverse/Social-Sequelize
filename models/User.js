const sequelize = require("sequelize");
const {db, DataTypes, Model} = require("./db.js");

// In models/User.js, define a User model with the following properties:
// username: A string
// email: A string

class User extends Model {};

User.init({
    username: DataTypes.STRING ,
    email: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: "user",
})

module.exports = User;