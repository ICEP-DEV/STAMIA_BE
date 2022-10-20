const router = require('express').Router();

const loginController = require('../controller/loginController');

router
    .route("/login")
    .post(loginController.compareLogin)
   // .put(loginController.forgetPassword)

module.exports = router;