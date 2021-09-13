
function backfunction()
{
    window.location = "index.html";
}
function changescreen()
{
     usernamevar2 = document.getElementById("loginoldaccusername").value;
     passwordvar2 = document.getElementById("loginoldaccpassword").value;

     localstorage = localStorage.getItem("username")
     localstorage2 = localStorage.getItem("password")

    if(usernamevar2 == "")
    {
        document.getElementById("h42").innerHTML = "Please type in your username before logging in!";
    }
    else
    if(passwordvar2 == "")
    {
        document.getElementById("h42").innerHTML = "Please type in your password before logging in!";
    }
    else if(usernamevar2 == localstorage && passwordvar2 == localstorage2)
    {
        true = "yes";
        localstorage4 = localStorage.setItem("username", usernamevar2);
        localstorage3 = localStorage.setItem("password", passwordvar2);
        window.location = "kwitter_home.html";
    }
}