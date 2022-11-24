//CRUD - Create, Read, Update Delete
const learnerModel = require('../models/learnerModel');
const catchAsync = require('../utils/catchAsync');
const express = require('express');

const router =express.Router();

exports.compareLogin = catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    const LoginData = await learnerModel.findOne({where:{email:email}}).catch((err)=>{
    console.log("Error:",err);
})

console.log(req.session)
if(!LoginData)
return res.json({message:"LEARNER EMAIL OR PASSWORD DOES NOT MATCH "});

if(LoginData.password !==password)
return res.json({message:"LEARNER EMAIL OR PASSWORD DOES NOT MATCH "});
else{
    return res.json({message:"login was successfull "+req.session});
}


});



exports.getlogin = catchAsync(async(req, res, next)=>{
 const LoginData  = await loginModel.find()
});