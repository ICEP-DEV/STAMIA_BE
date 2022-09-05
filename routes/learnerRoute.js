const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/")
    .post(learnerController.createLearner)

module.exports = router;