const router = require('express').Router();

const quizController = require('../controller/quizController');

router
    //get mark
    .route("/mark")
    .get(quizController.getMark)

module.exports = router;