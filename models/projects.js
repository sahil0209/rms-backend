const Sequelize = require("sequelize");
const db = require("../util/db");

const Project = db.define("project", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    // primaryKey: true
  },
  project_id: {
    type: Sequelize.STRING,
    // autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  project_description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATE,
  },
  end_date: {
    type: Sequelize.DATE,
  },
  manager_id: {
    type: Sequelize.BIGINT,
  },
  no_of_employees_required: {
    type: Sequelize.INTEGER,
  },
  no_of_offrole: {
    type: Sequelize.INTEGER,
  },
  no_of_patners: {
    type: Sequelize.INTEGER,
  },
  funds_sanctioned: {
    type: Sequelize.BIGINT,
  },
  total_expenses: {
    type: Sequelize.BIGINT,
  },
  status: {
    type: Sequelize.STRING,
  }
});

module.exports = Project;
