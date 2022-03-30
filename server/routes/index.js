const router = require('express').Router()

router.get('/',(req, res)=>{
    res.status(200).json({
        message: "Home Page"
    })
})
const UserRoutes = require('./user')
const JobRoutes = require('./job')



router.use('/users', UserRoutes)
router.use('/jobs', JobRoutes)

module.exports = router