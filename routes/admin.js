const controllers = require("../controllers/admin");
const express = require("express");
const router = express.Router();

router.get("/showDepartments", controllers.showDepartments);

router.get("/showProjects", controllers.showProjects);

router.get("/showManagers", controllers.showManagers);

router.get("/showEmployees", controllers.showEmployees);

router.get("/showEmployeeProjects", controllers.showEmployeeProjects);

module.exports = router;
