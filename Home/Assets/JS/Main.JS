document.getElementById("userName").innerHTML = localStorage.getItem("userName")

document.getElementById("logOut").addEventListener("click", function () {
    localStorage.removeItem("userName");
})



// function displayWelcomeUser()
// {
//     document.getElementById("username").innerHTML = "Welcome "+ username;

// }

