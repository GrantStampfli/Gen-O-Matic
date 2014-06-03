var expect = require('chai').expect;
var path = require('path');
var lib = require('..');

describe('readFileName()', function(){

  it.only('reads the file names of the site1/pages', function(done){
    var site1Path = path.join(__dirname, 'fixtures/site1');
    lib.readFileName(site1Path, function(err, result){
      expect(result).to.eql(['about.html', 'home.html']);
      done();
    });
  });

});

describe('countFiles()', function(){

  it('should tell us how many files are in the pages directory', function(){
    expect(lib.countFiles()).to.eql(2);
  });

});
