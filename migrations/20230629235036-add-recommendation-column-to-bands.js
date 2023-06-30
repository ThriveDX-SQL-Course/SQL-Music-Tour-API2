'use strict';

/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require('sequelize')

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('bands', 'recommendation', {
      type: DataTypes.STRING,
      defaultValue: 'Very wow. Much recommend'
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('bands', 'recommendation')
  }
};
