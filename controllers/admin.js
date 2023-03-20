const Project = require("../models/project");

exports.getProject = (req, res, next) => {
    // console.log("Function Hit");
    Project.findAll()
        .then((users) => {
            res.status(200).json({ users: users });
        })
        .catch((err) => console.log(err));
};

