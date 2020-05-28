// Task1 Multiply a Number by 2
// You are given a number N. Create a function that multiplies the number by 2 and prints the result. The input comes
// as an array of strings.

function solve(num){
console.log(num*2);
}
solve(2);

// Task2 Multiply Two Numbers
// You are given a number X and a number Y. Create a JS function that multiplies X * Y and prints the result. The
// input comes as array of strings.

function solve(args){
var a = args[0],
b = args[1];
console.log(a*b);
}
solve(['2', '3']);

// Task 3 Multiply / Divide a Number by a Given Second Number
// You are given a number N and a number X. Create a function that:
//  Multiplies N * X if X is greater than or equal to N
//  Divides N / X if N is greater than X
// The input comes as array of strings.

function solve(args){
    var a = args[0],
    b = args[1];
    if(a <= b){
        console.log(a*b);
    }
    else{
        console.log(a/b);
    }
    }
    solve(['13', '13']);

// Task4 Product of 3 Numbers
// You are given a number X, Y and Z. Create a function that finds if X * Y * Z (the product) is negative or positive. Try
// to do this WITHOUT multiplying the 3 numbers.

function solve(args){
    var numbers = args.map(Number);
    var counter = 0;
numbers.forEach(element => {
    if(element < 0){
        counter++;
    }
});
if(counter % 2 === 0){
console.log('Positive');
}
else{
    console.log('Negative');
}
}
    solve(['5', '1', '-3']);

// Task5 Print Numbers from 1 to N
// You are given a number N. Create a JS function that loops through all the numbers from 1 to N and prints them. N
// will always be positive.

function solve(num){
    var n = +num;
    for(let i = 1; i < n + 1; i +=1) {
        console.log(i);
    }
}
solve(5);

// Task 6 Print Numbers from N to 1
// You are given a number N. Create a JS function that loops through all the numbers from N to 1 and prints them. N
// will always be positive.

function solve(num){
    var n = +num;
for(let i = n; i + 1 > 1; i -=1) {
    console.log(i);
}
}
solve(5);

// Task7 Print Numbers in Reversed Order
// You will be given a few numbers as input. You need to print them in reversed order, each on a new line.

function solve(args){
    var n = args.reverse();
    for(let i = 0; i < n.length; i +=1) {
        console.log(n[i]);
    }
}
solve([10, 15, 20]);

// Task8* Set Values to Indexes in an Array
// You will be given N - an integer specifying the length of an array. Then you will start receiving an index and a value.
// For each received line you must set the value at the given index to the given value.
// When you’ve processed all input data, print the array’s elements each on a new line.

function solve(text){
    let count=Number(text[0]);
    let newArray=[];
    for(let i=1;i<text.length;i++){
        let temp=text[i].split(' – ');
        let index=temp[0];
        let value=temp[1];
        newArray[index]=value;
    }
    for(let j=0;j<count;j++){
        if(newArray[j] === undefined){
            console.log('0');
        }
        else{
            console.log(newArray[j]);
        }
 
    }
 
}
solve(['3', '0 - 5', '1 – 6', '2 – 7']);


// Task9* Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the
// type of fruit you want to buy, a number for weight in grams and another number for the price per
// kilogram.

function solve(args){
var fruit = args[0];
var kg = (args[1]/1000).toFixed(2);
var money = args[2];
var result = (kg*money).toFixed(2);
console.log(`I need $${result} to buy ${kg} kilograms ${fruit}`);
}
solve(['apple', 1563, 2.35]);