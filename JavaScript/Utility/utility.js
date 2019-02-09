const readline = require('readline-sync');
//-------------------------------------BUSINESS LOGIC'S-----------------------------------------------
module.exports = {

    arrayCall(arr) {
        var number = readline.questionInt("Enter total number of array elements : ");
        console.log("Enter your Array elements : ");
        //store elements by elements in array.
        for (let index = 0; index < number; index++) {
            arr[index] = readline.questionInt("")

        }
        return arr;
    },


    insertArray(arr) {
        var number = readline.question("Enter total number of array elements : ");
        console.log("Enter your Array elements : ");
        // stores elements by elements in array 
        for (let index = 0; index < number; index++) {
            arr[index] = Number(readline.question(""));
        }
        return arr;
    },
    /********************************* String replace *****************************************/
/* 1. String Replace
*-------------------
--------------------
* Purpose     : To ensure username with minimum 3 characters and not a number,replacing USERNAME with userinput
*               and print the string.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.
*/

stringReplace(username) 
{
    var input ="Hello <<username>> , how are you?";
    var output = input.replace(/<<username>>/g,username); 
    console.log(output+" : Replace string using Regex ")

   var output1="";
    while(username.length<3 || !isNaN(username)) {
        var read = require('readline-sync');
        var name=read.question("Enter your name : ");
    }
    output1=output1+input.substring(0,6)+username+""+input.substring(19,input.length);
    console.log(output1+" : hard-code");
},  

/**
 *  Creating method for accepting User inputs.
 * 
 * 
 * 
 */
input()
{
    const readline = require('readline-sync');
    const r1 = readline.createInterface({input: ProcessingInstruction.stdin, output : ProcessingInstruction.stdout})
    return r1;

},  

/************************************* Flip Coin *****************************************/ 
/* 2. Flip Coin
*---------------
----------------
* @purpose     : By using random function flip the coin. accept user input to flip number of times to flip coin
*                and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function    : Coinflip takes the no of times to flip coin and print the percentage of
*                head and tail
*/

flipCoin(flip)
{
    var head = 0, tail =0;  // i
    for (let i = 0; i<flip; i++)
    {
        var rand = Math.random();
        if(rand > 0.5)
        {
            head++;
        }
        else
        {
            tail++;
        }
    }
    var result = (head / flip)*100;
    console.log("Percentage of Head : "+result+" %");
    var result1 = (tail/flip)*100;
    console.log("Percentage of Tail : 6"+result1+" %")
},

/**************************************** Leap year ****************************************************************/
/*3. Leap year
*--------------
---------------
* @purpose     : Accept four digit input of year from the user and check given inputs is Leap year or not.
* @description : Declaring a function and passing the four digit number from  user input.             
* @function    : Function checks length of the given number, if length equals to 4, then it prints
*                given number is Leap year or not.
*/

findLeapYear(year)
{
    if(year>999 && year<10000)
    {
        if(year%4 == 0 && (year%400 == 0 || year%100!= 0))
        {
            console.log(year+" is a Leap year.")
        }
        else
        {
            console.log(year+" is not a Leap year.")
        }
    }
    else
    {
        console.log("Please enter valid 4 digit year format.");
    
    }
},

/*********************************** Power of Two ****************************************/
/* 4. Power of Two
*------------------
-------------------
* @purpose     : To Accept value of "N" from user and prints a table of the powers of 2 
                 that are less than or equal to 2^N. value of N should be less then 31.
* @description : Prints the value of two's power
* @function    : Function checks the given number is less then 31, if less then 31, then it prints
                 the value of two's power i.e., 2^N value.
*/

powerOfTwo(number)
{
    if(number<31)
    {
        for(let i =0; i<=number ; i++)
        {
            var result = Math.pow(2,i);
            console.log(result);
        }
    }
    else
    {
        console.log("Hello! Please enter only numerical value between 0 and 31")
    }
},

//********************************** Harmonic Number *********************************************************/
/* 5. Harmonic Number 
*--------------------
---------------------
* @purpose     : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
*                that are less than or equal to 2^N. value of N should be less then 31. to the given user input and print the Nth harmonic number
*                for the user input.
*
* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function    : Function Harmonic function takes user input and sum it number of times that user given.
*/

harmonicNumber(number)         //Function harmonic
{
    if(isNaN(number) || (number<=0 ))     // check number is greater then zero
    {
        return " Sorry!. Input Should be a number and should be greater then zero."
    }
    else
    {
        var sum = 0;     // Intialing variable 
        for( let i = 1; i<=number ; i++)
        {
            sum = sum + (1/i);    // adding values and assigning into the variable 
        }
        return "The "+number+"th Harmonic value is "+sum;
    }
},

//********************************** Factor ***************************************************************/
/*6. Factors 
*-----------
------------
* @purpose     : To compute the prime factorization of N using brute force.
* @description : To compute the prime factorization of N by accepting input from user.              
*/

primeFactors(number)
{
    if(number>0)
    {
        while(number%2==0)
        {
            console.log("2 ");
            number/=2;
        }
        for(let i =3 ; i<Math.sqrt(number); i+=2)
        {
            while(number/i == 0)
            {
                console.log(i+" ");
                number/=i; 
            }
        }
        if(number>2)
        {
            console.log(number+" ");
        }
    }

},
//*************************************** Gambler *******************************************************/
/*7. Gambler 
*-----------
------------
* @purpose    : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
*               he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
*               times he/she wins and the number of bets he/she makes. will run the experiment N times, 
*               averages the results, and prints them out.
*
* @description :Play till the gambler is broke or has won
*                
*/

gamblerBrokeOrOwn(stake, trails, target)
{
    var win = 0, loss = 0;

    for( let i =0; i<trails; i++)
    {
        while(stake>0 && stake<target && trails>0)
        {
            if(Math.random()>0.5)
            {
                stake++;
                win++;
                trails--;
            }
            else
            {
                stake--;
                loss++;
                trails--;
            }
        }

    }

    var percentWin = (win*100)/(win+loss);
    var percentLoss = (loss*100)/(win+loss);

    console.log("The Great! gamble won : "+ win);
    console.log("The Great! Great! gambler lost : "+loss);
    console.log("Percentage of Win is : "+percentWin+"%");
    console.log("Percentage of Loss is : "+percentLoss+"%")
},
//*********************************** Coupon Numbers **************************************/
/*8. Coupon Numbers
*------------------
-------------------
* @purpose     : Given N distinct Coupon Numbers, how many random numbers do you 
*                need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : Total random number needed to have all distinct numbers.
*                
*/

couponCodeGenerate(number)
{
    var arr = [];
    var count = 0;
    while(count!=number)
    {
        var k=Math.round(Math.random()*number);
        if(!arr.includes(k))
        {
            arr.push(k);
            count++;
        }
        //return count;
    }
    console.log(arr);
    
},

//*********************************** 2D Array **************************************/
/*9. 2D Array
*------------------
-------------------
* @purpose     : Given N distinct Coupon Numbers, how many random numbers do you 
*                need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/
twoDArray(row, column) {
    var arr = [];
    console.log("Enter the value ");
    
    for (let i = 0; i < row; i++) {
        arr.push([]);
        for (let j = 0; j < column; j++)

           arr[i][j]=readline.questionInt('');
    }
    return arr;
},

//***************************** Sum of three Integer adds to ZERO ***********************/
/*10. Sum 3 Integer
*------------------
--------------------
* @purpose     : A program with cubic running time. Read in N integers and counts the 
*                number of triples that sum to exactly 0.
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

Triplets(arr) {
console.log(arr);

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {

                    console.log("your Triplets number is " + arr[i] + " " + arr[j] + " " + arr[k]);
                    return true;
                }
            }

        }
    }
    return false;
},
    
//************************************* Distance ***************************************/
/*11. Distance
*-------------
--------------
* @purpose     : A program with cubic running time. Read in N integers and counts the 
*                number of triples that sum to exactly 0.
* @description : Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

findDistance(a,b)
{
    var  distance = Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
    return distance;
},

//********************************** Permutation of String ***************************************/
/*12. Permutation of string
*--------------------------
---------------------------
* @purpose     : A functions to return all permutation of a String 
* @description : Checks if the arrays returned by two string functions are equal.
*                
*/

permutationOfString(str)
{
    var arr = str.split("");
    console.log(arr);
    var arr1=[];
    const c =str.length;
    for(let i =0 ;i<arr.length;i++)
    {
        var str1="";
        for(let j = i; j<c ; j++)
        {

            str1=str1+arr[j];
            var s = str.length-str1.length;
        }
        if(str1.length<str.length)
        {
            str1 = str1+str.substring(0,s);
        }
        if(!arr1.includes(str1))
        {
            arr1.push(str1);
        }
    }
    console.log(arr1)
},

//************************************* Stop Watch ***************************************/

/*
* @description: return the time in seconds from 1970.
*/

currentSecond() 
{
    var dt = new Date();
    return dt.getSeconds();
},

/*13. Stop Watch
*-------------
* @purpose     : A Stopwatch Program for measuring the time that elapses between 
                 the start and end clicks
* @description : Measure the elapsed time between start and end.
*                
*/

stopwatch(rl) 
{
    var start = 0, stop = 0;
    var t1= rl.questionInt("Press 1 to start timer : " )-1;
    {
        var t2 =0;
        start = this.currentSecond(); //set current seconds.
        var t2=rl.questionInt("Press 2 to stop timer : ")-1;
        {
            stop = this.currentSecond(); //set current seconds.
            console.log("elapsed time is " + (stop - start) + " seconds.");
        }  
    }
},



//************************************* Root of a equation ***************************************/
/*14. Root of a equation
*-----------------
------------------
* @purpose     : To find the roots of the equation a*x*x + b*x + c. 
*                Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
*                found using a formula.
*
*
* @description : Take a, b and c as input values to find the roots of x.
*                
*/

roots(a, b, c) 
{
    var delta = (b * b) - (4 * a * c);
    console.log(delta);
    if (delta == 0) 
    {
        var root = -b/(2*a);
        console.log(root);
    } 
    else if (delta > 0) 
    {
        var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
        var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
        console.log("First root " + Math.round(root1));
        console.log("Second root " + Math.round(root2));
    } 
    else if (delta < 0) 
    {
        var root1 = -b / 2 * a;
        var root2 = (Math.sqrt(-delta)) / 2 * a;
        console.log("First root : " + root1, "i :", root2);
        console.log("Second root : " + root1, "-i :", root2);
    } 
    else 
    {
        console.log("Invalid number.....  :( ");
    }
  },

//************************************* Wind Chill ***************************************/
/*15. Wind Chill
*-----------------
------------------
* @purpose     : To find the windchill. The temperature t (in Fahrenheit) and the
*                wind speed v (in miles per hour),the National Weather Service defines the 
*                effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
*                valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/

windChill(temp, vol)
{
    if (temp <= 50 && vol > 3 && vol < 120) 
    {
        var w = Math.round(35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(vol, 0.16));//calculate.
        console.log("Windchill for temperature " + temp + " and wind speed " + vol + " is " + w);
    } 
    else 
    {
        console.log("Sorry!! Try again ...Wrong Temp :( ");
    }
},
/************************************ End Of Functional Programs *************************/


/************************************ Algorithm Programs **********************************/

/************************************ Anagram Detection **********************************/
/*16. Anagram Detection 
*-------------------
*-------------------
* Purpose     : To ensure the given string should be reversed then, that reversed string must 
                 be equal to given user input string.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.              
*/

isAnagram(string1, string2) {
    string1=string1+"";
    string2=string2+"";
    if (string1.length != string2.length) {
        return false;
    }
    var arr = [];
    for (let index = 0; index < 36; index++) {
        arr[index] = 0;

    }
    for (let index = 0; index < string1.length; index++) {
        var ch = string1.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]++;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]++;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]++;
        }
        ch = string2.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]--;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]--;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]--;
        }


    }
    for (let index = 0; index < 36; index++) {
        if (arr[index] != 0) {
            return false;
        }
    }
    return true;
},
/************************************ Is Prime Number **********************************/
/*17. Is Prime Number
--------------------
*-------------------
* Purpose      : The user input is going to check wheather is prime number or not. If it is 
                 prime then it will print positive result.
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.
             
*/

isPrime(number)
{
    if(number==0 || number == 1)
    {
        return false;
    }
    else
    {
        for (let index = 2; index < number; index++)
        {
            if (number % index == 0) 
            {
                return false;
            }
        }
        return true;
    }
},
/************************************ is Palimdrome **********************************/
/*18. Is Palindrome
-------------------
*-------------------
* Purpose      : Use the random number that should print in the reverse order . then, the 
                 reverse ordered string or number must be equal to given user input.it is similar to ana
                 -gram.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.
             
*/
isPalimdrome(string1) 
{
    var str = "";
    for (let index = 0; index < string1.length; index++) 
    {
        str = string1.charAt(index) + str;
    }
    if (str == string1)
    {
        return true;
    }
    return false;
},
/************************************ isPalimdrome2String **********************************/
/*19. Is Prime2String
--------------------
*-------------------
* Purpose      : Assign one string or number from the first user input is going to compare to the
                 second one. If Both are same it will print positive result.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.            
*/
isPalimdrome2String(num1,num2)
{
    var str="";
    num1=num1+"";
    num2=num2+"";

    for (let i = 0; i < num1.length; i++) 
    {
        str=num1.charAt(i)+str;
    }
    if(str==num2)
    {
        return true;
    }
    return false;
},
/************************************ is Anagram Palimdrome **********************************/
/*20. Anagram Palindrome
 --------------------
*--------------------
* Purpose      : Assign one string or number from the first user input is going to compare to the
                 second one. If Both are same it will print positive result.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                   
*/
isAnagramPalimdrome() 
{
    var arr=[];
    for (let index = 0; index < 1000; index++) 
    {
        if (this.isPrime(index)) 
        {
            arr.push(index);
        }

    }
    
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = i+1; j < arr.length; j++) 
        {
            if(this.isAnagram(arr[i],arr[j]))
            {
                if(this.isPalimdrome2String(arr[i],arr[j]))
                {
                    console.log(arr[i],"  ",arr[j]);
                }
            }
        }
    }
},
/************************************ call File **********************************/
callFile() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('file.txt', 'utf8');
    console.log(f);
    var arr = f.split(' ');
    return arr;
},
/************************************ file CAll **********************************/
fileCall() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('File.txt', 'utf8');
    var arr = f.split(' ');
    return arr;
},

fileCalls(name) 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync(name, 'utf8');
    var arr = f.split(' ');
    return arr;
},

writeFile(filename,Data)
    {
        const fs = require('fs')
        fs.writeFile(filename,Data,function(err)
        {
            if(err)
            {
                return console.log(err);
            }

        });
    },
/************************************ Bubble Sort **********************************/
/*21. bubble sort
--------------------
--------------------
* Purpose      : It is a bubble form sorting.it is going to sort a numbers or variable in
                 the ascending and descending order.Taken input from the user.It is going to check the
                 next element.If it is bigger than this then it should be swapped.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/
bubbleSort(arr) 
{  var j;
    var temp;
    for(i=1;i<=n;i++){
        for(j=0;j<=n-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
   
},
/************************************ Find Number **********************************/
/*22. To find a number 
----------------------
----------------------
* Purpose      : It is going to find the number that is between what we have to given to 
                 user input.Here we have to fix the limit.it is going to generate the random numbers
                 between the given limit.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/            


findNumber(low,high,read)
{
    var mid = low + Math.floor((high - low)/2)
    console.log(mid)
    if (low<high)
    {
        if(low==high-1)
        {
            var c;
            c = read.question("Is the number "+low +" if yes, press 'Y'. Else Press 'N' : ")
            if(c=='y')
            return low;
            if(c=='n')
            return high;
        }
        c = read.question("Is the number "+mid+-+high+" if yes, press 'Y'. Else Press 'N' : ")
        if(c=='y')
        mid = this.findNumber(mid, high, read)
        if(c=='n')
        mid = this.findNumber(low, mid-1, read)
    }
    return mid;
},

/********************************* Vending Mechine **********************************/
/*23. Vending Machine
---------------------
---------------------
* Purpose     : It is going to generate the seperate and multiple amount based on our user
                requirements.it wil give in the seperate order.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/             
VendingMechine(arr, amount)
{
    var notes=0;
    for(let i = 0; i < arr.length;i++)
    {
        if(amount/arr[i]>=1)
        {
            var c = Math.floor(amount/arr[i])
            notes=notes+c
            console.log(arr[i]+" dispatched notes are : "+c)
            amount=amount%arr[i]
        }
    }
    console.log("Total num of notes dispatched are : "+notes)
},
/************************************ Day of Week **********************************/
/*24. Day
-------------------
-------------------
* Purpose     : It is used to calculate the respective day from our given input.
                that is depends on given day ,month and year.
*
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/             
dayOfWeek(day, month, year) 
{
    
    var y0 = year - Math.floor((14 - month) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
    
    return d0;
},

/************************************ Temperature Converstion **********************************/
/*25. Temperature Conversion based on formulae
 ---------------------
 ---------------------
* Purpose     : It is used to calculate the temperature based on our formulae.
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/            

temperatureConverstion(choice) {
    var temperature;
    
    if (choice == 1) {
        temperature = v.questionInt("enter temperature in celsius");
        if(temperature>=0){
        var fahrenheit = temperature * (9 / 5) + 32;
        console.log("Fahrenheit form of " + temperature + "C is :" + fahrenheit);
        }else
        console.log("Please input correct temperature");
    } else if (choice == 2) {
        temperature = v.questionInt("enter temperature in Fahrenheit");
        if(temperature>=0){
        var celsius = (temperature - 32) * (5 / 9);
        console.log("celsius form of " + temperature + "F is :" + celsius);
        }else
        console.log("Please enter correct temperature");
    } else {
        console.log("wrong choice");
    }
},

/************************************ Monthly Payment **********************************/
/*26. Monthly payment
---------------------
---------------------
* Purpose      : It is used to calculate the EMI depends on formulae.
* @descriptipn : Declaring the function and passing the userinput as argument.
* @function    : Diplayname takes the userinput and print it with some sentence.                    
*/           
monthlyPayment(principal, year, rate) {
    var n = 12 * year;
    var r = (rate / (12 * 100));
    var payment = ((principal * r) / ((1 - Math.pow((1 + r), -n))));
    console.log("Your EMI for every month is : " + payment);
},

/************************************ Square Root**********************************/
/*27. Square root of a number
-------------------
-------------------
* Purpose     :It is used to generate the random numbers that can be squared by a formula
               finally that must be in positive value.
* @descriptipn:Declaring the function and passing the userinput as argument.
* @function   :Diplayname takes the userinput and print it with some sentence.                    
*/           
sqrRoot(num) {
    if (num > 0) {
        //formula 
        var t = num;
        var epsilon = 1e-15;
        while (Math.abs(t - num / t) > epsilon * t) {
            t = (num / t + t) / 2;
        }
        console.log("Squre root of non negative number is : ", t)
    }
    else {
        console.log("Number should be positive ");
    }
},
/************************************ To Binary **********************************/
/*28. Convert to Binary
-----------------------
-----------------------
* Purpose      :It is used to generate the random numbers that should converted into 
                Binary form.
* @descriptipn :Declaring the function and passing the userinput as argument.
* @function    :Diplayname takes the userinput and print it with some sentence.                    
*/           
toBinary(number) {
    str = "";
    var ch = "";
    while (number > 0) {
        ch = (number % 2);
        str = ch + str;
        number = Math.floor(number / 2);
    }
    str=this.addZero(str);
    return str;

},

/************************************ swap Nibble **********************************/
/*29. swapping the given string
-------------------
* Purpose     : Given String is going to Swapped in the cyclic form.
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/             
swapNibble(mainstr) {
    var tempString = mainstr.substring(0, 4);
    mainstr = mainstr.substring(4, 8);
    mainstr = mainstr + tempString;
    return mainstr;
},
/**********************************Insertion Sort ******************************* */
/*30. Insertion_Sort
 -------------------
* Purpose     :It is going to sort a numbers or variable in
               the ascending and descending order.Taken input from the user.It is going to check the
               next element.If it is bigger than this then it should be swapped.
*
* @descriptipn:Declaring the function and passing the userinput as argument.
* @function   :Diplayname takes the userinput and print it with some sentence.                    
*/            
insertion(result) 
{
    for (let i = 1; i < result.length; i++) 
    {
        var point = result[i];
        var j = i - 1;
        while (j >= 0 && result[j] > point) 
        {
            result[j + 1] = result[j];
            j = j - 1;
        }
        result[j + 1] = point;
    }
    return result;
},

/************************************ Add Zero **********************************/
addZero(str) {
    while (str.length < 8) {
        str = '0' + str;
    }
    return str;
},

/************************************ Power **********************************/
power(base, pow) {
    var sum = 1;
    while (pow > 0) {
        sum = sum * base;
        pow--;
    }
    return sum;

},

/************************************ Binary To Decimal **********************************/
binaryToDecimal(strBinary) {
    sum = 0; var ch;
    var n = 0;
    for (let index = strBinary.length - 1; index >= 0; index--) {
        ch = (strBinary.charAt(index).charCodeAt(0)) - 48;
        sum = sum + this.power(2, n) * ch;
        n++;

    }
    return sum;
},
/************************************ Bubble Sort **********************************/
bubbleSort(arr) {
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }
    return arr;

},

/************************************ Nano Time Second **********************************/
getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
},

/************************************ elapsed time **********************************/
elapsedTimeForMethod() {

    var start = 0, stop = 0;

    var arr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.insertionSort(arr);
    stop = this.getNanoSecTime();
    var insertionSortTime = stop - start;


    var brr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.bubbleSort(brr);
    stop = this.getNanoSecTime();
    var bubbleTime = stop - start;

    var crr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.binarySearch(crr, 55);
    stop = this.getNanoSecTime();
    var BinaryTime = stop - start;

    var arrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.insertionSort(arrString);
    stop = this.getNanoSecTime();
    var insertionSortTimeString = stop - start;


    var brrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.bubbleSort(brrString);
    stop = this.getNanoSecTime();
    var bubbleTimeString = stop - start;

    var crrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.binarySearch(crrString, "gh");
    stop = this.getNanoSecTime();
    var binaryTimeString = stop - start;

    var masterList = [{ type: "insertion sort ", time: insertionSortTime }, { type: "bubble Sort", time: bubbleTime },
    { type: "binary search", time: BinaryTime }, { type: "insertion Sort String ", time: insertionSortTimeString },
    { type: "bubble sort String ", time: bubbleTimeString }, { type: "binary search String", time: binaryTimeString }];
    masterList.sort(function (a, b) { return b.time - a.time });

    console.log("The time in descending order is ");
    console.log("Time for " + masterList[0].type + " is " + masterList[0].time);
    console.log("Time for " + masterList[1].type + " is " + masterList[1].time);
    console.log("Time for " + masterList[2].type + " is " + masterList[2].time);
    console.log("Time for " + masterList[3].type + " is " + masterList[3].time);
    console.log("Time for " + masterList[4].type + " is " + masterList[4].time);
    console.log("Time for " + masterList[5].type + " is " + masterList[5].time);


},
leapYear(year)
{
    if (year%4 ==0 && year%100!=0 || year%400==0)
    {
        return true;
    }
    else
    {
        return false
    }
    
},

/********************************** The End of first Week **************************************/

}
