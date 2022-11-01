const router = require('express').Router();
const event = require('../controller/eventController');

router
.route("/calendar")
.post(event.createEvent)
.get( event.getEvents)
//.delete( event.deleteEvent)


module.exports = router;