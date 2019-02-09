/******************************************************************************
 *  Execution       :   1. default node          : cmd> node tempChillClimate.js 
 *                      2. if nodemon installed  : cmd> nodemon tempChillClimate.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   Calculate the windchill for temperature
 * 
 *  @description    
 * 
 *  @file           : tempChillClimate.js
 *  @overview       : Based on our given input ,it is going to calculate windchill for temperature.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var AccessUtility = require('../Utility/utility');
var readSync = require('readline-sync');
var temp=readSync.question("Enter temperature : ");
var vol=readSync.question("Enter volume : ");
AccessUtility.windChill(temp,vol);