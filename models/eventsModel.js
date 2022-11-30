const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const events = sequelize.define('events',{
    eventId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    eventName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = events;
