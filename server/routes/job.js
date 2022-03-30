const JobRoute = require('express').Router()
const JobController = require('../controllers/JobController')
const {authentication} = require('../middlewares/auth')


JobRoute.post('/', JobController.create)
JobRoute.get('/',authentication, JobController.getAll)

module.exports = JobRoute