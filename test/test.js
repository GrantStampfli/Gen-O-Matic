var expect = require('chai').expect;
var path = require('path');
var lib = require('..');
var temp = require('temp').track();

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
        // TODO: need to compare generatedSitePath dir with the
        // expected/site1 dir and expect them to be the same.

        temp.cleanup(function(err, stats){
          done();
        });
      });
    });
  });

});
