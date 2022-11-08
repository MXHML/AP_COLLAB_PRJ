//Variables
let themeID = 0;
let HTMLDropdownID = 1;
let JSDropdownID = 1;
var themeSwitch_btn = document.getElementById("theme-switch");
var HTMLDropdown = document.getElementById("html-dropdown");
var JSDropdown = document.getElementById("javascript-dropdown");

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

  
function HTMLDropdownArrow(){
    if(HTMLDropdownID==0){
        document.getElementById("html-dropdown").innerHTML='Html<div style="font-size:15px; display:inline"> &#x25B2;'
        HTMLDropdownID++
    }
    else if(HTMLDropdownID==1){
        document.getElementById("html-dropdown").innerHTML='Html<div style="font-size:15px; display:inline"> &#x25BC;'
        HTMLDropdownID=0;
    }
}

function JSDropdownArrow(){
    if(JSDropdownID==0){
        document.getElementById("javascript-dropdown").innerHTML='JavaScript<div style="font-size:15px; display:inline"> &#x25B2;'
        JSDropdownID++
    }
    else if(JSDropdownID==1){
        document.getElementById("javascript-dropdown").innerHTML='JavaScript<div style="font-size:15px; display:inline"> &#x25BC;'
        JSDropdownID=0;
    }
}

//0 Is closed, 1 is open
let HTMLDropdownListID = 0;
HTMLDropdown.addEventListener("click",()=>{
    console.log("FIRE");
    if(HTMLDropdownListID==0){
        document.getElementById("html-links-container").style.display='none';
        HTMLDropdownListID++
    }
    else if(HTMLDropdownListID==1){
        document.getElementById("html-links-container").style.display='block';
        HTMLDropdownListID=0;
    }
})

let JSDropdownListID = 0;
JSDropdown.addEventListener("click",()=>{
    console.log("FIRE");
    if(JSDropdownListID==0){
        document.getElementById("javascript-links-container").style.display='none';
        JSDropdownListID++
    }
    else if(JSDropdownListID==1){
        document.getElementById("javascript-links-container").style.display='block';
        JSDropdownListID=0;
    }
})