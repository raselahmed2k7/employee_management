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


// about page route (http://localhost:8080/about)
// router.get('/employees', EmployeeController.getEmployees);

// router.get('/employees',  async (req, res) =>{
//     res.send('hsdhfd')
//     // next()
// });

// apply the routes to our application
app.use('/', router);
// router.use(route);
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// router.get('/', function (req, res) {
//     res.send('Birds home page')
//   })

router.get('/api/v1/employees', employeeController.getEmployees);

// route.post('/', 
//   validators.userSignup, // this middleware take care of validation
//   async (req, res, next) => {
//     // The actual responsability of the route layer.
//     const userDTO = req.body;

//     // Call to service layer.
//     // Abstraction on how to access the data layer and the business logic.
//     const { user, company } = await UserService.Signup(userDTO);

//     // Return a response to client.
//     return res.json({ user, company });
//   });

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server Listening on Host = ${process.env.HOSTNAME} and Port: ${process.env.PORT}`);
}) 