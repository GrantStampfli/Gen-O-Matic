'use strict';
var fs = require('fs');

var readFileNAme = module.exports.readFileName = function() {
  var dir = ('./pages');

  //var result = [];
    var result = fs.readdir(dir, result);
  return result;
};

var countFiles = module.exports.countFiles = function() {
  var result;

  return result;
};
