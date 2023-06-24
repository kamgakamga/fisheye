import {photographeItem} from "./utils/photographeUtil.js";
import {displayPhotographes} from "./utils/photographeUtil.js";
import {getAllPhotographe} from "./utils/data.js";
import {getAllMedia} from "./utils/data.js";
import {addDieseToTag} from "./utils/filter.js";
import {moveDieseToTag} from "./utils/filter.js";
import {moveDieseToTags} from "./utils/filter.js";
import {getAllTagsFilter} from "./utils/filter.js";
import {collecteAllTags} from "./utils/filter.js";
import {findPhotographesByTags} from "./utils/filter.js";
import {deleteElementToArray} from "./utils/filter.js";
import {buidMenuFilter} from "./utils/filter.js";
import {buildArrayToSearch} from "./utils/filter.js";
import {f} from "./utils/filter.js";

//recuperation des donnees depuis le fichier json

const photographes = getAllPhotographe();

let aTags = collecteAllTags(photographes);
let afTags = getAllTagsFilter(aTags);

// Construction de la structure de base de ma page index.
const body = document.body;
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

// Ajout des elements a la struture base 
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer)

// Construction de l'entete de la page index 
const headerLogo = document.createElement("div");
headerLogo.classList.add("header__logo");
headerLogo.setAttribute('tabIndex','0');
headerLogo.setAttribute('aria-label','logo du site fisheye');
const headerImg = document.createElement("img");
headerImg.classList.add("header__logo__img");
const headerMenu = document.createElement("nav");
headerMenu.classList.add("header__menu");
const headerPhotographe = document.createElement("div");

headerImg.src="./assets/img/logo/fisheye.png";
headerImg.alt="logo du site web fisheye";
headerImg.setAttribute('tabIndex','0');
headerMenu.appendChild(buidMenuFilter(afTags));
headerPhotographe.innerText = "Nos photographes";
headerPhotographe.setAttribute('tabIndex','11');
headerPhotographe.classList.add("header__photographe");

// Ajout des elements de l'entete a la balise header
headerLogo.appendChild(headerImg);
header.appendChild(headerLogo);         
header.appendChild(headerMenu);
header.appendChild(headerPhotographe);

//Ajout du style a l'entete de la page index
header.classList.add("header");

// Construction du corps de la page index
const sectionPhotographe = document.createElement("section");
sectionPhotographe.classList.add("photographes");
main.appendChild(sectionPhotographe);

//affichage du profile des photgraphes
displayPhotographes(photographes);



        let elements = document.querySelectorAll('.header__menu__filter__item'); 
        console.log("--------------");
        console.log(elements);
        console.log("--------------");
        let element;
        
        for (let i = 0; i < elements.length; i++) {
              let element = elements[i];      
        }    
        let tableau =[];
        let t =[];
        const filtres = document.querySelectorAll('.header__menu__filter__item');
        filtres.forEach((filtre) => {
        let cptClick = 0;
        filtre.addEventListener('click', (event) => {
                if (cptClick === 1 && tableau.length > 0) {
                        if (tableau.includes(event.target.textContent)) {
                                const index = tableau.indexOf(event.target.textContent);
                                console.log(index);
                                tableau.splice(index,1);
                                event.target.classList.remove("photographe__click");
                                console.log(tableau);
                                cptClick --;  
                        }else {
                                 tableau.push(event.target.textContent); 
                                 console.log(tableau);
                                 event.target.classList.add("photographe__click");
                                 cptClick ++;
                          }
                }else{
                        tableau.push(event.target.textContent); 
                        console.log(tableau);
                        event.target.classList.add("photographe__click");
                        cptClick ++;
                }
                 let tags =  moveDieseToTags(tableau);
                 const resultat =  findPhotographesByTags(photographes,tags);
                 document.querySelector(".photographes").innerHTML="";
                 displayPhotographes(resultat);
          });
        });


        const ordrePages = document.querySelectorAll('.photographe__item');
        ordrePages.forEach((page) => {
                page.addEventListener('click', (event) => {
                        // document.querySelector(".photographes").innerHTML="";
                      });
                });