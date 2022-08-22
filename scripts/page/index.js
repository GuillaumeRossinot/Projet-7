import { DisplayData } from "../utils/displayData.js"
import { recipes } from "../data/recipes.js"

const recettes = recipes;

function displayRecette(recettes) {
    const cartesRecettes = document.querySelector(".cards");
    cartesRecettes.innerHTML = "";

    recettes.forEach(recette => {
        const creaData = new DisplayData(recette);
        const creaCard = creaData.RecipesList();
        cartesRecettes.appendChild(creaCard);
    });

}

function init() {
    displayRecette(recettes);
    //console.log(displayRecette(recettes));
}

init();