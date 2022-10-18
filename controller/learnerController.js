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

//update new password if a learner reset password
exports.updatePassword = catchAsync(async(req, res, next)=>{
    const password = req.body.password;
    const email = req.body.email;

        const email1  = await learnerModel.findOne({attributes: ["email"],
            where: ({email:email}) 
        });
    
     if(email1){
    
        const updatePassword  = await learnerModel.update({password: password},
            {where: ({email: email})})
         
              res.status(200).json({
                 status:"success",
                 message:"password updated",
                 updatePassword
             })
        
     }else{
        return res.status(200).json("Email does not exist")
     }
    
    })