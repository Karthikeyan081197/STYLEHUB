/* =========================
   LOGIN FORM VALIDATION
========================= */

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = "";
    let password = "";

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    
    emailError.textContent = "";
    passwordError.textContent = "";
    
    let flag = true;

    // Get the input values using event.target
    let form = event.target;

    email = form.email.value.trim();
    password = form.password.value;

    // Email validation
    let emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter Valid Email";
        flag = false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent = "Password must contain at least 8 characters";
        flag = false;
    }

    if (!/[a-z]/.test(password)) {
        passwordError.textContent += "\nEnter at least one small letter";
        flag = false;
    }

    if (!/[A-Z]/.test(password)) {
        passwordError.textContent += "\nEnter at least one capital letter";
        flag = false;
    }

    if (!/[0-9]/.test(password)) {
        passwordError.textContent += "\nEnter at least one number";
        flag = false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        passwordError.textContent += "\nEnter at least one special character";
        flag = false;
    }

    // Successful validation
    if (flag == true) {
        // Move to webpage
        window.location.href = "index.html"; 
    }
});


/* =========================
   SHOW / HIDE PASSWORD
========================= */

document.getElementById("togglePassword").addEventListener("click", function(event) {
    let password = document.getElementById("password");

    if (password.type == "password") {
        // Browser displays the password in text
        password.type = "text";
        event.target.textContent = "Hide";
    }

    else {
        password.type = "password";
        event.target.textContent = "Show";
    }
});


/* =========================
   CREATE ACCOUNT LINK
========================= */

document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Registration will be added later.");
});



