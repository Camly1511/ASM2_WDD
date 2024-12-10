var login = document.getElementById("login");
var email = document.getElementById("email");
var password = document.getElementById("password");

login.addEventListener("click", function (event) {
    let emailData = email.value;
    let passworData = password.value;
    event.preventDefault();
    let users = [];
    if (localStorage.getItem('users') != undefined) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    let isLogin = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] == emailData && users[i]["password"] == passworData) {
            alert("Login success");
            isLogin = true;
            window.location.href = "http://127.0.0.1:5500/interface/index.html";
            break;
        }
    }
    if (!isLogin) {
        alert("Login fail");
    }
});