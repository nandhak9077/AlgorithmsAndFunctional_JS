/******************************************************************************
 *  Execution       :   1. default node          : cmd> node couponCode.js 
 *                      2. if nodemon installed  : cmd> nodemon couponCode.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : couponCode.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');
var readSync = require('readline-sync');
var number=readSync.questionInt("Enter number to generate coupon : ");
AccessUtility.couponCodeGenerate(number);
