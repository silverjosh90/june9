var expect = require('chai').expect;
var Manager = require('../manager');
var SoftwareDeveloper = require('../software_developer');
var Employee = require('../employee');


describe('Manager', function(){
  it('inherits from software developer', function(){
    var mang = new Manager('Matt', 'manager', 'programming');
    expect(mang instanceof SoftwareDeveloper);
  });
  it('inherits from employee', function(){
    var mang = new Manager('Matt', 'manager', 'programming');
    expect(mang instanceof Employee);
  });
  it('has an Employee property', function(){
    var tim = new Employee('Tim', 'Janitor')
    var mang = new Manager('Matt', 'manager', 'programming', [tim]);
    expect(mang.employees).to.deep.equal([tim])
  })

  it('has an Employee property that accepts software developers', function(){
    var josh = new SoftwareDeveloper('Josh', 'Programmer', 'programming')
    var mang = new Manager('Matt', 'manager', 'programming', [josh]);
    expect(mang.employees).to.deep.equal([josh])
  })

  it('has an Employee property that accepts software developers and employees', function(){
    var josh = new SoftwareDeveloper('Josh', 'Programmer', 'programming')
    var tim = new Employee('Tim', 'Janitor')
    var mang = new Manager('Matt', 'manager', 'programming', [josh, tim]);
    expect(mang.employees).to.deep.equal([josh, tim])
  })
});
