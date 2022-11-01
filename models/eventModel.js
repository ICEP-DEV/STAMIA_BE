const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const calendar = sequelize.define('calendar',{
calendarID:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
title:{
    type: Sequelize.STRING,
        allowNull: false,
}

} );

module.exports = calendar;