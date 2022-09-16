const router = require('express').Router();

const quizController = require('../controller/quizController');

router
    
    .route("/question")
    .get(quizController.getQuestion)

module.exports = router;