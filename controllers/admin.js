const Project = require("../models/projects");

exports.showProject = (req, res, next) => {
    // console.log("Function Hit");
    Project.findAll()
        .then((users) => {
            res.status(200).json({ users: users });
        })
        .catch((err) => console.log(err));
};

exports.approveProject = (req, res, next) => {
    const project_id = req.body.project_id;
    const status = "Approved";

    Project.findByPk(project_id)
        .then((project) => {
            if (!project)
                return res
                    .status(404)
                    .json({ message: "Project not found :) " });
            project.status = status;
            return project.save();
        })
        .then((result) => {
            res.status(200).json({
                message: "Project Approved",
                Project: result,
            });
        })
        .catch((err) => console.log(err));
};

exports.declineProject = (req, res, next) => {
    const project_id = req.body.project_id;
    const status = "Declined";

    Project.findByPk(project_id)
        .then((project) => {
            if (!project)
                return res
                    .status(404)
                    .json({ message: "Project not found :) " });
            project.status = status;

            return project.save();
        })
        .then((result) => {
            res.status(200).json({
                message: "Project Declined",
                Project: result,
            });
        })
        .catch((err) => console.log(err));
};
