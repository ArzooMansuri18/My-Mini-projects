const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    //Name Validation
    if(nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required");
        valid = false;
    } else {
        showSuccess(nameInput, nameError);
    }

    //Email Validation
    if(!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, "Enter a valid email");
        valid = false;
    } else {
        showSuccess(emailInput, emailError);
    }

    //Password Validation
    if(password.value.length < 6) {
        showError(passwordInput, passwordError, "Password must be at least 6 characters");
        valid = false;
    } else {
        showSuccess(passwordInput, passwordError);
    }

    if (valid) {
        alert("Form submitted sucessfully!");
        form.reset();
        removeClasses(nameInput);
        removeClasses(emailInput);
        removeClasses(passwordInput);
    }
});

function showError(input, errorElement, message) {
    if(input && input.classlist) {
        input.classlist.remove("input-success");
        input.classlist.add("input-error");
    }
    if(errorElement) {
        errorElement.textContent = message;
    }
}

function showSuccess(input, errorElement) {
    if(input && input.classlist) {
        input.classlist.remove("input-error");
        input.classlist.add("input-success");
    }
    if(errorElement) {
        errorElement.textContent = "";
    }
}
 
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function removeClasses(input) {
    input.classlist.remove("input-error", "input-success");
}