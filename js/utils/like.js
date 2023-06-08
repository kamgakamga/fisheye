import {getAllMedia} from "./data.js";
       

       
       
function getUrl() {
        return `./../assets/datas/data.json`
       }





function like(media) {
 

   const mediaToUpdate = getAllMedia().find(m => m.id === media.id);
   console.log("...................");
   console.log(mediaToUpdate);
   console.log("...................");

   if (mediaToUpdate) {
        // Si l'objet existe déjà dans le tableau, mettez à jour les propriétés
        media.likes +=1;
        let d =document.querySelector(".fa-heart"); 
        d.classList.add("fas");   
        d.classList.remove("far");
        Object.assign(mediaToUpdate, media);
      } 
      
   const options = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                     body: JSON.stringify(media)
      };

    fetch(getUrl,options )
      .then(response =>response.json())
      .then(data => console.log(data));
}

function unLike(params) {
    let d =document.querySelector(".fa-heart"); 
    d.classList.add("far");     
    d.classList.remove("fas");     
}

/**
 * @param(*)
 */



export {like}
export {unLike}