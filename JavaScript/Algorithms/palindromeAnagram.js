/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindromeAnagram.js 
 *                      2. if nodemon installed  : cmd> nodemon palindromeAnagram.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate and reverse the given palindrome number.
 * 
 *  @description    
 * 
 *  @file           : palindromeAnagram.js
 *  @overview       : User number will be reverse..
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var read=require('readline-sync');
var utilityFetch=require('../Utility/utility');
function anagramPalimdrome() 
{
    console.log("program start");
    utilityFetch.isAnagramPalimdrome();
}
anagramPalimdrome()