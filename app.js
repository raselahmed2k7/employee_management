const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config();

const app = express()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server Listening on Host = ${process.env.HOSTNAME} and Port: ${process.env.PORT}`);
}) 