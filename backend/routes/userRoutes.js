const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getAllUser,getUserById} = require('../controllers/userController')

router.get('/:id',getUserById)
router.get('/',getAllUser)
router.post('/',registerUser)
router.post('/login',loginUser)

module.exports = router
