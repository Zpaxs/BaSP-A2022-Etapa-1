window.onload = function () {
  var formLogin = document.getElementById("form-login");
  var emailInput = document.getElementById("email-input");
  var passwordInput = document.getElementById("password-input");
  var loginButton = document.getElementById("form-login-button");

  emailInput.addEventListener("blur", function () {
    validateEmail();
  });

  emailInput.addEventListener("focus", function () {
    cleanField("email-error");
  });

  passwordInput.addEventListener("blur", function () {
    validatePassword();
  });

  passwordInput.addEventListener("focus", function () {
    cleanField("password-error");
  });
};

function validateEmail() {
  var emailValue = document.getElementById("email-input").value;
  var errorId = "email-error";

  if (emailValue.length === 0) {
    showErrorMsg("This field can't be empty.", errorId);
  } else if (!rightEmail(emailValue)) {
    showErrorMsg("Please enter a valid e-mail address.", errorId);
  }
}

function validatePassword() {
  var passwordValue = document.getElementById("password-input").value;
  var errorId = "password-error";

  if (passwordValue.length === 0) {
    showErrorMsg("This field can't be empty.", errorId);
  } else if (passwordValue.length < 8) {
    showErrorMsg("Password needs to be at least 8 characters length.", errorId);
  }
}

function cleanField(field) {
  document.getElementById(field).innerText = " ";
}

function showErrorMsg(text, field) {
  document.getElementById(field).innerText = text;
}

function rightEmail(value) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return value.match(emailExpression);
}
