/******************************************************************************
 *  Execution       :   1. default node          : cmd> node replaceString.js 
 *                      2. if nodemon installed  : cmd> nodemon replaceString.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the String from input that can be replaced.
 * 
 *  @description    
 * 
 *  @file           : replaceString.js
 *  @overview       : User string that may or may not be replace.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var xz = require('../Utility/utility');
var y = require('readline-sync');
var username=y.question("Enter your name here : ");
xz.stringReplace(username);