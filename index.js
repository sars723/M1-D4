/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const calculateArea= function(width , length){
let area=width*length;
return area;
}
let testArea=calculateArea(4,5);
console.log(testArea);
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum=function(number1, number2){
    let sum=number1+number2;
    if(number1===number2)
    {
        sum*=3;
    }
    return sum;
}

const testSum=crazySum(4,5);
console.log(testSum);


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/


const crazyDiff=function(givenNumber){
     const number19=19;
     let absoluteDifference=givenNumber-number19;
     if(givenNumber>number19)
     {
         absoluteDifference*=3;
     }
           return absoluteDifference;
}

const testAbsoluteDiff=crazyDiff(21);
console.log(testAbsoluteDiff);
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary=function(integerNumber){
    const resultBoundary=true;
    if((integerNumber>=20 && integerNumber<=100)||integerNumber===400)
    {
        return true;
    }
    else{
        return false;
    }
}
const testBoundary=boundary(60);
console.log(testBoundary);

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify=function(givenString){
    const wordToAddFront="Strive";

let splitStrive=givenString.slice(0,5)

if(splitStrive===wordToAddFront)
{
    return givenString;
}
else
{
   let result=givenString.insert(0,wordToAddFront);
     return result;
}

let test=strivify("hello world")
console.log(test)
}
/* WRITE YOUR CODE "HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7=function(positiveNumber){
    if(positiveNumber%3===0  )
    {
        console.log("a multiple of 3")

    }
    else if(positiveNumber%7===0)
    {
        console.log("a multiple of 7")

    }
 }
 check3and7();

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString=function(givenString){
    let splitString=givenString.split("")
    let reverseArray=splitString.reverse();
    let joinArray=reverseArray.join("")
    console.log(joinArray);
}
reverseString("hello");
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
const upperFirst=function(givenString){
    let capitalize=givenString.charAt(0).toUpperCase()+givenString.slice(1);
    console.log(capitalize);
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString=function(givenString){
    let result=givenString.SubString(1,givenString.length-1);
    console.log(result)

}
cutString("hello");
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
const giveMeRandom=function(n){
    let arr=[];
    let arr=Math.floor(Math.random() * 11);
    console.log(arr);
}

giveMeRandom(2)
/* WRITE YOUR CODE HERE */
