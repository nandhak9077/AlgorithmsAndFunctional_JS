/******************************************************************************
 *  Execution       :   1. default node          : cmd> node powerOfTwo.js 
 *                      2. if nodemon installed  : cmd> nodemon poerOfTwo.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Used to calculate the power of numbers from user input.
 * 
 *  @description    
 * 
 *  @file           : powerOfTwo.js
 *  @overview       : Use random numbers to generate power of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var Access = require('../Utility/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter the number between 0 and 31 : ");
Access.powerOfTwo(number);
