const employeeLists = '../config/employeeLists.json' // path to our JSON file
const all = async () => {  
  const employeesData = fs.readFileSync(employeeLists)
  return JSON.parse(employeesData)   
}

module.exports = {
  all
}