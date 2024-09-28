'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Users');
    if (!tableDescription.resetToken) {
      await queryInterface.addColumn('Users', 'resetToken', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Users');
    if (tableDescription.resetToken) {
      await queryInterface.removeColumn('Users', 'resetToken');
    }
  },
};
