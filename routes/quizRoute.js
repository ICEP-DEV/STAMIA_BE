//used to define the interaction with APIs and used to send and receive the requests from the server
const router = require('express').Router();
const auth = require('../controller/authController')

const quizController = require('../controller/quizController');

router
    .route("/quiz")
    //admin posting the questions
    .post(quizController.createQuiz)
    //learner getting the questions
    .get(auth.checkLoggedIn, quizController.getQuiz)
    //the answering the question
    .patch(auth.checkLoggedIn, quizController.updateQuiz)

module.exports = router;