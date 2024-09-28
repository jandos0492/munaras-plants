'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plant.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    botanical_name: {
      type: DataTypes.STRING,
    },
    care_instructions: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};