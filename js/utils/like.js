import {buildStatistiquePhotographe} from "./photographeUtil.js";
       
function like(event,enfant) {
          event.target.classList.add("fas");
          event.target.classList.remove("far");
          enfant.innerText = parseInt(enfant.textContent) + 1;  
}

function disLike(event,enfant) {
          event.target.classList.add("far");
          event.target.classList.remove("fas");
          enfant.textContent = parseInt(enfant.textContent) - 1;
    }


export {like}
export {disLike}