'use strict';
module.exports = (sequelize, DataTypes) => {
//defining the modole (table)
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    studentNumber: DataTypes.INTEGER,
    flag: Sequelize.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here; but I have not for this HMWK
      }
    }
  });
  return Student;
};