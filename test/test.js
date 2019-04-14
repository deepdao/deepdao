var assert = require('assert');
var sum = require('../web/assets/js/main.js');
console.log(sum)
describe('#sum', function() {
  context('without arguments', function() {
    it('should return 0', function() {
	    assert.equal(sum(), 1);
      //expect(sum()).to.equal(1)
    })
  })
});

