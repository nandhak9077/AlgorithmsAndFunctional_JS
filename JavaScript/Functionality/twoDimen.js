/******************************************************************************
 *  Execution       :   1. default node          : cmd> node twoDimension.js 
 *                      2. if nodemon installed  : cmd> nodemon twoDimension.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the unique numbers
 * 
 *  @description    
 * 
 *  @file           : twoDimension.js
 *  @overview       : Use random numbers to generate  numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
/**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const fetchingUtility = require('../Utility/utility');
console.log("Enter the array length of m rows n columns :");
var row = readline.questionInt("Enter the value of row : ");
var column = readline.questionInt("Enter the value of col : ");
arr=fetchingUtility.twoDArray(row,column);
console.log(arr);
