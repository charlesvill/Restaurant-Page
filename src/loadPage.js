import banner from './images/tacosbannerfixed.jpg';
import laImage from './images/lincolnheights.jpg';
import tacoImage from './images/birria.jpg';
import siteIcon from './images/moustache.png';

function createUI(parentCont){
    const navbar = document.createElement('div'); 
    navbar.className = "navbar";
    parentCont.appendChild(navbar);
    navbar.innerHTML = 
    `
    
        <button class="tab tmenu">Menu</button>
        <button class="tab tlocations">Locations</button>
        <button class="tab tnutrition">Nutrition</button>
        <button class="tab tcontact">Contact</button>
    
    `;

    const header = document.createElement('div');
    header.className = "header";
    parentCont.appendChild(header);

    const sitenameCont = document.createElement('div');
    sitenameCont.className = 'siteNameCont';
    header.appendChild(sitenameCont);

    const name = document.createElement('h2');
    name.className = "name";
    name.textContent = "TACOS EL GUAPO";
    sitenameCont.appendChild(name);

    const icon = new Image();
    icon.src = siteIcon;
    icon.className = "siteIcon";
    sitenameCont.appendChild(icon);

    const orderbtn = document.createElement('button');
    orderbtn.className = "orderBtn";
    orderbtn.textContent = "Order now";
    header.appendChild(orderbtn);

}

function generateHome(visualcont){
    

    const bannerCont = document.createElement('div');
    bannerCont.className = "bannerCont";
    visualcont.appendChild(bannerCont);
    
    const bannerImg = new Image();
    bannerImg.className = "bannerImg"; 
    bannerImg.src = banner;
    bannerCont.appendChild(bannerImg);

    const bannertxt = document.createElement('p');
    bannertxt.className = 'bannerTxt';
    bannertxt.textContent = "Taste the Difference!";
    bannerCont.appendChild(bannertxt);

    const aboutBox = document.createElement('div');
    aboutBox.className = "featuredBox";
    visualcont.appendChild(aboutBox);

    const aboutCont = document.createElement('div');
    aboutCont.className = "aboutCont";
    aboutCont.innerHTML = `<p class= "featTitle">About us</p>
    <p class= "featText">Our goal was simple: 
    bring a piece of that 'casera' experience
    eating street tacos on the neighborhood corner of your grandmas house.
    handmade tortillas with locally sourced maiz and organic grassfed meat
    for that real 'just like home' flavor.</p>`;
    aboutBox.appendChild(aboutCont);

    const b_groundIMG = new Image();
    b_groundIMG.src = tacoImage;
    b_groundIMG.className= "tacosImg"
    aboutBox.appendChild(b_groundIMG);

    const storyBox = document.createElement('div');
    storyBox.className = "featuredBox";
    visualcont.appendChild(storyBox);

    const storyCont = document.createElement('div');
    storyCont.className = "storyCont";
    storyBox.appendChild(storyCont);
    storyCont.innerHTML = `
    <p class= "featTitle">Our Story</p>
    <p class= "featText">Our roots come from beautiful Lincoln Heights here in Los Angeles. We've locally owned and operated since 1998 and have since expanded with three food trucks in the greater L.A. area.</p>
    `
    const story_img = new Image();
    story_img.src = laImage;
    story_img.className = "storyImg";
    storyBox.appendChild(story_img);
}

function loadPage(){
    
    const parentdiv = document.querySelector(".content");
    createUI(parentdiv);

    const visualcont = document.createElement('div');
    visualcont.className = "visualContainer";
    parentdiv.appendChild(visualcont);

    generateHome(visualcont);
    
}


export { loadPage, generateHome };