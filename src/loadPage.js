import laImage from './images/lincolnheights.jpg';
import tacoImage from './images/birria.jpg';
import siteIcon from './images/taco.png';

function loadPage(){
    const parentdiv = document.querySelector("#content");

    const navbar = document.createElement('div'); 
    navbar.className = "navbar";
    parentdiv.appendChild(navbar);
    navbar.innerHTML = `
    <button>Menu</button>
    <button>Locations</button>
    <button>Nutrition</button>
    <button>Giftcards</button>`;

    const header = document.createElement('div');
    header.className = "header";
    parentdiv.appendChild(header);

    const name = document.createElement('h2');
    name.className = "name";
    name.textContent = "TACOS EL GUAPO";
    header.appendChild(name);

    const icon = new Image();
    icon.src = siteIcon;
    icon.className = "siteIcon";
    header.appendChild(icon);

    const orderbtn = document.createElement('button');
    orderbtn.className = "orderBtn";
    orderbtn.textContent = "Order now";
    header.appendChild(orderbtn);

    


    const visualcont = document.createElement('div');
    visualcont.className = "visualContainer";
    parentdiv.appendChild(visualcont);

    visualcont.innerHTML = 
    `<p class="text">The best tacos in town!</p>`;

    const aboutCont = document.createElement('div');
    aboutCont.className = "aboutCont";
    aboutCont.innerHTML = `<p>About us</p>
    <p>Our goal was simple: bring a piece of that 'casera' experience
    eating street tacos on the neighborhood corner of your grandmas house.
    handmade tortillas with locally sourced maiz and organic grassfed meat
    for that real 'just like home' experience.</p>`

    const b_groundIMG = new Image();
    b_groundIMG.src = tacoImage;
    b_groundIMG.className= "tacosImage"
    visualcont.appendChild(b_groundIMG);

    const storyCont = document.createElement('div');
    storyCont.className = "storyCont";
    visualcont.appendChild(storyCont);
    storyCont.innerHTML = `
    <p>Our Story</p>
    <p>Our roots come from beautiful Lincoln Heights here in Los Angeles. We've locally owned and operated since 1998 and have since expanded with three food trucks in the greater L.A. area.</p>
    `

    const story_img = new Image();
    story_img.src = laImage;
    story_img.className = "storyImg";
    visualcont.appendChild(story_img);
}


export default loadPage;