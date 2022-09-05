//CRUD - Create, Read, Update Delete
const learnerModel = require('../models/learnerModel');
const catchAsync = require('../utils/catchAsync');

//CREATE USERTYPE
exports.createLearner = catchAsync(async(req, res, next)=>{
    const learner = await learnerModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "learner Created Successfully",
        learner
    })
});


exports.getLearner = catchAsync(async(req, res, next)=>{
    const learner  = await learnerModel.findAll()
})