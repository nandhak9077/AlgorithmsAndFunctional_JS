/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindrome2String.js 
 *                      2. if nodemon installed  : cmd> nodemon palindrome2String.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : palindrome2String.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');

var read = require('readline-sync');
var num1=read.question("Please enter the number to be determined: ");
var num2=read.question("Please enter the number to be determined: ");
var ans=AccessUtility.isPalimdrome2String(num1,num2);
console.log(ans);
