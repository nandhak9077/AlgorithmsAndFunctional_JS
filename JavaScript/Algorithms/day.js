/******************************************************************************
 *  Execution       :   1. default node          : cmd> node day.js
 *                      2. if nodemon installed  : cmd> nodemon day.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate and find the day of your date.
 * 
 *  @description    
 * 
 *  @file           : day.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-feb-2019
 *
 ******************************************************************************/
var utility = require('../Utility/utility');
var read = require('readline-sync');
var day=read.questionInt("enter day!!!");
var month=read.questionInt("enter month");
var year=read.questionInt("enter year");
var num=utility.dayOfWeek(day,month,year);
var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
if (num <= res.length) {
   console.log("The day falls on :" + res[num])
}
else {
   console.log("Invalid day ")

}