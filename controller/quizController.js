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
  //   const randomValue = (list) => {
  //     return list[Math.floor(Math.random() * list.length)];
  // };

  const quiz  = await quizModel.findAll({attributes: ["quizName", "subjectName" , "question"],
  where: ({quizName: quizName})})
 //let myquiz;
 for(var i = 0; i < quiz.length; i++){

     var random = Math.floor(Math.random() * quiz.length);
     
     questions.push(random);
 }

 console.log(questions);
// res.status(200).json(myquiz)

// const values = Object.values(quiz)

// const randomValue = values[parseInt(Math.random() * values.length )]

//if(questions.find(randomValue)== -1 ){


   console.log(JSON.stringify(quiz));
   console.log(index)
   index++;
      res.status(202).send(quiz[questions[index]]);
 
  

//}else{


//}


//res.status(200).json(randomValue)

   // while(quiz.length){
    //   var rand = (quiz.splice(quiz.length * Math.random() | 0, 1)[0] )
    // }

    // if(quiz.indexOf(quiz[i])=== -1 && quiz[i] !== ''){
    //    myquiz.push(quiz[i]);

    //    return myquiz;
    // }  

//  console.log(rand)
//  res.status(200).json(rand)


     //   res.status(200).json(randomValue(quiz));

        // var quizzes = quiz.slice();
        // while(quizzes.length){
           
        //   random = Math.floor(Math.random() * quizzes.length);
        //   console.log(quizzes[random]);
        //   quizzes[random] = ' ';
        //   quizzes = quizzes.filter(a=>{return a});
        // }

        // console.log(quiz);
        
      //   function* randomValue(arr){
      //    let value;
      //    while(arr.length > 0){
      //       let ques = Math.floor(Math.random() * arr.length);
      //       value = arr.splice(ques,1)[0];
      //       yield value;

      //    }
         
      //   }
      //   res.status(200).json(randomValue(quiz));
        //const select = quiz.sort(() => Math.random() - 0.5).slice(0, 5)
       // res.status(200).json(select);
   //          res.status(200).json({
   //      status:"success",
   //      message:"quiz selected",
   //      quiz             
   //  })

   
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
  