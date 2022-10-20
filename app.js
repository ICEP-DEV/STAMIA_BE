//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');

const app = express();

//2 REQUIRE ROUTES 
const learnerRoute = require('./routes/learnerRoute');
const quizRoute = require('./routes/quizRoute');
const markRoute = require('./routes/markRoute');
const questionRoute = require('./routes/questionRoute');
const loginRoute = require('./routes/loginRoute');

//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());


//4 CREATE API URL
app.use('/api/learner', learnerRoute);
app.use('/api/quiz', quizRoute);
app.use('/api/mark',markRoute);
app.use('/api/question',questionRoute);
app.use('/api/login',loginRoute);


app.use(globalErrHandler);
module.exports = app;