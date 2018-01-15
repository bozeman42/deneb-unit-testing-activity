var expect = require('chai').expect;
var oddEven = require('../src/server/modules/oddEven');

describe('oddEven module', function() {
  
  it('should error nicely when passed a non number', function() {
    // Make changes to the module, not this test.
    expect(() => oddEven('abc')).to.throw(TypeError, /expects a number/);
  });

  it('should return the string even when passed an even nubmer', function() {
    expect(oddEven(4)).to.equal('even');
  });

  it('should return the string odd when passed an odd nubmer', function() {
    expect(oddEven(5)).to.equal('odd');
  });

  it('should error nicely when passed a non integer number', function() {
    expect(() => oddEven(1.5)).to.throw(TypeError, /expects an integer/);
  });




});
