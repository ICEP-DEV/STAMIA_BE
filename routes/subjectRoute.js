const router = require('express').Router();

const subjectController = require('../controller/subjectsController');

router
    .route("/")
    .post(subjectController.createSubjects)

module.exports = router;