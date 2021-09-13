var firebaseConfig = {
    apiKey: "AIzaSyCkusyrXaXxs5YSvTY755UbIyLAlwH9Mo4",
    authDomain: "project-94-fc145.firebaseapp.com",
    databaseURL: "https://project-94-fc145-default-rtdb.firebaseio.com",
    projectId: "project-94-fc145",
    storageBucket: "project-94-fc145.appspot.com",
    messagingSenderId: "793777870868",
    appId: "1:793777870868:web:3e392672bf6644c0edef01"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // if (true == "yes")
  //{
 //   username = localStorage.getItem("usernamevar");
   // document.getElementById("welcomeuser").innerHTML = "Welcome " + username + "!";
  //}
    username = localStorage.getItem("username");
    document.getElementById("welcomeuser").innerHTML = "Welcome " + username + "!";

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({Purpose: "Adding room"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row = "<div class ='room_name2' id=" + Room_names + "onclick = 'redirecttotheroomname(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirecttotheroomname(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      console.log(name)
}