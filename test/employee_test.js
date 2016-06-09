var expect = require('chai').expect
var Employee = require('../employee')

describe('Employee', function(){
  it('has a name and title', function(){
      var employee = new Employee('John Smith', 'Janitor')
      expect(employee).to.deep.equal({name: 'John Smith', title: 'Janitor'})
  })
})
