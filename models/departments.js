const Sequelize = require('sequelize');
const db = require('../util/db');

const Department = db.define('department', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // allowNull: false,
        // primaryKey: true
    },
    department_id: {
        type: Sequelize.STRING,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    department_name: Sequelize.STRING

});

module.exports = Department;