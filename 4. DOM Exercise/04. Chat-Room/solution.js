// Task 4. Chat Room
// Write a function to create the functionality of a chat room.

function solve() {
   var button = document.querySelector("#send");
 
   button.addEventListener('click', function(){
      var inp = document.getElementById("chat_input").value;
      var Nchat = document.createElement('div');
      Nchat.className = "message my-message";
      Nchat.innerHTML = inp;
      document.getElementById('chat_messages').appendChild(Nchat);
      document.getElementById("chat_input").value = "";
   });
   
}


