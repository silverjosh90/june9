var expect = require('chai').expect;
var globalVar = require('../global');

describe('globalVar', function(){

  it('there is no global.value by default', function(){
    expect(global['value']).to.be.undefined;
  });

  it('should assign a global value', function(){
    var result = "we assigned a global!";
    globalVar(result);
    expect(global.value).to.equal(result);
  });

  it('can handle reassignment', function(){
    globalVar('test 1');
    globalVar('test 2');
    expect(global.value).to.equal('test 2');
  });

});
