
const employeeService = require('../services/employee_service')
const employees =  async (req, res, next) => {
  const employeeLists = await employeeService.allEemployees
  return res.status(SUCCESS).json({ employeeLists });
  next()
}

module.export = {
  employees
}