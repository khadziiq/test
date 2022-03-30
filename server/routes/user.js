const UserRoute = require('express').Router()
const UserController = require('../controllers/UserController')

UserRoute.get('/', UserController.getAll)
UserRoute.get('/:id', UserController.getById)
UserRoute.post('/login', UserController.login)
UserRoute.post('/register', UserController.register)


module.exports = UserRoute