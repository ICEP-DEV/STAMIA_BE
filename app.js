//1 REQUIRE PACKAGES
const express = require('express');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');




const app = express();

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const learnerRoute = require('./routes/learnerRoute');
const loginRoute = require('./routes/loginRoute');
const subjectRoute = require('./routes/subjectRoute');
const eventsRoute = require('./routes/eventsRoute');


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
app.use('/api/login', loginRoute);
app.use('/api/subject',subjectRoute);
app.use('/api/events', eventsRoute);




app.use(globalErrHandler);
module.exports = app;
