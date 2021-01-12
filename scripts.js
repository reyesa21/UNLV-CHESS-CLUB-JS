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

    if (x.style.display === "block") {
      x.style.display = "none";
      dim.style.display = "none";
      body.style.overflow = "scroll";
    } else {
      x.style.display = "block";
      dim.style.display = "block";
      body.style.overflow = "hidden";
    }  
    console.log(x);
  }

 window.onload = () =>{
      var div = document.getElementById("signUp");
      var dim = document.getElementById("dimmer");
      document.onclick = (e) =>{
         if(div.style.display ==="block" && e.target.id === 'dimmer'){
            div.style.display = 'none';
            dim.style.display = 'none';
            body.style.overflow = "unset";
        }

      };
   };


   function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");
  

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }

  