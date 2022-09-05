const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const learner = sequelize.define('learner',{
    userId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    school:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false,
    }
} );

module.exports = learner;