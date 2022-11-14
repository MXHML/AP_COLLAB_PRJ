//Variables
let themeID = sessionStorage.getItem('themeID');
let HTMLDropdownID = 0; //Arrows for the dropdown name
let JSDropdownID = 0; //Arrows for the dropdown names
let debugDropdownID = 0;
var themeSwitch_btn = document.getElementById("theme-switch");
var HTMLDropdown = document.getElementById("html-dropdown");
var JSDropdown = document.getElementById("javascript-dropdown");
var debugDropdown = document.getElementById("debug-dropdown");


window.addEventListener('load',()=>{
    if(sessionStorage.themeID==undefined){
        sessionStorage.setItem('themeID',1);
    }
    changeTheme();
})


//Functions
function changeThemeVal(){
    if(themeID==0){
        sessionStorage.setItem('themeID',1)
        changeTheme();
    }
    else if(themeID==1){
        sessionStorage.setItem('themeID',0)
        changeTheme();
    }
}

function changeTheme(){
    themeID=sessionStorage.getItem('themeID');
    if(themeID==0){
        let QuerySelectorA = document.querySelectorAll('a');
        let QuerySelectorP = document.querySelectorAll('p');
        let QuerySelectorH3 = document.querySelectorAll('h3');
        let QuerySelectorH1 = document.querySelectorAll('h1');
        let QuerySelectorLi = document.querySelectorAll('li');
        document.getElementById('closeNav_btn').style.color='black'
        document.getElementById("html").style.backgroundColor='grey';
        document.getElementById("openNav_btn").style.color='white';
        document.getElementById("sideNav").style.backgroundColor='white';
        document.getElementById("html-dropdown").style.color='black';
        document.getElementById("javascript-dropdown").style.color='black';
        document.getElementById("debug-dropdown").style.color='black';
        document.getElementById('theme-switch').style.color='white';
        QuerySelectorA.forEach(()=>{
            for(let x=0;x<QuerySelectorA.length;x++){
                QuerySelectorA[x].style.color='black';
            }
        })
        QuerySelectorP.forEach(()=>{
            for(let x=0;x<QuerySelectorP.length;x++){
                QuerySelectorP[x].style.color='white';
            }
        })
        QuerySelectorH3.forEach(()=>{
            for(let x=0;x<QuerySelectorH3.length;x++){
                QuerySelectorH3[x].style.color='white';
            }
        })
        QuerySelectorH1.forEach(()=>{
            for(let x=0;x<QuerySelectorH1.length;x++){
                QuerySelectorH1[x].style.color='white';
            }
        })
        QuerySelectorLi.forEach(()=>{
            for(let x=0;x<QuerySelectorLi.length;x++){
                QuerySelectorLi[x].style.color='white';
            }
        })
    }
    else if(themeID==1){
        let QuerySelectorA = document.querySelectorAll('a');
        let QuerySelectorP = document.querySelectorAll('p');
        let QuerySelectorH3 = document.querySelectorAll('h3');
        let QuerySelectorH1 = document.querySelectorAll('h1');
        let QuerySelectorLi = document.querySelectorAll('li');
        document.getElementById('closeNav_btn').style.color='black';
        document.getElementById("html").style.backgroundColor='white';
        document.getElementById("openNav_btn").style.color='black';
        document.getElementById("sideNav").style.backgroundColor='black';
        document.getElementById("html-dropdown").style.color='white';
        document.getElementById("javascript-dropdown").style.color='white';
        document.getElementById("debug-dropdown").style.color='white';
        document.getElementById('theme-switch').style.color='black';

        QuerySelectorP.forEach(()=>{
            for(let x=0;x<QuerySelectorP.length;x++){
                QuerySelectorP[x].style.color='black';
            }
        })

        QuerySelectorA.forEach(()=>{
            for(let x=0;x<QuerySelectorA.length;x++){
                QuerySelectorA[x].style.color='white';
            }
        })

        QuerySelectorH3.forEach(()=>{
            for(let x=0;x<QuerySelectorH3.length;x++){
                QuerySelectorH3[x].style.color='black';
            }
        })

        QuerySelectorH1.forEach(()=>{
            for(let x=0;x<QuerySelectorH1.length;x++){
                QuerySelectorH1[x].style.color='black';
            }
        })

        QuerySelectorLi.forEach(()=>{
            for(let x=0;x<QuerySelectorLi.length;x++){
                QuerySelectorLi[x].style.color='black';
            }
        })

    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main-container").style.marginLeft = "0";
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

function debugDropdownArrow(){
    if(debugDropdownID==0){
        document.getElementById("debug-dropdown").innerHTML='Debug<div style="font-size:15px; display:inline"> &#x25B2;'
        debugDropdownID++
    }
    else if(debugDropdownID==1){
        document.getElementById("debug-dropdown").innerHTML='Debug<div style="font-size:15px; display:inline"> &#x25BC;'
        debugDropdownID=0;
    }
}

//0 Is closed, 1 is open
let HTMLDropdownListID = 1;
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

let JSDropdownListID = 1;
JSDropdown.addEventListener("click",()=>{
    console.log("FIRE");
    if(JSDropdownListID==0){
        console.log('CLOSE');
        document.getElementById("javascript-links-container").style.display='none';
        JSDropdownListID++
    }
    else if(JSDropdownListID==1){
        console.log('OPEN')
        document.getElementById("javascript-links-container").style.display='block';
        JSDropdownListID=0;
    }
})

let debugDropdownListID = 1;
debugDropdown.addEventListener("click",()=>{
    console.log("FIRE");
    if(debugDropdownListID==0){
        console.log('CLOSE');
        document.getElementById("debug-links-container").style.display='none';
        debugDropdownListID++
    }
    else if(debugDropdownListID==1){
        console.log('OPEN')
        document.getElementById("debug-links-container").style.display='block';
        debugDropdownListID=0;
    }
})