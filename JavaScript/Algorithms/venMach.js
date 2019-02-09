/******************************************************************************
 *  Execution       :   1. default node          : cmd> node venMach.js 
 *                      2. if nodemon installed  : cmd> nodemon venMach.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   assume user input as amount that can be seperated into multiple forms.
 * 
 *  @description    
 * 
 *  @file           : venMach.js
 *  @overview       : single into multiple forms or single form.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-feb-2019
 *
 ******************************************************************************/
var utilityFetch = require('../Utility/utility');
var read = require('readline-sync');
var amount = read.questionInt("Enter the required amount : ")
var arr=[2000, 500, 100, 50, 20, 10, 5, 2, 1]
utilityFetch.VendingMechine(arr,amount);