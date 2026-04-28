// Global variables for password attempt tracking
let loginAttempts = 0;
const maxAttempts = 3;
let isLockedOut = false;

function log_in() {
    // Check if account is locked out
    if (isLockedOut) {
        alert("Account is locked. Too many failed login attempts. Please contact support.");
        return;
    }

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        alert("Access granted");
        loginAttempts = 0; // Reset attempts on successful login
        isLockedOut = false;
        window.location.href = "notebook.html"; // Redirect to notebook.html
    } else {
        loginAttempts++;
        
        if (loginAttempts >= maxAttempts) {
            isLockedOut = true;
            alert("Too many failed attempts. Your account is now locked.");
            document.getElementById("user").disabled = true;
            document.getElementById("pass").disabled = true;
            document.querySelector("button").disabled = true; // Disable login button
        } else {
            let remainingAttempts = maxAttempts - loginAttempts;
            alert(`Access denied. You have ${remainingAttempts} attempt(s) left.`);
        }
    }
}
    