//Variables
let themeID = sessionStorage.getItem('themeID');
let HTMLDropdownID = 0; //Arrows for the dropdown name
let JSDropdownID = 0; //Arrows for the dropdown names
let debugDropdownID = 0;
var themeSwitch_btn = document.getElementById("theme-switch");
var HTMLDropdown = document.getElementById("html-dropdown");
var JSDropdown = document.getElementById("javascript-dropdown");
var debugDropdown = document.getElementById("debug-dropdown");

//Checking if the 'themeID' variable is has been created in the sessionStorage
window.addEventListener('load', () => {
    if (sessionStorage.themeID == undefined) { //Using 'undefined' because it is the default value of a variable that has not been created
        sessionStorage.setItem('themeID', 1); //If the variable has not been created, create it and set it to 1.
    }
    changeTheme();
})


//Functions
function changeThemeVal() {
    if (themeID == 0) { //If the themeID is 0, change it to 1
        sessionStorage.setItem('themeID', 1) //Set the themeID to 1
        changeTheme(); //Run the changeTheme function
    } else if (themeID == 1) { //If the themeID is 1, change it to 0
        sessionStorage.setItem('themeID', 0) //Set the themeID to 0
        changeTheme(); //Run the changeTheme function
    }
}

function changeTheme() {
    themeID = sessionStorage.getItem('themeID'); //Get the themeID from the sessionStorage
    if (themeID == 0) { //If the themeID is 0, change the theme to light
        let QuerySelectorA = document.querySelectorAll('a'); //Get all the 'a' elements
        let QuerySelectorP = document.querySelectorAll('p'); //Get all the 'p' elements
        let QuerySelectorH3 = document.querySelectorAll('h3'); //Get all the 'h3' elements
        let QuerySelectorH1 = document.querySelectorAll('h1'); //Get all the 'h1' elements
        let QuerySelectorLi = document.querySelectorAll('li'); //Get all the 'li' elements
        document.getElementById('closeNav_btn').style.color = 'black' //Change the color of the closeNav button
        document.getElementById("html").style.backgroundColor = 'grey'; //Change the background color of the html element
        document.getElementById("openNav_btn").style.color = 'white'; //Change the color of the openNav button
        document.getElementById("sideNav").style.backgroundColor = 'white'; //Change the background color of the sideNav element
        document.getElementById("html-dropdown").style.color = 'black'; //Change the color of the html dropdown
        document.getElementById("javascript-dropdown").style.color = 'black'; //Change the color of the javascript dropdown
        document.getElementById("debug-dropdown").style.color = 'black'; //Change the color of the debug dropdown
        document.getElementById('theme-switch').style.color = 'white'; //Change the color of the theme switch button
        QuerySelectorA.forEach(() => { //Loop through all the 'a' elements
            for (let x = 0; x < QuerySelectorA.length; x++) {
                QuerySelectorA[x].style.color = 'black'; //Change the color of the 'a' elements
            }
        })
        QuerySelectorP.forEach(() => { //Loop through all the 'p' elements
            for (let x = 0; x < QuerySelectorP.length; x++) {
                QuerySelectorP[x].style.color = 'white'; //Change the color of the 'p' elements
            }
        })
        QuerySelectorH3.forEach(() => { //Loop through all the 'h3' elements
            for (let x = 0; x < QuerySelectorH3.length; x++) {
                QuerySelectorH3[x].style.color = 'white'; //Change the color of the 'h3' elements
            }
        })
        QuerySelectorH1.forEach(() => { //Loop through all the 'h1' elements
            for (let x = 0; x < QuerySelectorH1.length; x++) {
                QuerySelectorH1[x].style.color = 'white'; //Change the color of the 'h1' elements
            }
        })
        QuerySelectorLi.forEach(() => { //Loop through all the 'li' elements
            for (let x = 0; x < QuerySelectorLi.length; x++) {
                QuerySelectorLi[x].style.color = 'white'; //Change the color of the 'li' elements
            }
        })
    } else if (themeID == 1) {
        let QuerySelectorA = document.querySelectorAll('a'); //Get all the 'a' elements
        let QuerySelectorP = document.querySelectorAll('p'); //Get all the 'p' elements
        let QuerySelectorH3 = document.querySelectorAll('h3'); //Get all the 'h3' elements
        let QuerySelectorH1 = document.querySelectorAll('h1'); //Get all the 'h1' elements
        let QuerySelectorLi = document.querySelectorAll('li'); //Get all the 'li' elements
        document.getElementById('closeNav_btn').style.color = 'black'; //Change the color of the closeNav button
        document.getElementById("html").style.backgroundColor = 'white'; //Change the background color of the html element
        document.getElementById("openNav_btn").style.color = 'black'; //Change the color of the openNav button
        document.getElementById("sideNav").style.backgroundColor = 'black'; //Change the background color of the sideNav element
        document.getElementById("html-dropdown").style.color = 'white'; //Change the color of the html dropdown
        document.getElementById("javascript-dropdown").style.color = 'white'; //Change the color of the javascript dropdown
        document.getElementById("debug-dropdown").style.color = 'white'; //Change the color of the debug dropdown
        document.getElementById('theme-switch').style.color = 'black'; //Change the color of the theme switch button

        QuerySelectorP.forEach(() => { //Loop through all the 'p' elements
            for (let x = 0; x < QuerySelectorP.length; x++) {
                QuerySelectorP[x].style.color = 'black'; //Change the color of the 'p' elements
            }
        })

        QuerySelectorA.forEach(() => { //Loop through all the 'a' elements
            for (let x = 0; x < QuerySelectorA.length; x++) {
                QuerySelectorA[x].style.color = 'white'; //Change the color of the 'a' elements
            }
        })

        QuerySelectorH3.forEach(() => { //Loop through all the 'h3' elements
            for (let x = 0; x < QuerySelectorH3.length; x++) {
                QuerySelectorH3[x].style.color = 'black'; //Change the color of the 'h3' elements
            }
        })

        QuerySelectorH1.forEach(() => { //Loop through all the 'h1' elements
            for (let x = 0; x < QuerySelectorH1.length; x++) {
                QuerySelectorH1[x].style.color = 'black'; //Change the color of the 'h1' elements
            }
        })

        QuerySelectorLi.forEach(() => { //Loop through all the 'li' elements
            for (let x = 0; x < QuerySelectorLi.length; x++) {
                QuerySelectorLi[x].style.color = 'black'; //Change the color of the 'li' elements
            }
        })

    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("sideNav").style.width = "250px"; //Change the width of the sideNav element
    document.getElementById("main-container").style.marginLeft = "250px"; //Change the margin of the main-container element
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("sideNav").style.width = "0"; //Change the width of the sideNav element
    document.getElementById("main-container").style.marginLeft = "0"; //Change the margin of the main-container element
}


function HTMLDropdownArrow() {
    if (HTMLDropdownID == 0) { //If the HTMLDropdownID is 0
        document.getElementById("html-dropdown").innerHTML = 'Html<div style="font-size:15px; display:inline"> &#x25B2;' //Change the html dropdown text
        HTMLDropdownID++ //Add 1 to the HTMLDropdownID
    } else if (HTMLDropdownID == 1) {
        document.getElementById("html-dropdown").innerHTML = 'Html<div style="font-size:15px; display:inline"> &#x25BC;' //Change the html dropdown text
        HTMLDropdownID = 0; //Set the HTMLDropdownID to 0
    }
}

function JSDropdownArrow() {
    if (JSDropdownID == 0) {
        document.getElementById("javascript-dropdown").innerHTML = 'JavaScript<div style="font-size:15px; display:inline"> &#x25B2;' //Change the javascript dropdown text
        JSDropdownID++ //Add 1 to the JSDropdownID
    } else if (JSDropdownID == 1) {
        document.getElementById("javascript-dropdown").innerHTML = 'JavaScript<div style="font-size:15px; display:inline"> &#x25BC;' //Change the javascript dropdown text
        JSDropdownID = 0; //Set the JSDropdownID to 0
    }
}

function debugDropdownArrow() {
    if (debugDropdownID == 0) {
        document.getElementById("debug-dropdown").innerHTML = 'Debug<div style="font-size:15px; display:inline"> &#x25B2;' //Change the debug dropdown text
        debugDropdownID++ //Add 1 to the debugDropdownID
    } else if (debugDropdownID == 1) {
        document.getElementById("debug-dropdown").innerHTML = 'Debug<div style="font-size:15px; display:inline"> &#x25BC;' //Change the debug dropdown text
        debugDropdownID = 0; //Set the debugDropdownID to 0
    }
}

//0 Is closed, 1 is open
let HTMLDropdownListID = 1; //Set the HTMLDropdownListID to 1
HTMLDropdown.addEventListener("click", () => {
    console.log("FIRE");
    if (HTMLDropdownListID == 0) {
        document.getElementById("html-links-container").style.display = 'none'; //Hide the html links container
        HTMLDropdownListID++
    } else if (HTMLDropdownListID == 1) {
        document.getElementById("html-links-container").style.display = 'block'; //Show the html links container
        HTMLDropdownListID = 0;
    }
})

let JSDropdownListID = 1;
JSDropdown.addEventListener("click", () => {
    console.log("FIRE");
    if (JSDropdownListID == 0) {
        console.log('CLOSE');
        document.getElementById("javascript-links-container").style.display = 'none'; //Hide the javascript links container
        JSDropdownListID++
    } else if (JSDropdownListID == 1) {
        console.log('OPEN')
        document.getElementById("javascript-links-container").style.display = 'block'; //Show the javascript links container
        JSDropdownListID = 0;
    }
})

let debugDropdownListID = 1;
debugDropdown.addEventListener("click", () => {
    console.log("FIRE");
    if (debugDropdownListID == 0) {
        console.log('CLOSE');
        document.getElementById("debug-links-container").style.display = 'none'; //Hide the debug links container
        debugDropdownListID++
    } else if (debugDropdownListID == 1) {
        console.log('OPEN')
        document.getElementById("debug-links-container").style.display = 'block'; //Show the debug links container
        debugDropdownListID = 0;
    }
})