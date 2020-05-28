// Task 3. Notification
// Write a JS function that receives a string message and displays it inside a div with id &quot;notification&quot; for 2 seconds.
// The div starts hidden and when the function is called, reveal it. After 2 seconds, hide the div. In the example
// document, a notification is shown when you click the button.

function notify(message) {
    var button = document.querySelector("#content > button");
    var notification = document.getElementById('notification');

    notification.style.display = 'block';
    notification.textContent = message;

    setInterval(function showNot() {

    notification.style.display = 'none';
    notification.textContent = message;

}, 2000);

}