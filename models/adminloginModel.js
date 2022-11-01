const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const admin = sequelize.define('admin',{
adminID:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
userName:{
    type: Sequelize.STRING,
        allowNull: false,
},
password:{
    type:Sequelize.STRING,
    allowNull: false,
},
} );

module.exports = admin;