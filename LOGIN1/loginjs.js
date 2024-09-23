function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../PICS/open.png"; // Change to open eye image
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../PICS/close.png"; // Change to closed eye image
    }
}

// Add event listener to form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Send form data to PHP script using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../DB/login.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Check response from server
            if (xhr.responseText === "success") {
                // Redirect to success page
                window.location.href = "../HOME1/kasaysayan1.html";
            } else {
                // Display error message
                alert(xhr.responseText);
            }
        }
    };
    xhr.send(formData);
});