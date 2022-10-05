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

  emailInput.value = localStorage.getItem('email-input');
  passwordInput.value = localStorage.getItem('password-input');
  loginButton.addEventListener("click", login);
};

function validEmail(value) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return value.match(emailExpression);
}
function validateEmail() {
  var emailValue = document.getElementById("email-input").value;
  var errorId = "email-error";

  if (emailValue.length === 0) {
    showErrorMsg("Email can't be empty.", errorId);
    document.getElementById("email-input").classList.add("red-background");
    return false;
  } else if (!validEmail(emailValue)) {
    showErrorMsg("Please enter a valid e-mail address.", errorId);
    document.getElementById("email-input").classList.add("red-background");
    return false;
  } else {
    document.getElementById("email-input").classList.add("green-background");
    return true;
  }
}

function validatePassword() {
  var passwordValue = document.getElementById("password-input").value;
  var errorId = "password-error";

  if (passwordValue.length === 0) {
    showErrorMsg("Password can't be empty.", errorId);
    document.getElementById("password-input").classList.add("red-background");
    return false;
  } else if (passwordValue.length < 8) {
    showErrorMsg("Password needs to be at least 8 characters length.", errorId);
    document.getElementById("password-input").classList.add("red-background");
    return false;
  } else {
    document.getElementById("password-input").classList.add("green-background");
    return true;
  }
}

function cleanField(errorField, inputField) {
  document.getElementById(errorField).innerText = " ";
  document.getElementById(inputField).classList.remove("red-background", "green-background");
}

function showErrorMsg(text, field) {
  document.getElementById(field).innerText = text;
}


function login(e) {
  if (!validateEmail()) {
    alert('Incorrect email. Please try again');
  }
  else if (!validatePassword()) {
    alert('Incorrect password. Please try again');
  }
  else {
    e.preventDefault();
    var emailAlert = document.getElementById('email-input').value;
    var passwordAlert = document.getElementById('password-input').value;
    alert('Email: ' + emailAlert + ' Pass: ' + passwordAlert);

    var urlWithQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + emailAlert + '&password=' + passwordAlert;

    fetch(urlWithQP)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
        alert(data.msg);
        if (!data.success) {
          throw new Error('There was an error with the request');
        }
        emailInput.value = localStorage.setItem('email-input');
        passwordInput.value = localStorage.setItem('password-input');
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
