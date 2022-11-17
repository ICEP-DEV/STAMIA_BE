//CRUD - Create, Read, Update Delete
const faqModel = require('../models/faqModel');
const catchAsync = require('../utils/catchAsync');

//CREATE USERTYPE
exports.createFaq = catchAsync(async(req, res, next)=>{
    const faq = await faqModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: " Created Successfully",
        faq
    })
});
    //let admin answer the question(update)
    exports.updateFaq = catchAsync(async(req, res, next)=>{

       const question = req.body.question;
       const answer = req.body.answer;

       const updateAnswer = await faqModel.update({answer:answer},
        {where: ({question: question})})

        res.status(200).json({
            status:"success",
            message:" updated",
            updateAnswer
        })
    })
    
        
       



