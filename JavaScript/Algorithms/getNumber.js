/******************************************************************************
 *  Execution       :   1. default node          : cmd> node getNumber.js 
 *                      2. if nodemon installed  : cmd> nodemon getNumber.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To get a random numbers
 * 
 *  @description    
 * 
 *  @file           : getNumber.js
 *  @overview       : Use random numbers to generate valid number.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var utility =require('../Utility/utility');
var read = require('readline-sync');

var low = read.questionInt("Enter starting number : ");
var high=read.questionInt("Enter last number : ");
var n = utility.findNumber(low,high,read);
console.log("Your number is : "+n)