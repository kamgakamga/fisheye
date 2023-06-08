import {photographeItem} from "./utils/photographeUtil.js";
import {getAllMediaByPhotographeID} from "./utils/photographeUtil.js";
import {realisationPhotographeItem} from "./utils/photographeUtil.js";
import {buildStatistiquePhotographe} from "./utils/photographeUtil.js";
import {buildFilter} from "./utils/photographeUtil.js";
import {getAllPhotographe} from "./utils/data.js";
import {getAllMedia} from "./utils/data.js";
import {getPhotographeByID} from "./utils/photographeUtil.js";
import { getPhotographeId } from "./utils/filter.js";
import { buildHeader } from "./utils/filter.js";
import { splitWord } from "./utils/filter.js";
import { like } from "./utils/like.js";
import { unLike } from "./utils/like.js";
import { getMediaById } from "./utils/media.js";

 const medias = getAllMedia();
 const photographes = getAllPhotographe();
 const photographeId = getPhotographeId(location);
 console.log("************************");
 console.log('ID:',photographeId);
 console.log("************************");

 console.log(medias);
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
contact.innerText = "Contactez-moi !";
contact.classList.add("contactez");

body.appendChild(header);
buildHeader();
header.appendChild(document.querySelector(".logo__container"));

body.appendChild(main);
main.appendChild(sectionPhotographe);
main.appendChild(sectionFiltre);
main.appendChild(sectionRealisationDesPhotographes);
body.appendChild(footer);
buildFilter();
// les realisations du photographe sur le quel on vient de dblclique. 
const currentPhotographeRealisations = getAllMediaByPhotographeID(medias, photographeId);
   console.log(currentPhotographeRealisations);
   let totalLikes = 0;
   let salaryPerDay = 0;
   const photographeTab = getPhotographeByID(photographes,photographeId);
   const photographe = photographeTab["0"];
   const realisationPhotographeFolderImage = splitWord(photographe.name,0);
   photographeItem(photographe);

   document.querySelector(".photographe__item").appendChild(contact);
   for (let i = 0; i < currentPhotographeRealisations.length; i++) {
          const element = currentPhotographeRealisations[i];
          totalLikes += element.likes
          realisationPhotographeItem(element,realisationPhotographeFolderImage);
   }
  
   salaryPerDay += photographe.price;
   buildStatistiquePhotographe(totalLikes,salaryPerDay);

   const mediaId = 8520927;
 const media =  getMediaById(medias, mediaId);
 
//   like(media[0]);

const t = await fetch("http://127.0.0.1:3000/assets/datas/donnee.json");
const n = await t.json();
console.log(n);
n.nom = "raoul";

const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(n)
};
fetch("http://127.0.0.1:3000/assets/datas/donnee.json",options)
.then(res => res.json())
.then(data => console.log(data));