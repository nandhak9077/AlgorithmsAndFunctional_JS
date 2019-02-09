/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stopWatch.js 
 *                      2. if nodemon installed  : cmd> nodemon stopWatch.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To calculate the current seconds and fetch the start time to end time.
 * 
 *  @description    
 * 
 *  @file           : stopWatch.js
 *  @overview       : Based on user input,it is going to calculate the start time and end time.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var u =require('../Utility/utility');
var rl=require('readline-sync');
function stopwatchMain() 
{
    
    u.stopwatch(rl);//calling of stopWatch method.
}

u.stopwatch(rl);
