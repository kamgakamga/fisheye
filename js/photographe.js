import {photographeItem} from "./utils/photographeUtil.js";
import {getAllMediaByPhotographeID} from "./utils/photographeUtil.js";
import {realisationPhotographeItem} from "./utils/photographeUtil.js";
import {buildStatistiquePhotographe} from "./utils/photographeUtil.js";
import {buildFilter} from "./utils/photographeUtil.js";
import {getAllPhotographe} from "./utils/data.js";
import {getAllMedia} from "./utils/data.js";
import {getPhotographeByID} from "./utils/photographeUtil.js";
import {displayAfterLikeOrUnLike} from "./utils/photographeUtil.js";
import {displayRealisationsPhothographe} from "./utils/photographeUtil.js";
import { getPhotographeId } from "./utils/filter.js";
import { buildHeader } from "./utils/filter.js";
import { splitWord } from "./utils/filter.js";
import { like } from "./utils/like.js";
import { unLike } from "./utils/like.js";
import { getMediaById } from "./utils/media.js";
import { openModal } from "./ligthbox.js";
import { closeModal } from "./ligthbox.js";
import { plusSlides } from "./ligthbox.js";
import { openContact } from "./utils/contact.js";
import { closeContact } from "./utils/contact.js";
import { buildFormContact } from "./utils/contact.js";
import { buildLightbox } from "./ligthbox.js";

 const medias = getAllMedia();
 const photographes = getAllPhotographe();
 const photographeId = getPhotographeId(location);

const body = document.body;
const header = document.createElement("header");
header.classList.add("header");
const sectionPhotographe = document.createElement("section");
const main = document.createElement("main");
main.classList.add("container");
sectionPhotographe.classList.add("photographes");
const sectionRealisationDesPhotographes = document.createElement("section");
sectionRealisationDesPhotographes.classList.add("realisations");
const sectionFiltre = document.createElement("section");
      sectionFiltre.classList.add("filter-section")
const footer = document.createElement("footer");
footer.classList.add("footer");
const contact = document.createElement("div");
const modal = document.createElement("div");
modal.classList.add("my-modal");
modal.classList.add("modales");
contact.innerText = "Contactez-moi !";
contact.classList.add("contactez");

body.appendChild(header);
buildHeader();
header.appendChild(document.querySelector(".logo__container"));

body.appendChild(main);
main.appendChild(sectionPhotographe);
main.appendChild(sectionFiltre);
main.appendChild(sectionRealisationDesPhotographes);
main.appendChild(modal);
body.appendChild(footer);
buildFilter();
// les realisations du photographe sur le quel on vient de dblclique. 
let currentPhotographeRealisations = getAllMediaByPhotographeID(medias, photographeId);
   console.log(currentPhotographeRealisations);
   let totalLikes = 0;
   let salaryPerDay = 0;
   const photographeTab = getPhotographeByID(photographes,photographeId);
   const photographe = photographeTab["0"];
   const realisationPhotographeFolderImage = splitWord(photographe.name,0);
   photographeItem(photographe);

   buildLightbox(currentPhotographeRealisations,realisationPhotographeFolderImage);

   document.querySelector(".photographe__item").appendChild(contact);


  const tls = displayRealisationsPhothographe(currentPhotographeRealisations,totalLikes,realisationPhotographeFolderImage);
  
  
   salaryPerDay += photographe.price;
   buildStatistiquePhotographe(tls,salaryPerDay);

   let mediaId;
   let media;
   let compter = 0;
   const allReal = document.querySelectorAll('.fa-heart');
   allReal.forEach((real) => {
   real.addEventListener('click', (event) => {
      mediaId = event.target.id;
      media =  getMediaById(medias, mediaId);
//      console.log(media[0].likes +=1);
      // const l = document.querySelector(".realisations");
     // const l = document.querySelector(".fas");
      // l.innerHTML = '';

      if (compter === 0) {
            event.target.classList.add("fas");
            event.target.classList.remove("far");
            // const newTabMedia = like(media[0]);
            // currentPhotographeRealisations = getAllMediaByPhotographeID(newTabMedia, photographeId);
             totalLikes = 0; 
            compter ++; 
            // displayAfterLikeOrUnLike(currentPhotographeRealisations,totalLikes,salaryPerDay,realisationPhotographeFolderImage);
      } else {
            event.target.classList.add("far");
            event.target.classList.remove("fas");
            // const newTabMedias = unLike(media[0]); 
            // currentPhotographeRealisations = getAllMediaByPhotographeID(newTabMedias, photographeId);
            totalLikes = 0; 
            compter --;
            // displayAfterLikeOrUnLike(currentPhotographeRealisations,totalLikes,salaryPerDay,realisationPhotographeFolderImage);
      }
//      const newRealisationPhotographe = getAllMediaByPhotographeID(newTabMedia, photographeId);
     });
   });

   const allImages = document.querySelectorAll('.realisation__item__img');
   allImages.forEach((image) => {
      image.addEventListener('click', (event) => { 
            openModal();
            console.log(event.target);})});

            const closeModale = document.querySelector('.close-modal');
            closeModale.addEventListener('click',()=> {
                  console.log("close modale.");
                  closeModal();
            });
            
buildFormContact(photographe);
const openContacte = document.querySelector('.contactez');
openContacte.addEventListener('click',()=> {
      openContact();
});
const closeContacte =document.querySelector('.close-contact');
closeContacte.addEventListener('click',()=> {
      console.log("close modale.");
      closeContact();
});

let compt = 0;
const popularite = document.querySelector('.popularite');
popularite.addEventListener('click',()=> {
if (compt === 0) {
      document.querySelector(".date").style.display='block';
      document.querySelector(".titre").style.display='block'; 
      compt ++; 
} else {
      document.querySelector(".date").style.display="none";
      document.querySelector(".titre").style.display='none'; 
      const  currentPhotographeRealisationCopie = Array.from(currentPhotographeRealisations);
      currentPhotographeRealisationCopie.sort((a, b) => b.likes - a.likes );
console.log('**********************************');
      console.log(currentPhotographeRealisationCopie);
console.log('**********************************');
      const r = document.querySelector(".realisations");
      r.innerHTML ="";
      displayRealisationsPhothographe(currentPhotographeRealisationCopie,totalLikes,realisationPhotographeFolderImage);
      compt --;    
}});


let comptd = 0;
const date = document.querySelector('.date');
date.addEventListener('click',()=> {
      if (comptd === 0) {
            document.querySelector(".popularite").style.display='block';
            document.querySelector(".titre").style.display='block'; 
            comptd ++; 
      } else {
            document.querySelector(".popularite").style.display='none';
            document.querySelector(".titre").style.display='none'; 
            const  currentPhotographeRealisationCopie = Array.from(currentPhotographeRealisations);
            currentPhotographeRealisationCopie.sort((a, b) => b.date - a.date );
            const r = document.querySelector(".realisations");
            r.innerHTML ="";
            displayRealisationsPhothographe(currentPhotographeRealisationCopie,totalLikes,realisationPhotographeFolderImage);
            comptd --;    
      }});
let comptt = 0;
const titre = document.querySelector('.titre');
titre.addEventListener('click',()=> {
      console.log("title");
      if (comptt === 0) {
            document.querySelector(".popularite").style.display='block';
            document.querySelector(".date").style.display='block'; 
            comptt ++; 
      } else {
            document.querySelector(".popularite").style.display='none';
            document.querySelector(".date").style.display='none'; 
            const  currentPhotographeRealisationCopie = Array.from(currentPhotographeRealisations);
            currentPhotographeRealisationCopie.sort((a, b) => a.title - b.title );
            const r = document.querySelector(".realisations");
            r.innerHTML ="";
            displayRealisationsPhothographe(currentPhotographeRealisationCopie,totalLikes,realisationPhotographeFolderImage);
            comptt --;    
      }});

// On récupère la référence vers la vidéo et l'icône
var video = document.querySelector(".video");
var playButton = document.querySelector(".video-icon");

// On ajoute un listener sur l'icône pour détecter le clic de l'utilisateur
playButton.addEventListener("click", ()=> {
      // Si la vidéo est en pause, on la lance
      if (video.paused) {
        openModal();
        video.play();
      //   playButton.style.zIndex = "0";
      }
} );
