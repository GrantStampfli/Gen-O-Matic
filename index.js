'use strict';
var fs = require('fs');
var path = require('path');


var readFileName = module.exports.readFileName = function(sitePath, cb) {
  var dir = path.join(sitePath, 'pages');
  fs.readdir(dir, function(err, files){
    cb(err, files);
  });
};

var countFiles = module.exports.countFiles = function(sitePath, cb) {
  
  var result;
  readFileName(sitePath, cb);
  return result;
};
