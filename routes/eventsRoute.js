const router = require('express').Router();

const eventsController = require('../controller/eventsController');


router.post(eventsController.createEvent);
router.get('/', eventsController.getAll);
router.get('/:eventId', eventsController.getEventById);
router.put('/:eventId', eventsController.updateEvent);
router.delete('/:eventId', eventsController.deleteById);
router.delete("/", eventsController.deleteAll);

module.exports = router;
