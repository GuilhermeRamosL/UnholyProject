import GenSelection from "../../components/GenSelect";
import TubaPerfil from "../../components/TubaPerfil";
import VtSelection from "../../components/VtSelection";
import "./style.css";

function HomeBody(){
    return /*html*/ `
        <div class="body-container">
            ${GenSelection()}
            ${VtSelection()}
        </div>
    `;
}
export default HomeBody;