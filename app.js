//1 REQUIRE PACKAGES
const express = require('express');
const morgan = require('morgan');
const globalErrHandler = require('./utils/errHandler.js');
const cors = require('cors');

const upload = multer({ dest: "uploads/" });

const app = express();

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));
  
  const initRoutes = require("./routes/uploadsRoute");
  
  app.use(express.urlencoded({ extended: true }));
  initRoutes(app);

//2 REQUIRE ROUTES (WHICH WE DO NOT HAVE YET)
const learnerRoute = require('./routes/learnerRoute');
const loginRoute = require('./routes/loginRoute');
const subjectRoute = require('./routes/subjectRoute');
const uploadsRoute = require('./routes/uploadsRoute');


//3 APP.USE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.options('*', cors());
//app.use(express.urlencoded({ extended: true }));

//4 CREATE API URL
app.use('/api/learner', learnerRoute);
app.use('/api/login', loginRoute);
app.use('/api/subject',subjectRoute);
app.use('/upload'),uploadsRoute;

var session;

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.json("Welcome to STEMIA!!");
    }else
    res.json("Please login to STEMIA fisrt!! ");
});



app.use(globalErrHandler);
module.exports = app;
