const express=require('express')
const {RegisterUser,authUser}=require('../controllers/usercontroller')

const { protectStudent } = require('../middlewares/authmiddleware');

const router=express.Router()

router.route('/').post(RegisterUser);
router.route('/login').post(authUser)



module.exports=router