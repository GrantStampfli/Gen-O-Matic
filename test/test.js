var expect = require('chai').expect;
var path = require('path');
var lib = require('..');

describe('readFileName()', function(){
//
  it('reads the file names of the site1/pages', function(done){
    var sitePath = path.join(__dirname, 'fixtures/site1');
    lib.readFileName(sitePath, function(err, result){
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


describe('writeNewFiles', function(){

  it.skip('creates new files in `generated` dir with ' +
    'same name as files in `pages`', function(done){
    var originalSitePath = path.join(__dirname, 'fixtures/site1');
    var generatedSitePath = path.join(__dirname, 'temp/site1');

    lib.writeNewFiles(originalSitePath, generatedSitePath, function(err){
      //content generated

      // TODO: need to compare temp/site1 dir with the
      // expected/site1 dir and expect them to be the same.
      done();
    });
  });

  it('creates a `temp` directory', function(done){
    var originalSitePath = path.join(__dirname, 'fixtures/site1');
    var generatedSitePath = path.join(__dirname, 'temp/site1');

    lib.writeNewFiles(originalSitePath, generatedSitePath, function(err){
      expect(result).to.eql(['about.html', 'home.html']);
      done();
    });
  });

});
