const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Subjects = sequelize.define('Subjects',{
    subject_code:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
   subject_Name:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   subject_Desc:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   subject_req:{
    type: Sequelize.STRING,
    allowNull: false,
   },

    
     
})

module.exports = Subjects;