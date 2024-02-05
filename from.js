function seterror(id, error) {
  //set error inside tag of Id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function validateForm() {
  clearErrors();
  var returnval = true;
  //perform validation and if validation fails returnval = false
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short!");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("name", "*Length of name can not be zero!");
    returnval = false;
  }
  // email ---------------
  var email = document.forms["myForm"]["femail"].value;
  if (email.length > 30) {
    seterror("email", "*Email length is too long!");
    returnval = false;
  }
  // phone--------------
  var phone = document.forms["myForm"]["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "*Phone length should be of 10 digits!");
    returnval = false;
  }
  // password-------------
  var password = document.forms["myForm"]["fpass"].value;
  if (password.length < 6) {
    seterror("pass", "*Password should be atleast 6 charcater!");
    returnval = false;
  }
  //confirm password
  var cpassword = document.forms["myForm"]["fcpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*Password and Confirm password should match!");
    returnval = false;
  }

  return returnval;
}
