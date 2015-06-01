var assert = require("assert");
describe('Addition', function(){
  it('should sum 2 + 2 to 4', function(){
    var expectedVal = 4;
    var result = 2 + 2;
    assert.equal(expectedVal, result);
  });
});
