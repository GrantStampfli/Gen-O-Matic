'use strict';
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports.compareDirs = function(firstDirPath, secondDirPath, cb) {
  // this funciton doesn't really handle errors well. it just
  // throws them rather than passing them back to the callback.
  // this is okay for testing purposes, but it shouldn't be
  // re-used elsewhere.
  var result = false;
  fs.readdir(firstDirPath, function(err, firstDirContents) {
    if (err) { throw err; }
    fs.readdir(secondDirPath, function(err, secondDirContents) {
      if (err) { throw err; }
      if (firstDirContents.length != secondDirContents.length) {
        return cb(null, false);
      }

      firstDirContents = firstDirContents.sort();
      secondDirContents = secondDirContents.sort();
      if (_.isEqual(firstDirContents, secondDirContents)) {
        var comparisons = 0;
        firstDirContents.forEach(function(fileName) {
          var firstPath = path.join(firstDirPath, fileName);
          var secondPath = path.join(secondDirPath, fileName);
          var options = { encoding: 'utf8' };
          fs.readFile(firstPath, options, function(err, firstItemContents) {
            if (err) { throw err; }
            fs.readFile(secondPath, options, function(err, secondItemContents) {
              if (err) { throw err; }
              if (firstItemContents !== secondItemContents) {
                result = false;
              }
              comparisons += 1;
              if (comparisons === firstDirContents.length) {
                cb(null, result);
              }
            });
          });
        });
      }
    });
  });
};