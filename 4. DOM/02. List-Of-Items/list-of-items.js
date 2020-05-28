// Task 2. List of Items
// Write a function that read the text inside an input field and appends the specified text to a list inside an HTML page.

function addItem() {
    var thirdElement = document.querySelector("#newItemText").value;

    let li = document.createElement('li');
    li.textContent = thirdElement;
    document.getElementById('items').appendChild(li);
}