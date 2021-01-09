function nav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function popUpForm(){
    var x = document.getElementById("signUp");
    var dim = document.getElementById("dimmer");
    dim.style.display = 'none';
    if (x.style.display === "none") {
      x.style.display = "block";
      dim.style.display = "block";
    } else {
      x.style.display = "none";
      dim.style.display = "none";
    }  

  }

 window.onload = () =>{
      var div = document.getElementById("signUp");
      var dim = document.getElementById("dimmer");

      document.onclick = (e) =>{
         if(div.style.display ==="block" && e.target.id === 'dimmer'){
            div.style.display = 'none';
            dim.style.display = 'none';
         }

      };
   };