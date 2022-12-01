//1 REQUIRE PACKAGES
const express = require('express');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();

//2 REQUIRE ROUTES 
const learnerRoute = require('./routes/learnerRoute');
const quizRoute = require('./routes/quizRoute');
const markRoute = require('./routes/markRoute');
const questionRoute = require('./routes/questionRoute');
const loginRoute = require('./routes/loginRoute');
const faqRoute = require('./routes/faqRoute');
const getByGradeRoute = require('./routes/getByGradeRoute');


//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(express.static(__dirname));


//4 CREATE API URL
app.use('/api/learner', learnerRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/mark',markRoute);
app.use('/api/question',questionRoute);
app.use('/api/login',loginRoute);
app.use('/api/faq',faqRoute);
app.use('/api/grade',getByGradeRoute);


app.use(globalErrHandler);
module.exports = app;