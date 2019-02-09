/******************************************************************************
 *  Execution       :   1. default node          : cmd> node distanceSq.js 
 *                      2. if nodemon installed  : cmd> nodemon distanceSq.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To calculate the distance from user input.
 * 
 *  @description    
 * 
 *  @file           : distanceSq.js
 *  @overview       : Use a random number that's calculate square of distance.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var fetchFromUtility = require('../Utility/utility');
var syncPurpose=require('readline-sync');
var a=syncPurpose.questionInt('Enter the X point to find distance from to origin : ');
var b=syncPurpose.questionInt('Enter the Y point to find distance from to origin : ');
var distance=fetchFromUtility.findDistance(a,b);
console.log("Distnace form Origin is : "+distance);
