const controllers = require("../controllers/admin");
const express = require("express");
const router = express.Router();

// router.get("/showDepartments", controllers.showDepartments);

router.get("/", controllers.showProject);

router.put("/projectApproved", controllers.approveProject);
router.put("/projectDeclined", controllers.declineProject);

// router.get("/showManagers", controllers.showManagers);

// router.get("/showEmployees", controllers.showEmployees);

// router.get("/showEmployeeProjects", controllers.showEmployeeProjects);

module.exports = router;
