"use strict";
const { Model } = require("sequelize");
const { encryptPwd } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username must be not empty",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password must be not empty",
          },
        },
      },
    },
    {
      hooks:{
        beforeCreate: function(user, option){
          user.password = encryptPwd(user.password)
        }
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
