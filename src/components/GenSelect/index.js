import CardGenSelection from "../CardSelect";
import "./style.css";

function GenSelection(){
    return /*html*/ `
        <div class="gen-selection-container">
            ${CardGenSelection("gen0-card","sora-fukireta" , "Gen 0")}
            ${CardGenSelection("gen1-card","fubuki-fukireta" , "Gen 1")}
            ${CardGenSelection("gen2-card","aqua-fukireta" , "Gen 2")}
            ${CardGenSelection("gamers-card","korone-smash" , "GAMERS")}
            ${CardGenSelection("gen3-card","pekora-fukireta" , "Gen 3")}
            ${CardGenSelection("gen4-card","coco-fukireta" , "Gen 4")}
            ${CardGenSelection("gen5-card","botan-fukireta" , "Gen 5")}
        </div>
    `;

}

export default GenSelection;