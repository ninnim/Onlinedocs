alert("Test6");
function myFunction() {
    alert("Hello! I am an alert box!");
  };

function validateForm() {
  var name = document.getElementById("bankname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (phone == "") {
    alert("Please enter a phone number.");
    return false;
  }

  return true;
}
