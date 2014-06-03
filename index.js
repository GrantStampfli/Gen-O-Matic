'use strict';
var fs = require('fs');
var path = require('path');


var readFileNAme = module.exports.readFileName = function(sitePath) {
  // var dir = (path);
  var dir = path.join(sitePath, 'pages');
  //var result = [];
    console.log(dir);
    var result = fs.readdirSync(dir);
    console.log(result);
  return result;
};

var countFiles = module.exports.countFiles = function() {
  var result;

  return result;
};
