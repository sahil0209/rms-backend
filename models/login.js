const Sequelize = require('sequelize');
const db = require('../util/db');

const Login = db.define('login', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: Sequelize.STRING,
    pwd: Sequelize.STRING,
    emp_role: Sequelize.STRING,
});

module.exports = Login;