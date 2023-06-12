import {getAllMedia} from "./data.js";
import {getIndexOfElement} from "./data.js";
       

       
       
function getUrl() {
        return `./../assets/datas/data.json`
       }





function like(media) {
   // recuperation de l'objet du tableau a mettre à jour.
  //  const mediaToUpdate = getAllMedia().find(m => m.id === media.id);
   // recuperation de l'index de l'objet du tableau a mettre à jour.
  //  const index = getIndexOfElement(getAllMedia(), mediaToUpdate.id);
  //  if (mediaToUpdate) {
   if (true) {
        // Si l'objet existe déjà dans le tableau, mettez à jour les propriétés
        // media.likes +=1;
        // Object.assign(mediaToUpdate, media);
      //  mise à jour du media dans le tabeau
        // getAllMedia()[index] = media;

        document.querySelector(".like-icon").classList.remove("fas");
        document.querySelector(".like-icon").classList.add("far");
      } 
return getAllMedia();
      
  //  const options = {
  //                   method: 'PUT',
  //                   headers: {
  //                       'Content-Type': 'application/json'
  //                     },
  //                    body: JSON.stringify(media)
  //     };

    // fetch(getUrl,options )
    //   .then(response =>response.json())
    //   .then(data => console.log(data));
}

function unLike(media) {
    // recuperation de l'objet du tableau a mettre à jour.
   const mediaToUpdate = getAllMedia().find(m => m.id === media.id);
   // recuperation de l'index de l'objet du tableau a mettre à jour.
   const index = getIndexOfElement(getAllMedia(), mediaToUpdate.id);
   if (mediaToUpdate) {
        // Si l'objet existe déjà dans le tableau, mettez à jour les propriétés
        media.likes -=1;
        Object.assign(mediaToUpdate, media);
      //  mise à jour du media dans le tabeau
       getAllMedia()[index] = media;

        let d = document.querySelector(".fa-heart");
        // Affichage du coeur plein 
        d.classList.add("far"); 
        // désactivation du coeur vide  
        d.classList.remove("fas");
      } 
return getAllMedia();
}

/**
 * @param(*)
 */



export {like}
export {unLike}