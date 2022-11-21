const router = require('express').Router();

const loginController = require('../controller/loginController');

router
    .route("/")
    .post(loginController.compareLogin)
    router.get('/', function(req, res, next) {
        res.send('Welcome to STEMIA!!');
      })

module.exports = router;
