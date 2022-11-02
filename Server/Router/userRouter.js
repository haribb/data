const router= require('express').Router()

const {Register } = require('../Controller/usercontroller')

router.post("/reg",Register)






module.exports=router;