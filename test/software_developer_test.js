var expect = require('chai').expect
var SoftwareDeveloper = require('../software_developer');
var Employee = require('../employee')

describe('SoftwareDeveloper', function(){
  it('inherits name from employee class', function(){
    var dev = new SoftwareDeveloper('Alex', 'Software Developer');
    expect(dev.name).to.equal('Alex');
  });

  it('inherits title from employee class', function(){
    var dev = new SoftwareDeveloper('Alex', 'Software Developer');
    expect(dev.title).to.equal('Software Developer');
  });

  it('holds a skills property', function(){
    var dev = new SoftwareDeveloper('Alex', 'Software Developer', 'programming');
    expect(dev.skills).to.equal('programming');
  });

  it('should be an instance of a employee', function(){
    var dev = new SoftwareDeveloper('Alex', 'Software Developer', 'programming');
    expect(dev instanceof Employee).to.equal(true);
  })
});
