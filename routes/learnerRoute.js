const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/learner")
    .post(learnerController.createLearner)
    router.get('/', function(req, res, next) {
        res.send('Welcome to STEMIA please login using your email & password');
      })

    .patch(learnerController.updatePassword)

module.exports = router;