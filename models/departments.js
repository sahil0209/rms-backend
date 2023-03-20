const Sequelize = require('sequelize');
const db = require('../util/db');

const Department = db.define('department', {
    department_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    department_name: Sequelize.STRING,
    department_sub_name: Sequelize.STRING,
    department_sub_sub_name: Sequelize.STRING

});

module.exports = Department;