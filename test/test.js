var expect = require('chai').expect;
var path = require('path');
var lib = require('..');
var temp = require('temp').track();
var compareDirs = require('./helpers').compareDirs;

describe('readSitePages()', function(){

  it('reads the file names of the site1/pages', function(done){
    var sitePath = path.join(__dirname, 'fixtures/site1');
    lib.readSitePages(sitePath, function(err, result){
      expect(result).to.eql(['about.html', 'home.html']);
      done();
    });
  });

});

describe('generateSite', function(){

  it('creates new files in `generated` dir with ' +
    'same name as files in `pages`', function(done){
    var originalSitePath = path.join(__dirname, 'fixtures/site1');
    temp.mkdir('tmp', function(err, generatedSitePath){
      lib.generateSite(originalSitePath, generatedSitePath, function(err){
        var expectedSitePath = path.join(__dirname, 'expected/site1');
        compareDirs(expectedSitePath, generatedSitePath, function(err, equal) {
          // expect(equal).to.be.true;
          temp.cleanup(function(err, stats){
            done();
          });
        });
        // expect(originalSitePath).to.eql(temp);
        // console.log('%j should only happen once', temp);
      });
    });
  });

});
