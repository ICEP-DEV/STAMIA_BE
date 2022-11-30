const router = require('express').Router();

const loginController = require('../controller/loginController');

router.post('/',loginController.compareLogin)
   

module.exports = router;
