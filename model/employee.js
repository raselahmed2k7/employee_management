
const all =   async (req, res, next) => {  
  const employeesData = fs.readFileSync(dataPath)
  return JSON.parse(employeesData)   
}

module.exports = {
  all
}