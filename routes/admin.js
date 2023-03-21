const adminControllers = require("../controllers/admin");
const managerControllers = require("../controllers/managers");
const express = require("express");
const router = express.Router();



router.get("/showProjects", adminControllers.showProject);

router.put("/projectApproved", adminControllers.approveProject);
router.put("/projectDeclined", adminControllers.declineProject);

router.post("/getEmployeesWithProjectID", managerControllers.getEmployeesWithProject);


// router.get("/showDepartments", controllers.showDepartments);

// router.get("/showManagers", controllers.showManagers);

// router.get("/showEmployees", controllers.showEmployees);

// router.get("/showEmployeeProjects", controllers.showEmployeeProjects);

module.exports = router;
