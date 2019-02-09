/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gamblerPlayer.js 
 *                      2. if nodemon installed  : cmd> nodemon gamblerPlayer.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the unique numbers
 * 
 *  @description    
 * 
 *  @file           : gamblerPlayer.js
 *  @overview       : Use random numbers to generate stake, trails and target numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');
var readSync = require('readline-sync');
var stake=readSync.question("Enter stake value : ");
var trails=readSync.question("Enter number of trails : ");
var target=readSync.question("Enter target value  : ");
AccessUtility.gamblerBrokeOrOwn(stake,trails,target);