var Employee = require('./employee')

function SoftwareDeveloper(name, title, skills) {
  Employee.apply(this, [name,title])
  this.skills = skills
}
SoftwareDeveloper.prototype = Object.create(Employee.prototype)
SoftwareDeveloper.prototype.constructor = SoftwareDeveloper

module.exports = SoftwareDeveloper
