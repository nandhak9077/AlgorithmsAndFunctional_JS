/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindromeString.js 
 *                      2. if nodemon installed  : cmd> nodemon palindromeString.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the reverse of the given string
 * 
 *  @description    
 * 
 *  @file           : palindromeString.js
 *  @overview       : User string that can be reversed.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');

var read = require('readline-sync');
var string1=read.question("Please enter the name or number to be determined: ");
var ans=AccessUtility.isPalimdrome(string1);
console.log(ans);