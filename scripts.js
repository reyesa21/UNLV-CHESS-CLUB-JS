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
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.opacity = "1";
    } else {
      x.style.display = "none";
      x.style.opacity = "0";
    }  }