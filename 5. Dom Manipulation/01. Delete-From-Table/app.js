// Task 1. Delete from Table
// Write a program that takes an email from an input field and deletes the matching row from a table. If no entry is
// found, an error should be displayed in a &lt;div&gt; with ID &quot;results&quot;. The error should be &quot;Not found.&quot; Submit
// only the deleteByEmail() function in judge.

function deleteByEmail() {
    var email = document.querySelector("input[type=text]").value;
    var emailList = document.querySelectorAll("tbody tr td:last-child");
    var result = document.getElementById("result");
    emailList.forEach(el => {
        var currentEmail = el.textContent;
        if(currentEmail === email){
            el.parentNode.remove();
            result.textContent = "Deleted";
        }
        else{
            result.textContent = "Not Found";
        }
    });
    console.log('dsadas');
    
}
deleteByEmail();