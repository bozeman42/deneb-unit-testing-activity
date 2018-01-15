let expect = require('chai').expect;
let capitalize = require('../src/server/modules/capitalize');

describe('capitalize module', () => {
  it('Should return a string with the first letter capitalized (word)',() => {
    expect(capitalize('abc')).to.equal('Abc');
  });
  it('Should return a string with the first letter capitalized (Sentence)',() => {
    expect(capitalize('to kill a mockingbird')).to.equal('To Kill A Mockingbird');
  });
  it('Should return a string with the first letter capitalized with multiple spaces between words (Sentence)',() => {
    expect(capitalize('  to kill a  mockingbird')).to.equal('  To Kill A  Mockingbird');
  });
  it('should allow numbers in the input string without changing them',() => {
    expect(capitalize('0 12 alphabets')).to.equal('0 12 Alphabets');
  });
  it('should throw an error if passed a non-string',() => {
    expect(() => capitalize(123)).to.throw(TypeError,/expects a string/);
  });
})