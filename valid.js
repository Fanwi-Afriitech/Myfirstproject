var email = document.forms['form']['email'];
var passwords = document.forms['form']['passwords'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

function validated(){
   if (email.value.length < 9){
      email.style.border="1px solid red";
      email_error.style.display="block";
      email.focus();
      return false;
    }
   if (passwords.value.length < 6){
      passwords.style.border="1px solid red";
      pass_error.style.display="block";
      passwords.focus();
      return false;
    }
}