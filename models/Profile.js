// In models/Profile.js, create a Profile model with the following properties:
// bio: A string
// profilePicture: A string
// birthday: A date formatted as a string

// const sequelize = require("sequelize");
const {db, DataTypes, Model} = require("./db.js");

class Profile extends Model {};

Profile.init({
    bio: DataTypes.STRING,
    profile: DataTypes.STRING,
    birthday: DataTypes.DataTypes.STRING,
})

module.exports = Profile;