function validate(){
  const name = document.getElementById("name").value;
  console.log(name);
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword");
  const checkBox = document.getElementById("terms");
  function showError(message) {
    //reuseable function
    const errorElement = document.getElementById("demo");
    errorElement.style.color = "red";
    errorElement.style.textAlign = "center";
    errorElement.textContent = message;
  }
  if (name.trim() === '') {
    showError("Please enter your Name");
    return false;
  }
  if (email.trim() === "") {
    showError("Please enter your Email");
    return false;
  }
  if (phone.trim() === "") {
    showError("Please enter phone number");
    return false;
  }
  if (phone.length !== 10) {
    showError("Please enter 10 digit phone number");
  }
  if ((phone = isNaN(phone))) {
    showError("Please enter a valid phone number");
  }
  if (subject === "0") {
    showError("Please provide with expertise");
    return false;
  }
  if (password.trim() === "") {
    showError("Please enter your Name");
    return false;
  }
  if (password.trim() <= 6) {
    showError("Please enter a password upto 6 charcaters");
  }
  if (confirmPassword === password) {
    errorElement("Passwords do not match");
  }
  if (checkBox === "") {
    showError("Please select the checkbox for terms and conditions");
  }
}
