const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./user');

const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.STRING,
      
    },
    imagesUrl: {
      type: DataTypes.STRING,
    },
    likes:{
      type: DataTypes.INTEGER,
    }, 
    dislikes:{
      type: DataTypes.INTEGER,
    },
    usersLiked: { 
      type: Sequelize.JSON, 
     },
    usersDisliked: { 
    type: Sequelize.JSON,
   },


  }, {
    sequelize,
    tableName:'post',
    modelName: 'Post',
  });
  User.hasMany(Post);
  Post.belongsTo(User);
  module.exports = Post;
