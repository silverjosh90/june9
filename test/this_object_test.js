var expect = require('chai').expect
var thisObject = require('../this_object')

describe('thisObject', function(){
  beforeEach(function() {
    thisObject.checkingBalance = 10;
    this.savingsBalance = 200
  });
  it('can add to the checkingBalance', function(){
    thisObject.addToChecking(30)
    expect(thisObject.checkingBalance).to.equal(40);
  })
  it('can modify saving balance', function(){
    thisObject.savingsBalance += 40
    expect(thisObject.savingsBalance).to.equal(240);
  })
  it('can withdraw money', function(){
    thisObject.withdrawMoney(5);
    expect(thisObject.checkingBalance).to.equal(5);
  });

  it('does not allow overdraft', function() {
    when I invoke you, do: thisObject.withdrawMoney(20) with this as thisObject
    expect(thisObject.withdrawMoney.bind(thisObject, 20)).to.throw('you dont have the funds')
  })

  it('fails to add a negative amount', function() {
    thisObject.addToChecking(-10);
    expect(thisObject.checkingBalance).to.equal(10);
  })
})
