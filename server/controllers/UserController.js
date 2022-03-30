const { user } = require("../models");
const {decryptPwd} = require("../helpers/bcrypt")
const {tokenGenerator} = require("../helpers/jwt")

class UserController {
  static async getAll(req, res) {
    try {
      let users = await user.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    try {
        const id = +req.params.id;
        let result = await user.findByPk(id);
        result
          ? res.status(200).json(result)
          : res.status(404).json({
              message: `User not found!`,
            });
      } catch (e) {
        res.status(500).json({
          message: "Server Error",
        });
      }
  }
  //register
  static async register(req, res) {
    try {
        const { username,  password } = req.body;
       
        // jika email sudah ada
        let findUsername = await user.findOne({
          where: { username },
        });
  
        if (findUsername) {
          res.status(403).json({
            message: "Username sudah terdaftar",
          });
        } else {
          let result = await user.create({
            username,
            password
          });
          res.status(201).json(result);
        }
      } catch (error) {
        res.status(500).json(error);
      }
  }

  //login
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let result = await user.findOne({
        where: {
          username,
        },
      });
      if (result){
          if (decryptPwd(password, result.password)) {
            let token = tokenGenerator(result)
            
            res.status(200).json({
              access_token : token,
             
            });
          } else{
              res.status(400).json({
                  message:"Password is not correct"
              })
          }
      } else{
          res.status(400).json({
              message:"User not found"
          })
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
