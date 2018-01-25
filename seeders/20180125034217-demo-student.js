'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      firstName: 'John',
      lastName: 'Doe',
      studentNumber: '480555222',
      flag: '1',
      createdAt: '2018-01-01 07:42:28',
      updatedAt: '2018-01-01 07:42:28',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
