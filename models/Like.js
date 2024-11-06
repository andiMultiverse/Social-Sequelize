const { db, DataTypes, Model } = require("./db.js");

class Like extends Model {};

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING // assuming a date stored as a string
}, {
    sequelize: db,
    modelName: "Like"
});

module.exports = Like;


module.exports = Like;