'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    company: DataTypes.STRING,
    company_url: DataTypes.STRING,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    how_to_apply: DataTypes.STRING,
    company_logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};