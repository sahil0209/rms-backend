const controllers = require("../controllers/managers");
const express = require("express");
const router = express.Router();

router.post("/createProject", controllers.createProject);

module.exports = router;
