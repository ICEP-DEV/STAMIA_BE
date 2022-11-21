const router = require('express').Router();

const learnerController = require('../controller/learnerController');

//router.route("/")
router.post(learnerController.createLearner)
router.get('/', learnerController.findAll);
router.get('/:userId', learnerController.findLearnerById);
router.put('/:userId', learnerController.updateLearner);
router.delete('/:userId', learnerController.deleteById);
router.delete("/", learnerController.deleteAll);

module.exports = router;
