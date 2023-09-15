document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup-button").addEventListener("click", function () {
        // Authenticate if all the inputs are filled
        var form = document.getElementById("registration-form");
        if (form.checkValidity()) {
            // Registration is complete
            document.getElementById("registration-message").innerText = "Registration complete!";
        } else {
            // Form is not valid, show an error message
            document.getElementById("registration-message").innerText = "Please fill out all fields.";
        }
    });
});
