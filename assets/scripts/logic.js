//Variables
let themeID = 0;
var themeSwitch_btn = document.getElementById("theme-switch");

//Event Listeners

//Functions
function changeTheme(){
    if(themeID==0){
        document.getElementById("html").style.backgroundColor='black';
    }
    else if(themeID==1){
        document.getElementById("html").style.backgroundColor='white';
    }
}