// Task 2. Sections
// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each
// paragraph is initially hidden (&quot;display:none&quot;). Add a click event listener to each div that displays the hidden
// paragraph. Finally, you should append all divs to the element with an id=&quot;content&quot;.

function create(words) {
   let parentContainer = document.getElementById("content");
   for (let index = 0; index < words.length; index++) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = words[index];
      p.style.display = "none";
      div.appendChild(p);
      parentContainer.appendChild(div);
      div.addEventListener('click', solve);
      function solve(){
         p.style.display = "block";
      }
   }

}