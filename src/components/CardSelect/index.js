import "./style.css";
import TubaPerfil from "../TubaPerfil";
function CardGenSelection(id, source, text){
    
   // window.CardGenSelection = {};
    //window.CardGenSelection.handleClick = (event)=>{
      //  const $origin = event.target;
        //const selectedCard = $origin.closest('.card');

        //selectedCard.classList.toggle('-hidden');
        
    //}

    

    return /*html*/ `

        <div class="cards-display" style="display: block;">
            <img id= ${id} class="card" src="images/${source}.gif" >

            <p class="gen-name-display">${text}</p>
            
        </div>
        
    `;
}

export default CardGenSelection;