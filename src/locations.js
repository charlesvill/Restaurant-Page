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
        <h2 class="mainTitle">Main Restuarant</h2>
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
        <h3 class="truckTitle">Food Trucks</h3>
        <div class="truck">
            <span class="truckName"></span>
            <span class="truckInfo">
                <p></p>
                <p></p>
                <p></p>
            </span>
        </div>
        <div class="truck">
            <span class="truckName"></span>
            <span class="truckInfo">
                <p></p>
                <p></p>
                <p></p>
            </span>
        </div>
        <div class="truck">
            <span class="truckName"></span>
            <span class="truckInfo">
                <p></p>
                <p></p>
                <p></p>
            </span>
        </div>
    </div>
    `
    card.appendChild(satelliteLocCard);

    

}