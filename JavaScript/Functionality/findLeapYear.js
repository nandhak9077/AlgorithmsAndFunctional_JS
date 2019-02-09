/******************************************************************************
 *  Execution       :   1. default node          : cmd> node findLeapYear.js 
 *                      2. if nodemon installed  : cmd> nodemon findLeapYear.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To find a leap year from given input.
 * 
 *  @description    
 * 
 *  @file           : findLeapYear.js
 *  @overview       : Use random year that is going to find the leap year.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var getUtility = require('../Utility/utility');

var syncPurpose = require('readline-sync');
var year=syncPurpose.questionInt("Enter 4 digit year : ");
getUtility.findLeapYear(year);
