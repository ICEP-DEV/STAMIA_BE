
const learnerModel = require('../models/learnerModel');
const catchAsync = require('../utils/catchAsync');


exports.compareLogin = catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;
    const LoginData = await learnerModel.findOne({where:{email}, limit: 1}).catch((err)=>{
        
    console.log("Error:",err);

})


    if(!LoginData)
     return res.json({message:"LEARNER EMAIL OR PASSWORD DOES NOT MATCH"});

    if(LoginData.password !==password)
     return res.json({message:"LEARNER PASSWORD DOES NOT MATCH "});
     else{
    
        if(req.body.email == LoginData.email && req.body.password == LoginData.password){
           session=req.session;
           session.email=req.body.email;
           console.log(req.session)
           res.send(`Hey there, welcome to STEMIA`);

        }
         else{
          res.send('Invalid email or password');
        }
    
}


});

exports.getlogin = catchAsync(async(req, res, next)=>{
 const LoginData  = await loginModel.findAll()
});
