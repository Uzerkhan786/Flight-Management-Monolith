'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airplane_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    totalseat: {
      type:DataTypes.INTEGER,
      defaultValue:100
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};