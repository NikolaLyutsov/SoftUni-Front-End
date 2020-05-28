// Task 6. Dynamic Validation
// Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the
// style &quot;error&quot;. Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: &lt;name&gt;@&lt;domain&gt;.&lt;extension&gt;
// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.

function validate() {
    var email = document.getElementById('email');
    let regex = /\b[A-Za-z\d]+@[a-z]+\.[a-z]+\b/;
    email.addEventListener('change', function(){
        if(regex.test(email.value)){
            email.classList.remove('error');
        }
        else{
            email.classList.add('error');
        }
    });
}