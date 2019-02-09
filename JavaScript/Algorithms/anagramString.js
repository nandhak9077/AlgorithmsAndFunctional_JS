/******************************************************************************
 *  Execution       :   1. default node          : cmd> node anagramString.js
 *                      2. if nodemon installed  : cmd> nodemon anagramString.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : anagramString.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var AccessClas = require('../Utility/utility');

var readSync = require('readline-sync');
var str1=readSync.question("Please enter the first String : ");
var str2=readSync.question("Please enter the String to be determined : ");
var ans=AccessClas.isAnagram(str1,str2);
console.log(ans);