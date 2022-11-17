const router = require('express').Router();

const faqController = require('../controller/faqController');

router
    .route("/faq")
    .post(faqController.createFaq)
    .patch(faqController.updateFaq)
 

module.exports = router;