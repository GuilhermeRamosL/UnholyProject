
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


import HomeHead from "./src/objects/HomeHead";
import TubaPerfil from "./src/components/TubaPerfil";
import HomeBody from "./src/objects/HomeBody";

const $app = document.querySelector("#app");

$app.insertAdjacentHTML(
  "beforeend",
  `
    ${HomeHead("UnHolyLive")}
    ${HomeBody()}
    
  `
);