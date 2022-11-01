//CRUD - Create, Read, Update Delete
const loginModel = require('../models/learnerModel');
const catchAsync = require('../utils/catchAsync');
const express = require('express');

const router =express.Router();

exports.compareLogin = catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    const LoginData = await loginModel.findOne({where:{email}}).catch((err)=>{
    console.log("Error:",err);
})

if(!LoginData)
return res.json({message:"LEARNER EMAIL OR PASSWORD DOES NOT MATCH "});

if(LoginData.password !==password)
return res.json({message:"LEARNER EMAIL OR PASSWORD DOES NOT MATCH "});
else{
    return res.json({message:"login was successfull "});
}


});



exports.getlogin = catchAsync(async(req, res, next)=>{
 const LoginData  = await loginModel.find()
});

exports.forgetPassword = (req,res) => {
    const {email} = req.body;

    loginModel.findOne({email}, (err, loginModel) => {
        if(err || !loginModel){
            return res.status(200).json({error: "learner with email does not exist"});
        }

        
        const data = {
            from: 'noreply@stemia.com',
            to: email,
            subject: 'Reset password',
            html: `
            <h2> Please click on given link to reset your password>/h2>
            <p></p>
            `
        }
    })

}