const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'stemia_project',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;