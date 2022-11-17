const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const faq = sequelize.define('faq',{
    quesId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    question:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    answer:{
        type:Sequelize.STRING,
        allowNull: true,
    }
} );

module.exports = faq;