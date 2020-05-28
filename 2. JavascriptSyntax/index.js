// Task 1 Calculate
// Write a JavaScript program to print the value of the following expression:
//  (30 + 25) + ((35 – 14) * 2)

function calculate() {
    let args = '(30 + 25) + ((35 – 14) * 2)';
    let result;
    let num1 = +args.slice(1, 3);
    let num2 = +args.slice(6, 8);
    let num3 = +args.slice(14, 17);
    let num4 = +args.slice(19, 21);
    let num5 = +args.slice(25, 26);
    result = (num1 + num2) + ((num3 - num4)*num5);
    console.log(result);
    }
    calculate();
 
// Task 2 Bigger Number
// Write a program with two numbers and print bigger of them.

function biggerNum(args){
var num1 = args[0];
var num2 = args[1];
console.log(Math.max(num1, num2));
}
biggerNum([10, 20]);

// Task3 First 20 Numbers
// Write a program, which prints first 20 numbers.

function printFirstTwentyNumbers() {
    for(let i = 1; i <= 20; i +=1) {
        console.log(i);
    }
    }
    printFirstTwentyNumbers();

// Task4 Print the Elements in Array
// Write a program, which print all array elements.

function solve(args){
    let elements = args;
    elements.forEach(e => console.log(e));
}
solve([1, 2, 3, 4, 5]);

// Task5 String Length
// Write a function that takes three string arguments as an input.
// Calculate the sum of the length of the strings and the average length of the strings rounded down to the
// nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console on two lines.

function solve(num1, num2, num3){
var word1 = num1.length;
var word2 = num2.length;
var word3 = num3.length;
var result = word1 + word2 + word3;
console.log(result);
console.log(Math.round(result/3));
}
solve('chocolate', 'ice cream', 'cake');

// Task6 Day of Week
// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string
// and an error message if the string is not recognized.
// The input comes as a single string argument.
// The output should be returned as a result.

function solve(word){
if(word === 'Monday'){
    console.log(1);
}
else if(word === 'Tuesday'){
    console.log(2);
}
else if(word === 'Wednesday'){
    console.log(3);
}
else if(word === 'Thursday'){
    console.log(4);
}
else if(word === 'Friday'){
    console.log(5);
}
else if(word === 'Saturday'){
    console.log(6);
}
else if(word === 'Sunday'){
    console.log(7);
}
else{
    console.log('error');
}
}
solve('Monday');

// Task7* Aggregate Elements
// Write a program that performs different operations on an array of elements. Implement the following
// operations:
//  Sum(a i ) - calculates the sum all elements from the input array
//  Sum(1/a i ) - calculates the sum of the inverse values (1/a i ) of all elements from the array
//  Concat(a i ) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function solve(args){
var sum = 0;
var sum2 = 0;
var sum3 = '';

for(let i = 0; i < args.length; i +=1) {
    sum += args[i];
    sum2 += 1/args[i];
    sum3 += args[i].toString();
}
console.log(sum);
console.log(sum2);
console.log(sum3);
}
solve([2, 4, 8, 16]);

// Task8* Math Operations
// Write a function that takes two numbers and a string as an input. The string may be one of the following:
// &#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;, &#39;%&#39;, &#39;**&#39;.
// Print on the console the result of the mathematical operation between both numbers and the operator
// you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function solve(num1, num2, operator){
if(operator === '+'){
    console.log(num1 + num2);
}
else if(operator === '-'){
console.log(num1 - num2);
}
else if(operator === '*'){
console.log(num1 * num2);
}
else if(operator === '/'){
console.log(num1 / num2);
}
else if(operator === '%'){
console.log(num1 % num2);
}
else{
console.log(Math.pow(num1, num2));
}
}
solve(5, 6, '+');