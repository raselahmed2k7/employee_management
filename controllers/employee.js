
const getEmployees =   async (req, res, next) => {
  const employeeService = employeeService.allEemployees
  return res.status(SUCCESS).json({ employeeService });
}

module.exports = {
  getEmployees
}