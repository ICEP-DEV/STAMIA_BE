const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/grades")
    .get(learnerController.getGrade)
    

module.exports = router;