//Variables
let themeID = 0;
var themeSwitch_btn = document.getElementById("theme-switch");

//Event Listeners

//Functions
function changeTheme(){
    if(themeID==0){
        document.getElementById("html").style.backgroundColor='black';
        themeID++
    }
    else if(themeID==1){
        document.getElementById("html").style.backgroundColor='white';
        themeID=0;
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main-container").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  var dropdown = document.getElementsByClassName("html-dropdown");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }