window.onload = function () {
  var nameInput = document.getElementById("name");
  var lastNameInput = document.getElementById("last-name");
  var documentInput = document.getElementById("document-input");
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
    cleanField("document-error", "document-input");
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
  var documentValue = document.getElementById("document-input").value;
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
    msg += nameError + "\n";
  } else {
    msg += "Name: " + nameValue + "\n";
  }

  if (lastNameError.length !== 1) {
    msg += lastNameError + "\n";
  } else {
    msg += "Last name: " + lastNameValue + "\n";
  }

  if (documentError.length !== 1) {
    msg += documentError + "\n";
  } else {
    msg += "Document: " + documentValue + "\n";
  }

  if (dateOfBirthError.length !== 1) {
    msg += dateOfBirthError + "\n";
  } else {
    msg += "Date of birth: " + dateOfBirthValue + "\n";
  }

  if (phoneError.length !== 1) {
    msg += phoneError + "\n";
  } else {
    msg += "Phone: " + phoneValue + "\n";
  }

  if (addressError.length !== 1) {
    msg += addressError + "\n";
  } else {
    msg += "Address: " + addressValue + "\n";
  }

  if (locationError.length !== 1) {
    msg += locationError + "\n";
  } else {
    msg += "Location: " + locationValue + "\n";
  }

  if (postalCodeError.length !== 1) {
    msg += postalCodeError + "\n";
  } else {
    msg += "Postal code: " + postalCodeValue + "\n";
  }

  if (emailError.length !== 1) {
    msg += emailError + "\n";
  } else {
    msg += "Email: " + emailValue + "\n";
  }

  if (passwordError.length !== 1) {
    msg += passwordError + "\n";
  } else {
    msg += "Password: " + passwordValue + "\n";
  }

  if (repeatPasswordError.length !== 1) {
    msg += repeatPasswordError + "\n";
  } else {
    msg += "Repeat password: " + repeatPasswordValue + "\n";
  }

  alert(msg);
}

function validateName() {
  var name = document.getElementById("name").value;
  var errorId = "name-error";

  if (name.length === 0) {
    showErrorMsg("Name is required", errorId);
    document.getElementById("name").classList.add("red-background");
  } else if (name.length < 3) {
    showErrorMsg("Name needs to be at least 3 characters length.", errorId);
    document.getElementById("name").classList.add("red-background");
  } else if (!isString(name)) {
    showErrorMsg("Name can only contain letters.", errorId);
    document.getElementById("name").classList.add("red-background");
  } else {
    document.getElementById("name").classList.add("green-background");
  }
}

function validateLastName() {
  var lastName = document.getElementById("last-name").value;
  var errorId = "last-name-error";

  if (lastName.length === 0) {
    showErrorMsg("Last name is required", errorId);
    document.getElementById("last-name").classList.add("red-background");
  } else if (lastName.length < 3) {
    showErrorMsg("Last name needs to be at least 3 characters length.", errorId);
    document.getElementById("name").classList.add("red-background");
  } else if (!isString(lastName)) {
    showErrorMsg("Last name can only contain letters.", errorId);
    document.getElementById("last-name").classList.add("red-background");
  } else {
    document.getElementById("last-name").classList.add("green-background");
  }
}

function validateDocument() {
  var documentValue = document.getElementById("document-input").value;
  var errorId = "document-error";

  if (documentValue.length === 0) {
    showErrorMsg("Document is required", errorId);
    document.getElementById("document-input").classList.add("red-background");
  } else if (!isNumeric(documentValue)) {
    showErrorMsg("Document can only contain numbers.", errorId);
    document.getElementById("document-input").classList.add("red-background");
  } else if (documentValue.length < 7) {
    showErrorMsg("Document needs to be at least 7 characters length.", errorId);
    document.getElementById("document-input").classList.add("red-background");
  } else {
    document.getElementById("document-input").classList.add("green-background");
  }
}

function validateDateOfBirth() {
  var dateOfBirth = document.getElementById("date-of-birth").value;
  var errorId = "date-of-birth-error";

  if (dateOfBirth.length === 0) {
    showErrorMsg("The date of birth is required.", errorId);
    document.getElementById("date-of-birth").classList.add("red-background");
  } else {
    document.getElementById("date-of-birth").classList.add("green-background");
  }
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  var errorId = "phone-error";

  if (phone.length === 0) {
    showErrorMsg("Phone is required", errorId);
    document.getElementById("phone").classList.add("red-background");
  }
  if (!isNumeric(phone)) {
    showErrorMsg("Phone can only contain numbers.", errorId);
    document.getElementById("phone").classList.add("red-background");
  } else if (phone.length !== 10) {
    showErrorMsg("Phone needs to be 10 characters length.", errorId);
    document.getElementById("phone").classList.add("red-background");
  } else {
    document.getElementById("phone").classList.add("green-background");
  }
}

function validateAddress() {
  var address = document.getElementById("address").value;
  var errorId = "address-error";

  if (address.length === 0) {
    showErrorMsg("Address is required", errorId);
    document.getElementById("address").classList.add("red-background");
  } else if (address.length < 5) {
    showErrorMsg("Address needs to be at least 5 characters length.", errorId);
    document.getElementById("address").classList.add("red-background");
  } else if (!isAlphanumeric(address)) {
    showErrorMsg("Address needs to contain letters and numbers.", errorId);
    document.getElementById("address").classList.add("red-background");
  } else if (!hasSpace(address)) {
    showErrorMsg("Address needs to have a space in the middle.", errorId);
    document.getElementById("address").classList.add("red-background");
  } else if (!containNumbersAndLetters(address)) {
    showErrorMsg("Address needs to contain letters and numbers.", errorId);
    document.getElementById("address").classList.add("red-background");
  } else {
    document.getElementById("address").classList.add("green-background");
  }
}

function validateLocation() {
  var location = document.getElementById("location").value;
  var errorId = "location-error";

  if (location.length === 0) {
    showErrorMsg("Location is required", errorId);
    document.getElementById("location").classList.add("red-background");
  } else if (location.length < 3) {
    showErrorMsg("Location needs to be at least 3 characters length.", errorId);
    document.getElementById("location").classList.add("red-background");
  } else if (!isAlphanumeric(location)) {
    showErrorMsg("Location can only contain letters or numbers.", errorId);
    document.getElementById("location").classList.add("red-background");
  } else {
    document.getElementById("location").classList.add("green-background");
  }
}

function validatePostalCode() {
  var postalCode = document.getElementById("postal-code").value;
  var errorId = "postal-code-error";

  if (postalCode.length === 0) {
    showErrorMsg("The postal code is required", errorId);
    document.getElementById("postal-code").classList.add("red-background");
  }
  if (!isNumeric(postalCode)) {
    showErrorMsg("Postal code can only contain numbers.", errorId);
    document.getElementById("postal-code").classList.add("red-background");
  } else if (postalCode.length < 4 || postalCode.length > 5) {
    showErrorMsg("Postal code needs to be 4 or 5 characters length.", errorId);
    document.getElementById("postal-code").classList.add("red-background");
  } else {
    document.getElementById("postal-code").classList.add("green-background");
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var errorId = "email-error";

  if (email.length === 0) {
    showErrorMsg("Email is required.", errorId);
    document.getElementById("email").classList.add("red-background");
  } else if (!validEmail(email)) {
    showErrorMsg("Please enter a valid e-mail address.", errorId);
    document.getElementById("email").classList.add("red-background");
  } else {
    document.getElementById("email").classList.add("green-background");
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var errorId = "password-error";

  if (password.length === 0) {
    showErrorMsg("Password is required", errorId);
    document.getElementById("password").classList.add("red-background");
  } else if (password.length < 8) {
    showErrorMsg("Password needs to be at least 8 characters length.", errorId);
    document.getElementById("password").classList.add("red-background");
  } else if (!isAlphanumeric(password)) {
    showErrorMsg("Password can only contain letters or numbers.", errorId);
    document.getElementById("password").classList.add("red-background");
  } else {
    document.getElementById("password").classList.add("green-background");
  }
}

function validateRepeatPassword() {
  var repeatPassword = document.getElementById("repeat-password").value;
  var password = document.getElementById("password").value;
  var errorId = "repeat-password-error";

  if (repeatPassword.length === 0) {
    showErrorMsg("Repeat password is required", errorId);
    document.getElementById("repeat-password").classList.add("red-background");
  } else if (repeatPassword !== password) {
    showErrorMsg("Repeat password must be the same as password.", errorId);
    document.getElementById("repeat-password").classList.add("red-background");
  } else if (repeatPassword === password) {
    document.getElementById("repeat-password").classList.add("green-background");
    document.getElementById("repeat-password-error").innerText = " ";
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

function isString(value) {
  var alphabet = " abcdefghijklmnopqrstuvwxyz";

  return validateString(value, alphabet);
}

function isNumeric(value) {
  var numbers = "0123456789";

  return validateString(value, numbers);
}

function isAlphanumeric(value) {
  var alphanumeric = " abcdefghijklmnopqrstuvwxyz0123456789";

  return validateString(value, alphanumeric);
}

function validateString(string, validValues) {
  var length = string.length;
  for (var i = 0; i < length; i++) {
    var char = string.charAt(i).toLowerCase();
    if (!validValues.includes(char)) {
      return false;
    }
  }

  return true;
}

function hasSpace(value) {
  return value.indexOf(" ") >= 1;
}

function containNumbersAndLetters(value) {
  var length = value.length;
  var containNumber = false;
  var containLetter = false;

  for (var i = 0; i < length; i++) {
    var char = value.charAt(i);
    if (!containNumber) containNumber = isNumeric(char);
    if (!containLetter) containLetter = isString(char);
  }

  return containLetter && containNumber;
}
