window.onload = function () {
  var emailInput = document.getElementById("email-input");
  var passwordInput = document.getElementById("password-input");
  var loginButton = document.getElementById("form-login-button");

  emailInput.addEventListener("blur", function () {
    validateEmail();
  });

  emailInput.addEventListener("focus", function () {
    cleanField("email-error", "email-input");
  });

  passwordInput.addEventListener("blur", function () {
    validatePassword();
  });

  passwordInput.addEventListener("focus", function () {
    cleanField("password-error", "password-input");
  });

  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    validateEmail();
    validatePassword();
    cartelitouKN();
  });
};

function validateEmail() {
  var emailValue = document.getElementById("email-input").value;
  var errorId = "email-error";

  if (emailValue.length === 0) {
    showErrorMsg("Email can't be empty.", errorId);
    document.getElementById("email-input").classList.add("red-background");
  } else if (!rightEmail(emailValue)) {
    showErrorMsg("Please enter a valid e-mail address.", errorId);
    document.getElementById("email-input").classList.add("red-background");
  } else {
    document.getElementById("email-input").classList.add("green-background");
  }
}

function validatePassword() {
  var passwordValue = document.getElementById("password-input").value;
  var errorId = "password-error";

  if (passwordValue.length === 0) {
    showErrorMsg("Password can't be empty.", errorId);
    document.getElementById("password-input").classList.add("red-background");
  } else if (passwordValue.length < 8) {
    showErrorMsg("Password needs to be at least 8 characters length.", errorId);
    document.getElementById("password-input").classList.add("red-background");
  } else {
    document.getElementById("password-input").classList.add("green-background");
  }
}

function cleanField(errorField, inputField) {
  document.getElementById(errorField).innerText = " ";
  document.getElementById(inputField).classList.remove("red-background", "green-background");
}

function showErrorMsg(text, field) {
  document.getElementById(field).innerText = text;
}

function rightEmail(value) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return value.match(emailExpression);
}

function cartelitouKN() {
  var msg = "";
  var emailValue = document.getElementById("email-input").value;
  var passValue = document.getElementById("password-input").value;
  var errorEmail = document.getElementById("email-error").innerText;
  var errorPass = document.getElementById("password-error").innerText;

  if (errorEmail.length !== 1) {
    msg += errorEmail + "\n";
  } else {
    msg += "Email: " + emailValue + "\n";
  }

  if (errorPass.length !== 1) {
    msg += errorPass;
  } else {
    msg += "Password: " + passValue;
  }

  alert(msg);
}
