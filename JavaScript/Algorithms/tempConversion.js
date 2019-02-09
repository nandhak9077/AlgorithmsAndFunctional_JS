/******************************************************************************
 *  Execution       :   1. default node          : cmd> node tempConversion.js 
 *                      2. if nodemon installed  : cmd> nodemon tempConversion.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers that is for calculating the temperature.
 * 
 *  @description    
 * 
 *  @file           : tempConversion.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var u = require("../Utility/utility");
var v = require("readline-sync");
var choice = v.questionInt("In Which formate you want to convert \n press 1 for Celsius to Fahrenheit \n "
        + "press 2 for Fahrenheit to celsius");
u.temperatureConverstion(choice);
