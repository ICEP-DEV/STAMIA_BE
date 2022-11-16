const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const learner = sequelize.define('learner',{
    userId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    fullname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
   
    email:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    age:{
         type:Sequelize.INTEGER,
        allowNull: false,
    },
    school:{
        type:Sequelize.STRING,
         allowNull: false,
    },
     grade:{
         type:Sequelize.INTEGER,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false,
    }
} );

module.exports = learner;
