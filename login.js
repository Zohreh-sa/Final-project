// console.log("Hello user!");

// Array of users (add more users as needed)
const users = [
    {
        email: "user@gmail.com",
        password: "123456"
    }
];

// Add an event listener for the form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get email and password values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation checks
    if (email === "" || password === "") {
        alert("Both email and password fields are required.");
        return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the user exists in the array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Redirecting...");
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
