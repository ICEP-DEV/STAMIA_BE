const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const event = sequelize.define('event',{
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
