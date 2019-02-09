/******************************************************************************
 *  Execution       :   1. default node          : cmd> node bubbleSort.js
 *                      2. if nodemon installed  : cmd> nodemon bubbleSort.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To sort the numbers using bubble sort algorithm.
 * 
 *  @description    
 * 
 *  @file           : bubbleSort.js
 *  @overview       : Use random numbers to generate sorted numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-feb-2019
 *
 ******************************************************************************/
const read = require("readline-sync");
var util= require("../Utility/utility");
var arr = [];
 arr = util.arrayCall(arr);
 arrayBubble = util.bubbleSort(arr);
 console.log(arrayBubble);


