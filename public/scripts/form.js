document.getElementById("scheduler-form").onsubmit = () => {

  clearErrors();

  let isValid = true;

  let firstName = document.getElementById("fname").value.trim();
  if (firstName == "") {
    document.getElementById("err-fname").style.display = "inline";
    isValid = false;
  }

  let lastName = document.getElementById("lname").value.trim();
  if (lastName == "") {
    document.getElementById("err-lname").style.display = "inline";
    isValid = false;
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
