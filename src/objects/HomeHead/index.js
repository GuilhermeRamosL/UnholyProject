import "./style.css";

function HomeHead(value = "HoloHub", source = "https://cdn.betterttv.net/emote/5f468467afb6965d6e7ca597/3x"){
    return /*html*/ `
        <div class="page-title">
            <h1 class="title-text">${value}</h1>
            <img id="icon" src= ${source}>
        </div>
    `;
}

export default HomeHead;