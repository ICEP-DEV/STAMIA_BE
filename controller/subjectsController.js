//CRUD - Create, Read, Update Delete
const subjectsModel = require('../models/subjectsModel');
const catchAsync = require('../utils/catchAsync');

//CREATE USERTYPE
exports.createSubjects = catchAsync(async(req, res, next)=>{
    const subject = await subjectsModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "subject Created Successfully",
        subject
    })
});


exports.getSubject = catchAsync(async(req, res, next)=>{
    const subject  = await subjectsModel.findAll()
})