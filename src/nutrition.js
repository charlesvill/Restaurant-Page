
export default function createNutrition(){

    const visualContainer = document.querySelector(".visualContainer");

    const card = document.createElement('div');
    card.className = "card";
    visualContainer.appendChild(card);

    const heading = document.createElement('h2');
    heading.textContent = "Nutrition Facts";
    card.appendChild(heading);

    const nutritionTable = document.createElement('div');
    nutritionTable.className = "tableCont";
    nutritionTable.innerHTML = 
    `
    <table>
        <caption>cal represented per taco</caption>
        <colgroup>
            <col>
            <col>
            <col style="border-style: solid; border-color: black; border-width: 2px;">
        </colgroup>
        <thead>
            <tr>
                <td colspan="2">&nbsp;</td>
                <th scope="col">calories</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="6">Tacos</th>
                <td>Quesabirria</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Al Pastor</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Asada</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Suadero</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Migas</td>
                <td>95</td>
            </tr>
            <tr>
                <td>Gringa</td>
                <td>100-120</td>
            </tr>
            <tr>
                <th rowspan="3">Salads</th>
                <td>Nopale</td>
                <td>200</td>
            </tr>
            <tr>
                <td>Campeche</td>
                <td>300</td>
            </tr>
            <tr>
                <td>Spring</td>
                <td>180</td>
            </tr>
            <tr>
                <th rowspan="3">Desserts</th>
                <td>Flan</td>
                <td>200</td>
            </tr>
            <tr>
                <td>Bunuelos</td>
                <td>180</td>
            </tr>
            <tr>
                <td>Mexian Tiramisu</td>
                <td>200</td>
            </tr>
        </tbody>
    </table>
    `;
    card.appendChild(nutritionTable);

}

