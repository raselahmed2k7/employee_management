
const EmployeeModel = require('../model/employee')
const allEemployees =  async () => {
  
  const employees = EmployeeModel.all 
console.log(employees);
  return employees;
}

module.exports = {
  allEemployees
}