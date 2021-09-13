
function changescreen()
{
    var usernamevar = document.getElementById("loginusername").value;
    var passwordvar = document.getElementById("loginpassword").value; 


    if(usernamevar == "")
    {
        document.getElementById("h41").innerHTML = "Please type in your username before signing up!";
    }
    else
    if(passwordvar == "")
    {
        document.getElementById("h41").innerHTML = "Please type in your password before signing up!";
    }
    else
    {
        localStorage.setItem("username", usernamevar);
        localStorage.setItem("password", passwordvar);
        window.location = "kwitter_home.html";
}
}
function loginacc()
{
  window.location = "alrhaveacclogin.html";
}