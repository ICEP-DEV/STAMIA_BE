//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');




const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const learnerRoute = require('./routes/learnerRoute');
const loginRoute = require('./routes/loginRoute');
const subjectRoute = require('./routes/subjectRoute');
const eventsRoute = require('./routes/eventsRoute');



//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());



//4 CREATE API URL
app.use('/api/learner/', learnerRoute);
app.use('/api/login', loginRoute);
app.use('/api/subject',subjectRoute);
app.use('/api/event', eventsRoute);



app.use(globalErrHandler);
module.exports = app;
