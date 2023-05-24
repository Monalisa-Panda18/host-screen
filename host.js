function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation or send login request to the server
    // Here, you can add your own logic for validation or API call

    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  }