const Sequelize = require("sequelize");
const db = require("../util/db");
const employee_project = db.define("employee_project", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  emp_id: { type: Sequelize.STRING, allowNull: false },
  project_id: { type: Sequelize.STRING, allowNull: false },
  date_of_joining_project: { type: Sequelize.DATE, allowNull: false },
  date_of_leaving_project: { type: Sequelize.DATE },
});
module.exports = employee_project;
