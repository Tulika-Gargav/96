
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCuNZss6DuhGYiyfaekVo0meOnCxS50D2g",
      authDomain: "kwitter-2ea4c.firebaseapp.com",
      projectId: "kwitter-2ea4c",
      storageBucket: "kwitter-2ea4c.appspot.com",
      messagingSenderId: "727741692672",
      appId: "1:727741692672:web:72e68f4839c70c5d12d1e5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });

          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html"
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + " </div><hr>";
       document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";


}


