import "./style.css";
import TubaPerfil from "../TubaPerfil";

function VtSelection() {
    return /*html*/ `
        <div class="vt-gen0">
            ${TubaPerfil("0", "Miko", "https://www.youtube.com/watch?v=lySpINL7NTU")}
            ${TubaPerfil("0", "Sora", "https://www.youtube.com/watch?v=cVrS4JjDtmQ")}
            ${TubaPerfil("0", "Azki", "https://www.youtube.com/watch?v=lySpINL7NTU")}
            ${TubaPerfil("0", "Roboco", "https://www.youtube.com/watch?v=lySpINL7NTU")}
            ${TubaPerfil("0", "Suisei", "https://www.instagram.com/p/CTe8TAdB9sQ/")}
        </div>

        <div class="vt-gen1">
            ${TubaPerfil("1", "Mel", "https://youtu.be/cJ4Qdp-LVdA")}
            ${TubaPerfil("1", "Fubuki", "https://www.instagram.com/p/CTTGxkGBoG3/")}
            ${TubaPerfil("1", "Matsuri", "")}
            ${TubaPerfil("1", "Haato", "")}
            ${TubaPerfil("1", "Aki", "")}
        </div>

        <div class="vt-gen2">
        
        </div>

        <div class="vt-gamer">
        
        </div>

        <div class="vt-gen3">
        
        </div>

        <div class="vt-gen4">
        
        </div>

        <div class="vt-gen5">
        
        </div>

    `
}

export default VtSelection;