const router = require('express').Router();

const loginController = require('../controller/adminLogController');

router
    .route("/")
    .post(loginController.compareLogin)
 

module.exports = router;