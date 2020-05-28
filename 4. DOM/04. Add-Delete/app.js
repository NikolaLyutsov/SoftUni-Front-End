// Task 4. Add / Delete
// Extend the previous problem to display a [Delete] link after each list item. Clicking it, should delete the item with
// no confirmation.

function addItem() {
    var thirdElement = document.querySelector("#newItemText").value;

    let li = document.createElement('li');
    var deletee = '<span>Delete</span>';

    li.innerHTML = thirdElement + deletee;
    
    document.getElementById('items').appendChild(li);
    
    li.addEventListener('click', test);

    function test(){
        document.getElementById('items').removeChild(li);
    }
}

