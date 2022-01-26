const express = require("express");
const indexController = require("../controllers/index");
const router = express.Router();
console.log('in route routes');
router
  .route("/")
  .get(indexController.index);
module.exports = router;