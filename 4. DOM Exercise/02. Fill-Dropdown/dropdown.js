// Task 2. Fill Dropdown
// Your task is to take values from input fields with id=&quot;newItemText&quot; and id=&quot;newItemValue&quot; and create and
// append an &lt;option&gt; to the &lt;select&gt; with id=&quot;menu&quot;.

function addItem() {
    let textValue = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let opt = document.createElement('option');
    opt.textContent = textValue + value;
    document.getElementById('menu').appendChild(opt);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}