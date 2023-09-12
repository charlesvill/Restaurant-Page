import alpastor from './images/alpastor.jpg';
import migas from './images/migas.jpg';
import mexsalad from './images/mexsalad.jpg';
import bunuelos from './images/bunuelos.jpg';

function createMenuItem(name, description, price, parentCont){
    const menuItem = document.createElement('div');
    menuItem.className = `item ${name}`;
    menuItem.innerHTML = `
    <h4>${name}</h4>
    <p>
    ${description}<span> - $${price}</span>
    </p>
    `
    parentCont.appendChild(menuItem);
    return menuItem;
}

function populateL(parentCont){

    const header = document.createElement('h2');
    header.textContent = 'Tacos';
    header.className = 'mtitle';
    parentCont.appendChild(header);

    const pastorIMG = new Image();
    pastorIMG.src = alpastor;
    pastorIMG.className = 'mImg pastor';
    parentCont.appendChild(pastorIMG);

    const pastorTaco = createMenuItem("Al Pastor", "Our famous slow braised humanely raised pork on spit roast and fresh pineapple.", 2.50, parentCont);
    parentCont.appendChild(pastorTaco);

    const qbirriaTaco = createMenuItem("Quesabirria", "handmade tortilla with casero recipe and red salsa with manchego cheese grilled on our parrilla", 4.50, parentCont);
    parentCont.appendChild(qbirriaTaco);

    const gringa = createMenuItem("Gringa", "Flour tortilla with mozarella cheese seared on the grill with the choice of birria, Al pastor, asada, or grilled chicken", 4.50, parentCont);
    parentCont.appendChild(gringa);

    const asadataco = createMenuItem("Asada Taco", "100% grassfed beef shank grilled to perfection with avocado salsa", 2.50, parentCont);
    parentCont.appendChild(asadataco);

    const migataco = createMenuItem("Miga Taco", "Our Tex-Mex breakfast favorite taco with a handmade corn tortilla with egg, onion, hatch peppers, jack cheese cotija cheese and tomatoes", 2.50, parentCont);
    parentCont.appendChild(migataco);

    const suaderotaco = createMenuItem("Suadero Taco", "A Mexico-City staple, this slow cooked thin brisket is succulent and rich pairs with the habanero salsa, onions and cilantro", 2.50, parentCont);
    parentCont.appendChild(suaderotaco);

    const migasIMG = new Image(); 
    migasIMG.src = migas;
    migasIMG.className = 'mImg migas';
    parentCont.appendChild(migasIMG);

}

function populateR(parentCont){
    const header = document.createElement('h2');
    header.textContent = 'Salads';
    header.className = 'mtitle';
    parentCont.appendChild(header);

    const nopalesalad = createMenuItem("Nopale Salad", "Romaine lettuce napa cabbage, cilantro, red onion, tomatoes and tender steamed catcus with balsamic sauce and cotija cheese", 9.50, parentCont);
    parentCont.appendChild(nopalesalad);

    const campechesalad = createMenuItem("Campeche Salad", "Iceberge lettuce, corn, tortilla chips, shredded cheese, cotija cheese, and avocado cilantro dressing", 9.50, parentCont);
    parentCont.appendChild(campechesalad);

    const springsalad = createMenuItem("Spring Salad", "Garbanzo beans, spring lettuce mix, arugula, spinach, cherry tomatoes, cilantro", 9.50, parentCont);
    parentCont.appendChild(springsalad);

    const saladIMG = new Image();
    saladIMG.className= 'mImg salad';
    saladIMG.src = mexsalad;
    parentCont.appendChild(saladIMG);

    const desHeader = document.createElement('h2');
    desHeader.textContent = "Desserts";
    desHeader.className = "mtitle";
    parentCont.appendChild(desHeader);

    const flan = createMenuItem("Flan", "Rich decadent homemade flan. Need we say more?", 5.00, parentCont);
    parentCont.appendChild(flan);

    const bunIMG = new Image();
    bunIMG.src = bunuelos;
    bunIMG.className = 'mImg bunuelos';
    parentCont.appendChild(bunIMG);

    const bunueloMenu = createMenuItem("Bunuelos", "Crispy and sweet, buttermilk batter fried and coated in cinnamon and sugar", 3.50, parentCont);
    parentCont.appendChild(bunueloMenu);

    const mexicantiramisu = createMenuItem("Mexican Tiramisu", "Fluffy and delicant twist on the classic tiramisu dessert with sprinkled cinnamon and brown sugar", 4.50, parentCont);
    parentCont.appendChild(mexicantiramisu);

}



function loadMenu(){
    //start instantiating the 
    const contentCont = document.querySelector(".visualContainer");
    
    const rightside = document.createElement('div');
    rightside.className = 'right';
    contentCont.appendChild(rightside);

    const leftside = document.createElement('div');
    leftside.className = 'left';
    contentCont.appendChild(leftside);

    populateR(rightside);

    populateL(leftside); 


}

export default loadMenu;