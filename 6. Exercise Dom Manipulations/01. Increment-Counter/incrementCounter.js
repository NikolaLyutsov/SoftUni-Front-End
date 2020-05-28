// Task 1. Increment Counter
// You are tasked with creating a piece of HTML dynamically using JavaScript and appending it to a given element using
// a passed in selector.
// Your function will receive a string value representing a selector (for example &quot;#wrapper&quot; or &quot;.root&quot;), all elements
// created should be appended to the selector.
// The HTML you create should contain 4 elements:
//  &lt;textarea&gt; with class=&quot;counter&quot;, value=&quot;0&quot; and the disabled attribute.
//  &lt;button&gt; with class=&quot;btn&quot;, id=&quot;incrementBtn&quot; and text &quot;Increment&quot;.
//  &lt;button&gt; with class=&quot;btn&quot;, id=&quot;addBtn&quot; and text &quot;Add&quot;.
//  Unordered list &lt;ul&gt; with class=&quot;results&quot;.
// When the [Increment] is clicked the value of the textarea should go up by one (if it was 0 it should become 1
// e.t.c.). When the [Add] is clicked a new list item (&lt;li&gt;) with text equal to the current value of the textarea should
// be added to the unordered list.

function increment(selector) {
  let parentContainer = document.querySelector(selector);
  let textarea = document.createElement("textarea");
  textarea.className = 'counter';
  textarea.value = 0;
  textarea.setAttribute('disabled', true);
  let incrementBtn = document.createElement("button");
  incrementBtn.classList.add("btn");
  incrementBtn.setAttribute("id", "incrementBtn");
  incrementBtn.textContent = "Increment";

  let addBtn = document.createElement("button");
  addBtn.classList.add("btn");
  addBtn.setAttribute("id", "addBtn");
  addBtn.textContent = "Add";

incrementBtn.addEventListener('click', incrementNum);

function incrementNum(){
  textarea.value++;
}

addBtn.addEventListener('click', addNewListItem);

function addNewListItem(){
let li = document.createElement("li");
li.textContent = textarea.value;
ul.appendChild(li);
}

  let ul = document.createElement("ul");
  ul.className = "results";

  parentContainer.appendChild(textarea);
  parentContainer.appendChild(incrementBtn);
  parentContainer.appendChild(addBtn);
  parentContainer.appendChild(ul);
  console.log(parentContainer);
}

