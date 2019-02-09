/******************************************************************************
 *  Execution       :   1. default node          : cmd> node permutation.js 
 *                      2. if nodemon installed  : cmd> nodemon permutation.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the unique numbers
 * 
 *  @description    
 * 
 *  @file           : permutation.js
 *  @overview       : Use random numbers to generate the possibility numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');
var readSync = require('readline-sync');
var str=readSync.question("Enter the String : ");
AccessUtility.permutationOfString(str);