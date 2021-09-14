import "./style.css";

function TubaPerfil(gen, icon , src){
    
return /*html*/ `
    <div class="tuba-perfil">
        <a href="${src}" target="_blank">
        <img class="perfil-${gen}" src= "images/Gen0${gen}/${icon}.png">
        </a>
    </div>
`;

}

export default TubaPerfil;