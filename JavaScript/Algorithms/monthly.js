/******************************************************************************
 *  Execution       :   1. default node          : cmd> node monthly.js
 *                      2. if nodemon installed  : cmd> nodemon monthly.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate emi based on our simple interest.
 * 
 *  @description    
 * 
 *  @file           : monthly.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var utility = require('../Utility/utility')
var read = require("readline-sync");
function monthlyPayment()
 {
var principle= read.questionInt("please!! Enter your principle here...!!");
var year=read.questionInt("please!! Enter your year here...!!");
var rate=read.questionInt("please!! Enter your rate here...!!");
utility.monthlyPayment(principle,year,rate);
}
monthlyPayment();