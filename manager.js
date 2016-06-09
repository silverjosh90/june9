var SoftwareDeveloper = require('./software_developer')

function Manager(name, title, skills, employees) {
  SoftwareDeveloper.apply(this, [name, title, skills])
  this.employees = employees || []
}

Manager.protoype = Object.create(SoftwareDeveloper.prototype)

module.exports = Manager
