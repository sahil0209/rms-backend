const Sequelize = require('sequelize');
const db = require('../util/db');

const Employees = db.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    emp_id: Sequelize.STRING,
    emp_name: Sequelize.STRING,
    date_of_joining: Sequelize.DATE,
    date_of_leaving: Sequelize.DATE,
    designation: Sequelize.STRING,
    emp_role: Sequelize.STRING,
    emp_skills: Sequelize.STRING,
    emp_band: Sequelize.STRING,
    project_id: Sequelize.STRING,
    manager_id: Sequelize.STRING,
    department_id: Sequelize.STRING,
    project_alloted:Sequelize.BOOLEAN
    

});

module.exports = Employees;