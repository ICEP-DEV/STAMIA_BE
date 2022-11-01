//CRUD - Create, Read, Update Delete
const loginModel = require('../models/adminloginModel');
const catchAsync = require('../utils/catchAsync');
const express = require('express');

const router =express.Router();

exports.compareLogin = catchAsync(async(req,res,next)=>{
    const userName=req.body.userName;
    const password=req.body.password;
    const LoginData = await loginModel.findOne({ where: ({userName: "admin.com" },{password: "admin"}),}).catch((err)=>{
    console.log("Error:",err);
})

if(!LoginData)
return res.json({message:"ADMIN USERNAME OR PASSWORD DOES NOT MATCH "});

if(LoginData.password !==password && LoginData.userName !==userName)

return res.json({message:"ADMIN USERNAME OR PASSWORD DOES NOT MATCH "});
else{
    return res.json({message:"login was successfull "});
}


});


