 //CRUD - Create, Read, Update Delete
 const quizModel = require('../models/quizModel');
 const catchAsync = require('../utils/catchAsync');
 const sequelize = require('sequelize')
var index = 0;
var questions=[];
 //CREATE QUIZ
 exports.createQuiz = catchAsync(async(req, res, next)=>{
     const quiz = await quizModel.create(req.body);
  
     res.status(200).json({
         status:"success",
         message: "quiz Created Successfully",
         quiz
     })
 });
 
 //READ QUIZ
 exports.getQuiz = catchAsync(async(req, res, next)=>{
    const quizName = req.body.quizName;
    const subjectName = req.body.subjectName;
    const question = req.body.question;

  const quiz  = await quizModel.findAll({attributes: ["quizName", "subjectName" , "question"],
  where: ({quizName: quizName, subjectName: subjectName})})


do {
    // Generating random number
    const randomNumber = Math.floor(Math.random() * quiz.length)
  
    // Pushing into the array only if the array does not contain it
    if (!questions.includes(randomNumber)) {
        questions.push(randomNumber);
    }
  
} while (questions.length < quiz.length);

//console.log(questions)
//console.log(quiz[questions[index]])
res.status(202).json(quiz[questions[index]]);

//console.log(index)
   index++
  
})

    //UPDATE QUIZ
    exports.updateQuiz = catchAsync(async(req, res, next)=>{
        const answer = req.body.answer;
        const learnerAnswer = req.body.learnerAnswer;
        const question = req.body.question;
        const quizName = req.body.quizName;
        const subjectName = req.body.subjectName;

        var score = 0;
  
        if(learnerAnswer == answer){
           score++;
         
        }

          const updateAnswer  = await quizModel.update({learnerAnswer: learnerAnswer, mark:score},
       {where: ({quizName: quizName, subjectName:subjectName, question: question, answer:answer})})
    
         res.status(200).json({
            status:"success",
            message:"quiz updated",
            updateAnswer
        })
    

        })
       //GET MARK
       var score = 0;
       var percentage = 0;
        exports.getMark = catchAsync(async(req, res, next)=>{
         const quizName = req.body.quizName;
     
         const mark = await quizModel.findAll({
            attributes:[
               (sequelize.col('mark'))],
         where: ({quizName: quizName}),
         group : ['quiz.quizId'],
         raw: true})
     
      
             Object.keys(mark).forEach(function(key){
            var row = mark[key];
            score += row.mark;
        
            
             });
             var total = mark.length;
             percentage = (score/total) * 100;
            
             console.log(percentage)
                res.status(200).json({
             status:"success",
             message:"mark added successfuly",
             percentage
     
         })
        })
  //GET ALL QUESTIONS AND ANSWERS

  exports.getQuestion = catchAsync(async(req, res, next)=>{
   const quizName = req.body.quizName;


   const question  = await quizModel.findAll({attributes: ["quizName", "subjectName" , "question","answer","learnerAnswer","mark"],
  where: ({quizName: quizName})})
   res.status(200).json({
       status:"success",
       message:"selected",
       question
   })
})
  