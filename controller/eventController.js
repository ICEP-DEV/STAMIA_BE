//CRUD - Create, Read, Update Delete
const Event = require('../models/eventModel');
const catchAsync = require('../utils/catchAsync');
const sequelize = require('sequelize')




//CREATE USERTYPE
/*exports.createEvent = catchAsync(async(req, res, next)=>{
    const title = await eventModel.create(req.body);
    const date = await eventModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "event added Successfully",
        title,
        date
    })
});
*/
/* Fetch all events */
exports.getEvents =catchAsync( async (req, res,next) => {
    try {
        const events = await Event.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


/* Create new event */
exports.createEvent =catchAsync( async (req, res) => {
    const { title, date } = req.body;

    const newEvent = new Event({ title, date })

    try {
        await newEvent.save();
        res.status(201).json(
            {
                type: "success",
                message: "Event has been added successfully"
            }
        );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

// Delete singile event 
/*
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;

  res.status(404).send(`No event with id: ${id}`);

    await Event.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}  */