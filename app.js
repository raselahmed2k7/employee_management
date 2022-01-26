const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config();
const app = express()

// const rootRoutes = require('./route/root');
// const employeeRoutes = require('./route/employee');
const router = express.Router();
const employeeController = require("./controllers/employee");

// router.use("/", rootRoutes);
// router.use("/employees", employeeRoutes);

// apply the routes to our application
app.use('/', router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/v1/employees', employeeController.getEmployees);

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server Listening on Host = ${process.env.HOSTNAME} and Port: ${process.env.PORT}`);
}) 