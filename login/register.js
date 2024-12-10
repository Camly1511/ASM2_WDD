var register = document.getElementById("register");
var email = document.getElementById("email");
var password = document.getElementById("password");
var re_password = document.getElementById("re_password");

register.addEventListener("click", function (event) {
    console.log("Check");
    let emailData = email.value;
    let passwordData = password.value;
    let re_passwordData = re_password.value;
    event.preventDefault();
    let users = [];
    if (localStorage.getItem('users') != undefined) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    let isRegister = false;
    if (passwordData == re_passwordData) {
        users.push({ "email": emailData, "password": passwordData });
        localStorage.setItem('users', JSON.stringify(users));
        isRegister = true;
        window.location.href = "login.html";
    }
    else {
        alert("Password and re-password are not similar");
    }
});