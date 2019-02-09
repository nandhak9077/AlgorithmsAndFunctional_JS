/******************************************************************************
 *  Execution       :   1. default node          : cmd> node harmonic.js 
 *                      2. if nodemon installed  : cmd> nodemon harmonic.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the unique numbers
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : Use random numbers to generate harmonic series.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
const AccessUtility = require('../Utility/utility');
const readSync = require('readline-sync');
const number=readSync.question("Enter the number greater then zero : ");
console.log(AccessUtility.harmonicNumber(number));
