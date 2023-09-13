import mainLocIMG from './images/mainlocation.png';

export default function createLocations(){

    const visualcont = document.querySelector(".visualContainer");

    const card = document.createElement('div');
    card.className = "card";
    visualcont.appendChild(card);

    const heading = document.createElement('h2');
    heading.textContent = "Locations";
    card.appendChild(heading);

    const mainLocCard = document.createElement('div');
    mainLocCard.className = "mainLocCont";
    mainLocCard.innerHTML = 
    `
    <div class="mainlocCont">
        <h4 class="mainTitle">Main Restuarant</h4>
        <div class="mainCard">
            <p class="address one">1345 Washington Blvd</p>
            <p class="address two">Los Angeles, CA 90021</p>
            <p class="phone">(323) 223-2233</p>
        </div>
    </div>
    `;
    card.appendChild(mainLocCard);
    //import image from google for the 

    const mainIMG = new Image();
    mainIMG.src = mainLocIMG;
    mainIMG.className = "mainLocIMG";
    card.appendChild(mainIMG);

    const satelliteLocCard = document.createElement('div');
    satelliteLocCard.className = "satlocCont";
    satelliteLocCard.innerHTML = 
    `
    <div class="satlocCont">
        <h4 class="truckTitle">Food Trucks</h4>
        <div class="truck">
            <span class="truckName">Alhambra</span>
            <span class="truckInfo">
                <p>134 Lincoln Way</p>
                <p>Los Angeles, CA 90345</p>
                <p>(213) 354-5666</p>
            </span>
        </div>
        <div class="truck">
            <span class="truckName">Culver City</span>
            <span class="truckInfo">
                <p>3456 La Quinta Dr.</p>
                <p>Los Angeles, CA 90054</p>
                <p>(310) 123-9876</p>
            </span>
        </div>
        <div class="truck">
            <span class="truckName">Los Feliz</span>
            <span class="truckInfo">
                <p>5934 Griffith ln.</p>
                <p>Los Angeles, CA 90031</p>
                <p>(213) 980-0084</p>
            </span>
        </div>
    </div>
    `
    card.appendChild(satelliteLocCard);

    

}