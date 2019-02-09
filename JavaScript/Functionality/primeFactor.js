/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeFactor.js 
 *                      2. if nodemon installed  : cmd> nodemon primeFactor.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the factorization of  numbers
 * 
 *  @description    
 * 
 *  @file           : primeFactor.js
 *  @overview       : Use random numbers to generate prime factor numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var fetch1 = require('../Utility/utility');

var fetch2 = require('readline-sync');
var number=fetch2.questionInt("Please enter the number to find prime factor : ");
fetch1.primeFactors(number);
