import { loadPage } from "./loadPage.js";
import { generateHome } from "./loadPage.js";
import loadMenu from "./menu.js";
import createLocations from "./locations.js";
import createNutrition from "./nutrition.js";
import createContact from "./contact.js";
import './style.css';


loadPage();
const homeContainer = document.querySelector(".visualContainer");
const contentContainer = document.querySelector(".content");

const homeBtn = document.querySelector('.siteNameCont');
homeBtn.addEventListener("click",()=>{
    homeContainer.innerHTML = ``;
    homeContainer.classList.remove(homeContainer.classList[1]);
    
    generateHome(homeContainer);
})


const buttons = document.querySelectorAll(".tab");
buttons.forEach(btn => btn.addEventListener("click", (event)=>{
    const tab = event.target.classList[1];
    homeContainer.innerHTML = ``;
    homeContainer.classList.remove(homeContainer.classList[1]);

    switch(tab)
    {
        case "tmenu" : 
        homeContainer.classList.add("menu");
        loadMenu();
        break;
        case "tlocations" : 
        homeContainer.classList.add("locations");
        createLocations();
        break;
        case "tnutrition" : 
        //trigger the module for nutrition tab
        homeContainer.classList.add("nutrition");
        createNutrition();
        break;
        case "tcontact" : 
        //trigger the module for contact form
        homeContainer.classList.add("contact");
        createContact();
        break;
        default: console.log("something went wrong with the tab selector");
    }
}));

//get reference to the tabs and add event listeners for each one
//ev list funct to clear the page and trigger the respective script
//use classnames to passthrough e info to trigger correct script
