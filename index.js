'use strict';
var fs = require('fs');
var path = require('path');

/**
 * Read file names
 *
 * @function
 * @param {string} sitePath - The file path to a site directory.
 * @param {function} cb - The callback function which takes two args, 
 * those two are `err` and `files` `err` is an error and `files`
 * is an array of strings containing the names of the files.
 */
var readFileName = module.exports.readFileName = function(sitePath, cb) {
  var dir = path.join(sitePath, 'pages');
  fs.readdir(dir, function(err, files){
    cb(err, files);
  });
};

/**
 * Count files
 *
 * @function
 * @param {string} sitePath - The file path to a site directory.
 * @param {function} cb - The callback function which takes two args, 
 * those two are `err` and `count`, `err` is an error and `count`
 * is a number, represents the number of files.
 */
var countFiles = module.exports.countFiles = function(sitePath, cb) {
	readFileName(sitePath, function(err, files){
		cb(err, files.length);
	});
};
