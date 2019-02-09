/******************************************************************************
 *  Execution       :   1. default node          : cmd> node flipCoin.js 
 *                      2. if nodemon installed  : cmd> nodemon flipCoin.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   It is generate head or tail based on given user input.
 * 
 *  @description    
 * 
 *  @file           : flipCoin.js
 *  @overview       : Randomly generate a heads and tails from input.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var utility = require('../Utility/utility')
var read = require('readline-sync');
function flipCoin()
{
    var flips = read.question("Enter the number of toss : ");
    utility.flipCoin(flips);

}
flipCoin();