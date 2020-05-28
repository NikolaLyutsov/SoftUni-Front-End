// Task 3. Collect List Items
// Write a function that scans a given HTML list and appends all collected list items’ text to a text area on the same
// page when the user clicks on a button.

function extractText() {
    let listItems = document.querySelectorAll("#items li");
    let text = "";

    for (const el of listItems) {
        text += el.textContent + "\n";
        }
        document.getElementById("result").value = text;
}