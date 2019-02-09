/******************************************************************************
 *  Execution       :   1. default node          : cmd> node insertionSort.js
 *                      2. if nodemon installed  : cmd> nodemon insertionSort.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To sort the numbers using insertion sort algorithm.
 * 
 *  @description    
 * 
 *  @file           : insertionSort.js
 *  @overview       : Use random numbers to generate sorted numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
const read = require("readline-sync");
var util= require("../Utility/utility");
var result = [];
 result = util.arrayCall(result);
 arrayInsert = util.insertion(result);
 console.log(arrayInsert);
