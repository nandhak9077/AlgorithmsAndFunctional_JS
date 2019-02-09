/******************************************************************************
 *  Execution       :   1. default node          : cmd> node toBinary.js 
 *                      2. if nodemon installed  : cmd> nodemon toBinary.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : Given number that can be converted into Binary number.
 * 
 *  @description    
 * 
 *  @file           : toBinary.js
 *  @overview       : Number is converted into binary.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var read = require('readline-sync')
var utility = require('../Utility/utility')
function toBinary()
{
    var number=read.questionInt("Enter the Decimal Value : ")
    var k=utility.toBinary(number);
    console.log("result is "+k)

}
toBinary()