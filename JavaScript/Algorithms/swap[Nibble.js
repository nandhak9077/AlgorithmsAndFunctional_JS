/******************************************************************************
 *  Execution       :   1. default node          : cmd> node swap[Nibble.js 
 *                      2. if nodemon installed  : cmd> nodemon swap[Nibble.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate given string  that can be swapped.
 * 
 *  @description    
 * 
 *  @file           : swap[Nibble.js
 *  @overview       : User string can be swapped.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var util = require("../Utility/utility");
var r = require("readline-sync");
var getName = r.question("Enter the String here....!!!!==");
var out = util.swapNibble(getName);
console.log(out);