const router = require('express').Router();

const subjectController = require('../controller/subjectsController');

router
    .route("/")
    .post(subjectController.createSubjects)
    router.get('/', function(req, res, next) {
        res.send('subject added succefully')
      });

module.exports = router;