'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    studentNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};