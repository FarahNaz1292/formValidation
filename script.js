function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;
  function showError(message) {
    const errorElement = document.getElementById("demo");
    errorElement.style.color = "red";
    errorElement.style.textAlign = "center";
    errorElement.textContent = message;
  }
  if (name.trim() === "") {
    showError("Name cannot be empty");
    return false;
  }
  if (email.trim() === "") {
    showError("Email cannot be empty");
    return false;
  }
  if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
    showError("Please enter a 10-digit phone number");
    return false;
  }
  if (subject === "0") {
    showError("Please select one");
    return false;
  }
  if (password.trim() === "" || password.length !== 8) {
    showError("Please enter an 8-character password");
    return false;
  }
  if (confirmPassword !== password) {
    showError("Passwords do not match");
    return false;
  }
  if (!terms) {
    showError("Please confirm terms and conditions");
    return false;
  }
  // Show success message or perform a success action
  alert("Registration successful!");
  return true;
}