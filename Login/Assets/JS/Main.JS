
var user = [];
user = JSON.parse(localStorage.getItem("user"));


// var userName = localStorage.getItem("user");

var signUpEmail = document.getElementById("signEmail");
var signUpPassword = document.getElementById("signPassword");
var wrongMsg = document.getElementById("wrongMsg");
var logInBtn = document.getElementById("logIn");
// function ggg() {
//     console.log(logInBtn);
// }

logInBtn.addEventListener("click", function () {
    if (signUpEmail == "" || signUpPassword == "") {
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false;
    }
    for (var i = 0; i < user.length; i++) {
        if (signUpEmail.value.toLowerCase() == user[i].email.toLowerCase() && signUpPassword.value.toLowerCase() == user[i].password.toLowerCase()) {
            localStorage.setItem("userName", user[i].name);
            location.href = `../../../Home/Index.Html`;
            break;
        }
        else {
            wrongMsg.classList("d-none", "d-block")
        }
    }
});

