var expect = require('chai').expect;
var path = require('path');
var lib = require('..');

describe('readFileName()', function(){
// 
  it('reads the file names of the site1/pages', function(done){
    var site1Path = path.join(__dirname, 'fixtures/site1');
    lib.readFileName(site1Path, function(err, result){
      expect(result).to.eql(['about.html', 'home.html']);
      done();
    });
  });

});

describe('countFiles()', function(){

  it('should tell us how many files are in site1/pages', function(done){
    var site1Path = path.join(__dirname, 'fixtures/site1');
    lib.countFiles(site1Path, function(err, result){
      expect(result).to.eql(2);
      done();
    });
  });

});
