//used to define the interaction with APIs and used to send and receive the requests from the server
const router = require('express').Router();

const quizController = require('../controller/quizController');

router
    .route("/quiz")
    .post(quizController.createQuiz)
    .get(quizController.getQuiz)
    .patch(quizController.updateQuiz)

module.exports = router;