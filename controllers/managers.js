const Project = require("../models/projects");

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
  const status = req.body.status;

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
