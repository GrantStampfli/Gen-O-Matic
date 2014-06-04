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
/**
 * went into original/pages dir, read file names
 * created the files with same names in generated dir
 * coppied template in the orginal/layouts dir and put content into each file in generated dir
 * read files in original/pages dir
 * copied content and put it into the generated dir files where content marker is

 *~~~~~~ We think the below function is superior.
 * went into original/pages dir, read file names ^_^
   * have string that will be contents of file(starts as default.html:)
   * read content of original/pages/currentfile :)
   * replace the content marker in the string with that content
   * save string as new file in generated

*/

  var defaultPath = path.join(original, 'layouts/default.html');
  //console.log('%j', defaultPath);
  var options = { encoding : 'utf8' };
  fs.readFile(defaultPath, options, function(err, contents){
    var string = contents;
    readFileName(original, function(err, files){
      //console.log(files);
      files.forEach(function(fileName){
        var filePath = path.join(generated, fileName);
        console.log('Im about to write %j', filePath);
        fs.writeFile(filePath, contents, options, function(err){
           if (err) throw err;
        });
        //console.log(fileName);

      });
    });

  });



};
