'use strict';
var fs = require('fs'),
	temp = require('temp'),
	util = require('util'),
	path = require('path');

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

/**
 * Generate a site path
 *
 * @function
 * @param {string} original - The file path to a site directory
 * that has original pages.
 * @param {string} generated - The file path to a new site directory.
 * This directory must exist prior to calling the fn.
 * @param {function} cb - The callback function which takes one arg, `err`.
 * err is an error.
 */
var writeNewFiles = module.exports.writeNewFiles = function (original, generated, cb) {

  var layoutPath = path.join(original, 'layouts/default.html');
  var options = { encoding : 'utf8' };

  fs.readFile(layoutPath, options, function(err, layoutContents){
    readFileName(original, function(err, files){

      files.forEach(function(fileName){

        var generatedFilePath = path.join(generated, fileName);
        var originalFilePath = path.join(original, 'pages', fileName);

        fs.readFile(originalFilePath, options, function (err, orgContents) {
          var newContent = layoutContents.replace('{{ content }}', orgContents);

          fs.writeFile(generatedFilePath, newContent, options, function(err){
            if (err) throw err;
          });
        });
      });
    });
  });
};
