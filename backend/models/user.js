const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index');


const User = sequelize.define('User', {
  // Model attributes are defined here
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;