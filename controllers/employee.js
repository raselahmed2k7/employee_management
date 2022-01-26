
const getEmployees =   async (req, res, next) => {
  const employeeService = employeeService.allEemployees
  return res.json({ employeeService });
}

module.exports = {
  getEmployees
}