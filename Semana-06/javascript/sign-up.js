window.onload = function () {
  var nameInput = document.getElementById("name");
  var lastNameInput = document.getElementById("last-name");
  var documentInput = document.getElementById("document");
  var dateOfBirthInput = document.getElementById("date-of-birth");
  var phoneInput = document.getElementById("phone");
  var addressInput = document.getElementById("address");
  var locationInput = document.getElementById("location");
  var postalCodeInput = document.getElementById("postal-code");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var repeatPasswordInput = document.getElementById("repeat-password");
  var submitButton = document.getElementById("submit");

  nameInput.addEventListener("blur", function () {
    validateName();
  });
  lastNameInput.addEventListener("blur", function () {
    validateLastName();
  });
  documentInput.addEventListener("blur", function () {
    validateDocument();
  });
  dateOfBirthInput.addEventListener("blur", function () {
    validateDateOfBirth();
  });
  phoneInput.addEventListener("blur", function () {
    validatePhone();
  });
  addressInput.addEventListener("blur", function () {
    validateAddress();
  });
  locationInput.addEventListener("blur", function () {
    validateLocation();
  });
  postalCodeInput.addEventListener("blur", function () {
    validatePostalCode();
  });
  emailInput.addEventListener("blur", function () {
    validateEmail();
  });
  passwordInput.addEventListener("blur", function () {
    validatePassword();
  });
  repeatPasswordInput.addEventListener("blur", function () {
    validateRepeatPassword();
  });

  nameInput.addEventListener("focus", function () {
    cleanField("name-error", "name");
  });
  lastNameInput.addEventListener("focus", function () {
    cleanField("last-name-error", "last-name");
  });
  documentInput.addEventListener("focus", function () {
    cleanField("document-error", "document");
  });
  dateOfBirthInput.addEventListener("focus", function () {
    cleanField("date-of-birth-error", "date-of-birth");
  });
  phoneInput.addEventListener("focus", function () {
    cleanField("phone-error", "phone");
  });
  addressInput.addEventListener("focus", function () {
    cleanField("address-error", "address");
  });
  locationInput.addEventListener("focus", function () {
    cleanField("location-error", "location");
  });
  postalCodeInput.addEventListener("focus", function () {
    cleanField("postal-code-error", "postal-code");
  });
  emailInput.addEventListener("focus", function () {
    cleanField("email-error", "email");
  });
  passwordInput.addEventListener("focus", function () {
    cleanField("password-error", "password");
  });
  repeatPasswordInput.addEventListener("focus", function () {
    cleanField("repeat-password-error", "repeat-password");
  });

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    validateName();
    validateLastName();
    validateDocument();
    validateDateOfBirth();
    validatePhone();
    validateAddress();
    validateLocation();
    validatePostalCode();
    validateEmail();
    validatePassword();
    validateRepeatPassword();

    alertMsg();
  });
};

function alertMsg() {
  var msg = "";
  var nameError = document.getElementById("name-error").innerText;
  var nameValue = document.getElementById("name").value;
  var lastNameError = document.getElementById("last-name-error").innerText;
  var lastNameValue = document.getElementById("last-name").value;
  var documentError = document.getElementById("document-error").innerText;
  var documentValue = document.getElementById("document").value;
  var dateOfBirthError = document.getElementById("date-of-birth-error").innerText;
  var dateOfBirthValue = document.getElementById("date-of-birth").value;
  var phoneError = document.getElementById("phone-error").innerText;
  var phoneValue = document.getElementById("phone").value;
  var addressError = document.getElementById("address-error").innerText;
  var addressValue = document.getElementById("address").value;
  var locationError = document.getElementById("location-error").innerText;
  var locationValue = document.getElementById("location").value;
  var postalCodeError = document.getElementById("postal-code-error").innerText;
  var postalCodeValue = document.getElementById("postal-code").value;
  var emailError = document.getElementById("email-error").innerText;
  var emailValue = document.getElementById("email").value;
  var passwordError = document.getElementById("password-error").innerText;
  var passwordValue = document.getElementById("password").value;
  var repeatPasswordError = document.getElementById("repeat-password-error").innerText;
  var repeatPasswordValue = document.getElementById("repeat-password").value;

  if (nameError.length !== 1) {
    msg += "The field Name cant be empty.\n";
  } else {
    msg += "Name: " + nameValue + "\n";
  }

  if (lastNameError.length !== 1) {
    msg += "The field Last name cant be empty.\n";
  } else {
    msg += "Last name: " + lastNameValue + "\n";
  }

  if (documentError.length !== 1) {
    msg += "The field Document cant be empty.\n";
  } else {
    msg += "Document: " + documentValue + "\n";
  }

  if (dateOfBirthError.length !== 1) {
    msg += "The field Date of birth cant be empty.\n";
  } else {
    msg += "Date of birth: " + dateOfBirthValue + "\n";
  }

  if (phoneError.length !== 1) {
    msg += "The field Phone cant be empty.\n";
  } else {
    msg += "Phone: " + phoneValue + "\n";
  }

  if (addressError.length !== 1) {
    msg += "The field Address cant be empty.\n";
  } else {
    msg += "Address: " + addressValue + "\n";
  }

  if (locationError.length !== 1) {
    msg += "The field Location cant be empty.\n";
  } else {
    msg += "Location: " + locationValue + "\n";
  }

  if (postalCodeError.length !== 1) {
    msg += "The field Postal code cant be empty.\n";
  } else {
    msg += "Postal code: " + postalCodeValue + "\n";
  }

  if (emailError.length !== 1) {
    msg += "The field Email cant be empty.\n";
  } else {
    msg += "Email: " + emailValue + "\n";
  }

  if (passwordError.length !== 1) {
    msg += "The field Password cant be empty.\n";
  } else {
    msg += "Password: " + passwordValue + "\n";
  }

  if (repeatPasswordError.length !== 1) {
    msg += "The field Repeat password cant be empty.\n";
  } else {
    msg += "Repeat password: " + repeatPasswordValue + "\n";
  }

  alert(msg);
}

function validateName() {
  var name = document.getElementById("name").value;
  var errorId = "name-error";

  if (name.length === 0) {
    showErrorMsg("The name is required", errorId);
  }
}

function validateLastName() {
  var lastName = document.getElementById("last-name").value;
  var errorId = "last-name-error";

  if (lastName.length === 0) {
    showErrorMsg("The last name is required", errorId);
  }
}

function validateDocument() {
  var documentValue = document.getElementById("document").value;
  var errorId = "document-error";

  if (documentValue.length === 0) {
    showErrorMsg("The document is required", errorId);
  }
}

function validateDateOfBirth() {
  var dateOfBirth = document.getElementById("date-of-birth").value;
  var errorId = "date-of-birth-error";

  if (dateOfBirth.length === 0) {
    showErrorMsg("The date of birth is required", errorId);
  }
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  var errorId = "phone-error";

  if (phone.length === 0) {
    showErrorMsg("The phone is required", errorId);
  }
}

function validateAddress() {
  var address = document.getElementById("address").value;
  var errorId = "address-error";

  if (address.length === 0) {
    showErrorMsg("The address is required", errorId);
  }
}

function validateLocation() {
  var location = document.getElementById("location").value;
  var errorId = "location-error";

  if (location.length === 0) {
    showErrorMsg("The location is required", errorId);
  }
}

function validatePostalCode() {
  var postalCode = document.getElementById("postal-code").value;
  var errorId = "postal-code-error";

  if (postalCode.length === 0) {
    showErrorMsg("The postal code is required", errorId);
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var errorId = "email-error";

  if (email.length === 0) {
    showErrorMsg("The email is required", errorId);
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var errorId = "password-error";

  if (password.length === 0) {
    showErrorMsg("The password is required", errorId);
  }
}

function validateRepeatPassword() {
  var repeatPassword = document.getElementById("repeat-password").value;
  var errorId = "repeat-password-error";

  if (repeatPassword.length === 0) {
    showErrorMsg("The repeat password is required", errorId);
  }
}

function showErrorMsg(text, field) {
  document.getElementById(field).innerText = text;
}

function cleanField(errorField, inputField) {
  document.getElementById(errorField).innerText = " ";
  document.getElementById(inputField).classList.remove("red-background", "green-background");
}

function validEmail(value) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return value.match(emailExpression);
}
