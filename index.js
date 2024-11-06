const { Comment, Like, Post, Profile, User } = require("./models/index");

// A User can have one Profile and vice versa.
User.hasOne(Profile);
Profile.belongsTo(User);

// A User can have many Post instances, but a Post can only have one User.
User.hasMany(Post);
Post.belongsTo(User);

// A Post can have many Comment instances, but a Comment can only have one Post.
Post.hasMany(Comment);
Comment.belongsTo(Post);

// A User can have many Like instances and vice versa.
User.belongsToMany(Like, { through: UserLike });
Like.belongsToMany(User, { through: UserLike });

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
