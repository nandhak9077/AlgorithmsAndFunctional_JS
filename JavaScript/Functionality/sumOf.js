/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sumOf.js 
 *                      2. if nodemon installed  : cmd> nodemon sumOf.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         :   To generate the sum of  numbers
 * 
 *  @description    
 * 
 *  @file           : sumOf.js
 *  @overview       : Use random numbers to generate sum of three numbers should be zero.
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-feb-2019
 *
 ******************************************************************************/
var util = require("../Utility/utility");

var trip = () => {

    var arr = [];

    var arr = util.arrayCall(arr);
    var b = util.Triplets(arr);
    if (b) {
        console.log("it is triplets");

    }
    else {
        console.log("it is not triplets");

    }

}
trip();

