// Task 1. Subtraction
// A HTML page holds two text fields with id=&quot;firstNumber&quot; and id=&quot;secondNumber&quot;. Write a function to
// subtract the values from these text fields and display the result in a div with id=&quot;result&quot;.
// HTML, CSS and JavaScript Code
// Implement the above to provide the following functionality:
//  Your function should take the values of the input fields, convert them to numbers, subtract the second
// number from the first and then write the result in the &lt;div&gt; with id=&quot;result&quot;
//  Your function should be able to work with any 2 numbers in the inputs, not only the ones given in the
// example.

function subtract() {
    var firstNumber = +document.getElementById('firstNumber').value;
    var secondNumber = +document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = firstNumber - secondNumber;
}