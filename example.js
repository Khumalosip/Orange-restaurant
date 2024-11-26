"use strict";

/* Script for the Get-In-Touch form */

/* Declare variables for form elements */
const form = document.querySelector("form");
const nameField = document.getElementById("inputText3"); // Name & Surname field
const emailField = document.getElementById("inputEmail3"); // Email field
const notificationRadios = document.querySelectorAll("input[name='gridRadios']"); // Notification options
const termsCheckbox = document.getElementById("gridCheck1"); // Terms and conditions checkbox
const errorBox = document.createElement("div"); // For displaying errors

/* Add the errorBox dynamically to the form */
errorBox.id = "errorBox";
errorBox.style.color = "red";
errorBox.style.marginTop = "10px";
form.appendChild(errorBox);

/* Add submit event listener to the form */
form.addEventListener("submit", function (evt) {
    // Reset the error box
    errorBox.textContent = "";

    // Validation checks
    let valid = true;
    if (nameField.value.trim() === "") {
        valid = false;
        nameField.style.borderColor = "red";
    } else {
        nameField.style.borderColor = "";
    }

    if (emailField.value.trim() === "" || !validateEmail(emailField.value)) {
        valid = false;
        emailField.style.borderColor = "red";
    } else {
        emailField.style.borderColor = "";
    }

    if (!termsCheckbox.checked) {
        valid = false;
        errorBox.textContent = "You must agree to the terms and conditions.";
    }

    // If invalid, prevent form submission
    if (!valid) {
        evt.preventDefault();
        errorBox.textContent = errorBox.textContent || "Please complete all required fields.";
    }
});

/* Validate email format using regex */
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

/* Add event listeners to radio buttons for notifications */
notificationRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
        console.log(Notification preference set to: ${radio.value});
    });
});

/* Reset form styles on focus */
[nameField, emailField].forEach((field) => {
    field.addEventListener("focus", function () {
        field.style.borderColor = "";
        errorBox.textContent = "";
    });
});