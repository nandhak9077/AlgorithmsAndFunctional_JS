/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sq.js 
 *                      2. if nodemon installed  : cmd> nodemon sq.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers that can be square
 * 
 *  @description    
 * 
 *  @file           : sq.js
 *  @overview       : Use random numbers to generate square of numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var utility = require('../Utility/utility');
var read = require('readline-sync');
function sqrRoot()
{
    var number = read.questionInt("Enter non -ve value : ")
    utility.sqrRoot(number);
}
sqrRoot()