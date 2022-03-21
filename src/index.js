let userName = prompt("Please Enter your username: ") || "User";

let welcomeText = document.querySelector(".weclome-txt");
welcomeText.textContent += userName;

