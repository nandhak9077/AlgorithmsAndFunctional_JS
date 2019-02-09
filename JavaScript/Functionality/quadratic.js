/******************************************************************************
 *  Execution       :   1. default node          : cmd> node quadratic.js 
 *                      2. if nodemon installed  : cmd> nodemon quadratic.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the quadratic numbers in mathematical operations using formulae.
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : Use random numbers to generate quadratic numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
var xyz = require('../Utility/utility');
var syncPurpose = require('readline-sync');
var a=syncPurpose.question("Enter the A value : ");
var b=syncPurpose.question("Enter the B value : ");
var c=syncPurpose.question("Enter the C value : ");
xyz.roots(a,b,c);
