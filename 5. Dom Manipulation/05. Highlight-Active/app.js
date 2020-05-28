// Task 5. Highlight Active
// Write a function that highlights the currently active section of a document. There will be multiple divs with input
// fields inside them. Set the class of the div that contains the currently focused input field to &quot;focused&quot;. When
// focus is lost (blurred), remove the class from the element.
// Submit only the focus() function in judge.

function focus() {
    var sec1 = document.querySelector('body > div > div:nth-child(1)');
    var sec1input = document.querySelector('body > div > div:nth-child(1) > input[type=text]');

    sec1input.addEventListener('focus', function(){sec1.classList.add('focused');})
    sec1input.addEventListener('blur', function(){sec1.classList.remove('focused')})

    var sec2 = document.querySelector('body > div > div:nth-child(2)');
    var sec2input = document.querySelector('body > div > div:nth-child(2) > input[type=text]');

    sec2input.addEventListener('focus', function(){sec2.classList.add('focused');})
    sec2input.addEventListener('blur', function(){sec2.classList.remove('focused')})

    var sec3 = document.querySelector('body > div > div:nth-child(3)');
    var sec3input = document.querySelector('body > div > div:nth-child(3) > input[type=text]');

    sec3input.addEventListener('focus', function(){sec3.classList.add('focused');})
    sec3input.addEventListener('blur', function(){sec3.classList.remove('focused')})

    var sec4 = document.querySelector('body > div > div:nth-child(4)');
    var sec4input = document.querySelector('body > div > div:nth-child(4) > input[type=text]');

    sec4input.addEventListener('focus', function(){sec4.classList.add('focused');})
    sec4input.addEventListener('blur', function(){sec4.classList.remove('focused')})
}