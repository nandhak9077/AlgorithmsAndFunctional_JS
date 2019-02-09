/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeNoRange.js 
 *                      2. if nodemon installed  : cmd> nodemon primeNoRange.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : primeNoRange.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');

var readSync = require('readline-sync');
var number=readSync.question("Please enter the number to be determined: ");
var ans=AccessUtility.isPrime(number);
console.log(ans);