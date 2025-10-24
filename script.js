
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");

loginBtn.addEventListener("click", () => {
    if (loginBtn.innerText === "Login") {
        loginPopup.style.display = "block";
    } else {
        localStorage.removeItem("loggedInUser");
        alert("You have been signed out!");
        loginBtn.innerText = "Login";
    }
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("loggedInUser", username);
        alert(`Welcome, ${username}!`);
        loginPopup.style.display = "none";
        loginBtn.innerText = "Sign Out";
    } else {
        alert("Please enter both username and password!");
    }
}

window.onload = () => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
        loginBtn.innerText = "Sign Out";
    }
};