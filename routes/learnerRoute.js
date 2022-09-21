const router = require('express').Router();

const learnerController = require('../controller/learnerController');

router
    .route("/")
    .post(learnerController.createLearner)
router.get('/', function(req, res, next) {
        res.send('respond with a resource');
      })

module.exports = router;
