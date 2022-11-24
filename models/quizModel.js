const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const quiz = sequelize.define('quiz',{
    quizId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    quizName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    question:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    answer:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    learnerAnswer:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    mark:{
        type:Sequelize.DOUBLE,
        allowNull: true,
    }
} );

module.exports = quiz;