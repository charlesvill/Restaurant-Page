import { loadPage } from "./loadPage.js";
// import { generateHome } from "./loadPage.js"; this is a little borked at the moment
import loadMenu from "./menu.js";
import './style.css';


loadPage();
const homeContainer = document.querySelector(".visualContainer");
// const contentContainer = document.querySelector(".content"); this is broken atm

const homeBtn = document.querySelector('.siteNameCont');
homeBtn.addEventListener("click",()=>{
    // homeContainer.innerHTML = ``;
    // generateHome(contentContainer);this is a little broken at the moment
    location.reload();
})


const buttons = document.querySelectorAll(".tab");
buttons.forEach(btn => btn.addEventListener("click", (event)=>{
    const tab = event.target.classList[1];
    homeContainer.innerHTML = ``;
    switch(tab)
    {
        case "tmenu" : 
        //trigger the module for menu
        loadMenu();
        break;
        case "locations" : 
        //trigger the module for location tab
        break;
        case "nutrition" : 
        //trigger the module for nutrition tab
        break;
        case "contact" : 
        //trigger the module for contact form
        break;
        default: console.log("something went wrong with the tab selector");
    }
}));

//get reference to the tabs and add event listeners for each one
//ev list funct to clear the page and trigger the respective script
//use classnames to passthrough e info to trigger correct script
