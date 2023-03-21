const managerControllers = require("../controllers/managers");
const express = require("express");
const router = express.Router();

router.post("/createProject", managerControllers.createProject);
router.put("/:project_id", managerControllers.updateProject);
router.get("/pastProjects", managerControllers.pastProjects);
router.post("/getEmployeeBasedOnGradeAndSkill", managerControllers.employeeBasedOnSkillAndGrade);



module.exports = router;
