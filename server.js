const app = require('./app'); //Since we have created our app module we can require the module
const dotenv = require('dotenv'); //For Reading .env File  - This file is going to be important in the future when are going to host our database
const {Sequelize} = require('sequelize');
dotenv.config({ path: './.env'});
const sequelize = require('./config/db');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const login = require('./controller/loginController')

// app.use('/login',login)

app.use(cookieParser());

const oneDay = 1000*60*60*24;

app.use(session({
    secret:'nbhfsjezgjsgdlvjzednxb mfnb kfvbm ,vf bmvxnb z;/l nmglvn lbhgnmfg bnmvc',
    resave: false,
    saveUninitialized: false,
   cookie: {maxAge: oneDay}
}));

sequelize.sync();
const port = process.env.PORT || 4200;
app.listen(port, ()=>{
    console.log(`Application running on port ${port}`);
});