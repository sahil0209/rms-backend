const Sequelize = require('sequelize');
const db = require('../util/db');

const Manager = db.define('manager', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manager_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    manager_name: {
        type: Sequelize.STRING,
    },
    department_id: {
        type: Sequelize.INTEGER,
    }
});



module.exports = Manager;