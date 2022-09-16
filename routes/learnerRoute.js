const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/learner")
    .post(learnerController.createLearner)
    .get(learnerController.getLearner)

module.exports = router;