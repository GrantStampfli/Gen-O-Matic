var expect = require('chai').expect;
var _ = require('..');

describe('readFileName()', function() {

  it('should read the file names of the pages directory', function(){
    expect(_.readFileName()).to.eql(['about.html', 'home.html']);
  });

});
