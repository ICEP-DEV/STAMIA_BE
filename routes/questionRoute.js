const router = require('express').Router();

const quizController = require('../controller/quizController');

router
    //get all question and answers
    .route("/question")
    .get(quizController.getQuestion)

module.exports = router;