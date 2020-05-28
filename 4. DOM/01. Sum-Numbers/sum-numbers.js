// Task 1. Sum Numbers
// Write a function that reads two numbers from input fields in a web page and puts their sum in another field when
// the user clicks on a button.

function calc() {
   let number1 = +document.getElementById('num1').value;
   let number2 = +document.getElementById('num2').value;
   let result = number1 + number2;
   document.getElementById('sum').value = result;
}