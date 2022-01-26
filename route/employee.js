const express = require("express");
const employeeController = require("../controllers/employee");
const router = express.Router();
router
  .route("/get")
  .get(employeeController.employees);
  
module.exports = router;