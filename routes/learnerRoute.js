const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/")
    .post(learnerController.createLearner)
router.get('/', function(req, res, next) {
        res.send('Welcome to STEMIA please login using your email & password');
      })

module.exports = router;
