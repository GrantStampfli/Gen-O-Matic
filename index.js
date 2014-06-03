'use strict';
var fs = require('fs');
var path = require('path');


var readFileNAme = module.exports.readFileName = function(sitePath, cb) {
  var dir = path.join(sitePath, 'pages');
  fs.readdir(dir, function(err, files){
    cb(err, files);
  });
};

var countFiles = module.exports.countFiles = function() {
  var result;

  return result;
};
