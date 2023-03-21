const Project = require("../models/projects");
const Employee = require("../models/employees");
const Employee_Project = require("../models/employeeProjects");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// exports.getUsers = (req, res, next) => {
//     // console.log("Function Hit");
//     User.findAll()
//         .then((users) => {
//             res.status(200).json({ users: users });
//         })
//         .catch((err) => console.log(err));
// };

exports.createProject = (req, res, next) => {
  const project_id = req.body.project_id;
  const project_name = req.body.project_name;
  const project_description = req.body.project_description;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const manager_id = req.body.manager_id;
  const no_of_employees_required = req.body.no_of_employees_required;
  const no_of_offrole = req.body.no_of_offrole;
  const no_of_patners = req.body.no_of_patners;
  const funds_sanctioned = req.body.funds_sanctioned;
  const total_expenses = req.body.total_expenses;
  const status = "NotApproved";

  Project.create({
    project_id: project_id,
    project_name: project_name,
    project_description: project_description,
    start_date: start_date,
    end_date: end_date,
    manager_id: manager_id,
    no_of_employees_required: no_of_employees_required,
    no_of_offrole: no_of_offrole,
    no_of_patners: no_of_patners,
    funds_sanctioned: funds_sanctioned,
    total_expenses: total_expenses,
    status: status,
  })
    .then((result) => {
      res.status(201).json({
        message: "Project created successfully!",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error Occured",
        data: err,
      });
    });
};

// update project with coreesponding project_id (String)
exports.updateProject = (req, res, next) => {
  const project_id = req.params.project_id;
  const project_name = req.body.project_name;
  const project_description = req.body.project_description;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const manager_id = req.body.manager_id;
  const no_of_employees_required = req.body.no_of_employees_required;
  const no_of_offrole = req.body.no_of_offrole;
  const no_of_patners = req.body.no_of_patners;
  const funds_sanctioned = req.body.funds_sanctioned;
  const total_expenses = req.body.total_expenses;
  const status = req.body.status;

  Project.findByPk(project_id)
    .then((project) => {
      if (!project)
        return res.status(404).json({ message: "Project not found :) " });

      project.project_name = project_name;
      project.project_description = project_description;
      project.start_date = start_date;
      project.end_date = end_date;
      project.manager_id = manager_id;
      project.no_of_employees_required = no_of_employees_required;
      project.no_of_offrole = no_of_offrole;
      project.no_of_patners = no_of_patners;
      project.funds_sanctioned = funds_sanctioned;
      project.total_expenses = total_expenses;
      project.status = status;

      return project.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Project updated",
        Project: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.getEmployeesWithProject = (req, res, next) => {
  const project_id = req.body.project_id;
  Employee_Project.findAll({
    attributes: ["emp_id"],
    where: { project_id: project_id },
  })
    .then((emp_ids) => {
      let emp_id_array = emp_ids.map((ele) => {
        return ele.dataValues.emp_id;
      });
      console.log("emp_id_array", emp_id_array);
      Employee.findAll({ where: { emp_id: { [Op.in]: emp_id_array } } })
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((err) => {
          res.status(500).send({ message: "Error Occured", err: err });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.employeeAvailability = (req, res, next) => {
  const emp_id = req.body.emp_id;
  const st_date = req.body.start_date;
  const end_date = req.body.end_date;
  Employee_Project.findAll({
    attributes: ["date_of_joining_project", "date_of_leaving_project"],
    where: { emp_id: emp_id },
  })
    .then((data) => {
      let dojl = data.map((ele) => {
        return [
          ele.dataValues.date_of_joining_project,
          ele.dataValues.date_of_leaving_project,
        ];
      });
      dojl.forEach((ele) => {
        dateEle1 = new Date(ele[1]).getTime();
        dateEle0 = new Date(ele[0]).getTime();
        datest = new Date(st_date).getTime();
        dateend = new Date(end_date).getTime();

        console.log("condition1", dateEle1, datest, dateEle1 < datest);
        console.log("condition2", dateEle0, dateend, dateEle0 > dateend);
        if (
          (dateEle0 < dateend && dateEle0 > datest) ||
          (datest < dateEle1 && datest > dateEle0)
        ) {
          return res.status(500).send({ message: "overlapping occur" });
        }
      });
      return res.status(200).send({ message: "No discrepancy", value: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.pastProjects = (req, res, next) => {
  const NOW = new Date();
  console.log(NOW);
  Project.findAll({
    where: { end_date: { [Op.lt]: NOW } },
  })
    .then((result) => {
      res.status(200).send({ project: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.employeeBasedOnSkillAndGrade = (req, res, next) => {
  const skill = req.body.emp_skills;
  const band = req.body.emp_band;
  Employee.findAll({
    where: { emp_skills: skill, emp_band: band },
  })
    .then((result) => {
      res.status(200).send({ Employee: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
