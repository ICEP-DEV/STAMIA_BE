//CRUD - Create, Read, Update Delete
const event = require('../models/eventsModel');
const eventModel = require('../models/eventsModel');
const catchAsync = require('../utils/catchAsync');

//CREATE event
exports.createEvent = catchAsync(async(req, res, next)=>{
    const event = await eventModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "Event Created Successfully",
        event
    })
});


//Getting all events
exports.getAll = (req, res) => {
    const eventId = req.query.eventId;
    var condition = eventId ? {eventId : { [Op.like]: `%${eventId}%` } } : null;
  
    event.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving events "
        });
      });
  };

  //getting one event
  exports.getEventById = (req, res) => {
    const eventId = req.params.eventId;
  
    event.findByPk(userId)
      .then(data => {
        if (data) {
          res.send(data);
        } else
         {
          res.status(404).send({
            message: `Cannot find event with eventId=${eventId}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving event with eventId=" + eventId
        });
      });
  };

//Updating event information
  exports.updateEvent = (req, res) => {
    const eventId = req.params.eventId;
  
    event.update(req.body, {
      where: { eventId: eventId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Event was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update event with eventId=${eventId}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating event with eventId=" + eventId
        });
      });
  };

  //Deleting one event
  exports.deleteById = (req, res) => {
    const eventId = req.params.eventId;
  
    event.destroy({
      where: { eventId: eventId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Event was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete event with eventId=${eventId}`
          });
        }
      })
      .catch(err => {

        res.status(500).send({
          message: "Could not delete event with eventId=" + eventId

        });
      });
  };

  //Deleting all events
  exports.deleteAll = (req, res) => {
    event.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Events  were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting all events"
        });
      });
  };
