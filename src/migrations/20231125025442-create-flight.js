'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      airplaneID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      departureAirportID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrivalAirportID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrivalTime: {
        type: Sequelize.INTEGER,
        allowNull:false

      },
      departureTime: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingPass:{
        type:Sequelize.INTEGER
      },
      totalseat: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1000
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};