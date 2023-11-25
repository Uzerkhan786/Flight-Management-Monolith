'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    airplaneID:{
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    departureAirportID: {
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    arrivalAirportID: {
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    arrivalTime: {
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    departureTime: {
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    boardingPass:{
      type:DataTypes.INTEGER
    },
    totalseat:{
      type:DataTypes.INTEGER,
      allowNull:false
    } ,
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};