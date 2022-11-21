const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'stemia',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;