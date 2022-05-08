const express = require('express');
const router = express.Router();

const collegeController = require('../controller/collegeController')
const internController  = require('../controller/internController')
//college
router.post("/colleges",collegeController.createCollege)


//Intern

router.post("/interns",internController.createIntern)

 router.get("/collegeDetails",internController.getInterns)



module.exports = router; 