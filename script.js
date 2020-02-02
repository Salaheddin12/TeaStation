//retrieving the navbar
let getNavBar = document.querySelector('#nav-bar1');

//on click event for the nav-btn1 button
//to show the nav bar when clicking the button
let ShowNavBar = function () {
    getNavBar.style.visibility = "visible";
}
// on click event for close-btn
//to hide the navbar when clicking the close button
let HideNavBar = function () {
    getNavBar.style.visibility = "hidden";
}