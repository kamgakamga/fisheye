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

 const media = getAllMedia();
 const photographes = getAllPhotographe();
 const photographeId = getPhotographeId(location);
 console.log("************************");
 console.log('ID:',photographeId);
 console.log("************************");

 console.log(media);
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
const currentPhotographeRealisations = getAllMediaByPhotographeID(media, photographeId);
   console.log(currentPhotographeRealisations);
   let totalLikes = 0;
   let salaryPerDay = 0;
   const photographeTab = getPhotographeByID(photographes,photographeId);
   const photographe = photographeTab["0"];
   console.log("************************");
   console.log(photographeTab);
   console.log("************************");
   const realisationPhotographeFolderImage = splitWord(photographe.name,0);
   photographeItem(photographe);
   document.querySelector(".photographe__item").appendChild(contact);
   for (let i = 0; i < currentPhotographeRealisations.length; i++) {
          const element = currentPhotographeRealisations[i];
          totalLikes += element.likes
          realisationPhotographeItem(element,realisationPhotographeFolderImage);
   }
  
   salaryPerDay += photographe.price;
   console.log(photographe);
   console.log(totalLikes);
   buildStatistiquePhotographe(totalLikes,salaryPerDay);
     
   console.log("=================================================");
   console.log(new URL(location.href).searchParams.get("id"));
   console.log("=================================================");