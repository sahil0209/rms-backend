const controllers = require("../controllers/managers");
const express = require("express");
const router = express.Router();

router.post("/", controllers.createProject);
router.put("/:project_id", controllers.updateProject);
router.get("/pastProjects", controllers.pastProjects);



module.exports = router;
