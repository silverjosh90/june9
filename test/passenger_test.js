var expect = require('chai').expect
var Passenger = require('../passenger')

describe('Passenger', function(){
  it('has a name and age', function(){
    var passenger = new Passenger('Timmy', 12);
    expect(passenger).to.deep.equal({name: 'Timmy',age: 12});
  });
});
