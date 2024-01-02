var signUpName = document.getElementById("signName");
var signUpEmail = document.getElementById("signEmail")
var signUpPassword = document.getElementById("signPassword");
var button = document.querySelector("button");

var user;

if (localStorage.getItem("user") == null) {
    user = [];
} else {
    user = JSON.parse(localStorage.getItem("user"));
}

function signUp() {
    if (userInputsValidation() == true && isExist() == false) {
        var obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        }
        user.push(obj);
        location.href = '../../../Login/Index.Html';
        localStorage.setItem("user", JSON.stringify(user));

        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        var signIn = document.getElementById("signIn")
        signIn.classList.replace("d-none", "d-block");

    } else {
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

}

button.addEventListener("click", signUp);

function usernameValidation() {
    var usernameAlert = document.getElementById("usernameAlert");

    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(signUpName.value) == true && signUpName.value != "") {
        signUpName.classList.add("is-valid");
        signUpName.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        signUpName.classList.add("is-invalid");
        signUpName.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }

}

function userPasswordValidation() {
    var regex = /^.{5,15}$/;
    var userPasswordAlert = document.getElementById("userPasswordAlert");

    if (regex.test(signUpPassword.value) == true && signUpPassword.value != "") {
        signUpPassword.classList.add("is-valid");
        signUpPassword.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        signUpPassword.classList.add("is-invalid");
        signUpPassword.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation() {
    var userEmailAlert = document.getElementById("userEmailAlert");

    var regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(signUpEmail.value) == true && signUpEmail.value != "") {
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        signUpEmail.classList.add("is-invalid");
        signUpEmail.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userInputsValidation() {
    usernameValidation();
    userEmailValidation();
    userPasswordValidation();

    if ((usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true)) {
        return true
    }
    else {
        return false
    }
}


function isExist() {
    var accountExistMsg = document.getElementById("accountExistMsg");

    for (var i = 0; i < user.length; i++) {

        if (user[i].name.toLowerCase() == signUpName.value.toLowerCase() || user[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            accountExistMsg.classList.replace("d-none", "d-block");
            signUpName.classList.remove("is-valid");
            signUpEmail.classList.remove("is-valid");
            signUpPassword.classList.remove("is-valid");

            return true

        } else {
            return false

        }
    }
}