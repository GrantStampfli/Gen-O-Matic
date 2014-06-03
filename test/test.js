var expect = require('chai').expect;
var path = require('path');
var lib = require('..');

describe('readFileName()', function() {

  it.only('should read the file names of the pages directory', function(){
    var site1Path = path.join(__dirname, 'fixtures/site1');
    expect(lib.readFileName(site1Path)).to.eql(['about.html', 'home.html']);
  });

});

describe('countFiles()', function(){

  it('should tell us how many files are in the pages directory', function(){
    expect(lib.countFiles()).to.eql(2);
  });

});
