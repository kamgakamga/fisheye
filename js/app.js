import {photographeItem} from "./utils/photographeUtil.js";
import {getAllPhotographe} from "./utils/data.js";
import {getAllMedia} from "./utils/data.js";
import {addDieseToTag} from "./utils/filter.js";
import {moveDieseToTag} from "./utils/filter.js";
import {moveDieseToTags} from "./utils/filter.js";
import {getAllTagsFilter} from "./utils/filter.js";
import {collecteAllTags} from "./utils/filter.js";
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
const headerImg = document.createElement("img");
headerImg.classList.add("header__logo__img");
const headerMenu = document.createElement("nav");
headerMenu.classList.add("header__menu");
const headerPhotographe = document.createElement("div");

headerImg.src="./assets/img/logo/fisheye.png";
headerImg.alt="Logo de fisheye";
headerMenu.appendChild(buidMenuFilter(afTags));
headerPhotographe.innerText = "Nos photographes";
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





for (let i = 0; i < photographes.length; i++) {
        let photographe = photographes[i];
        photographeItem(photographe.name,photographe.tagline,photographe.price,photographe.portrait,photographe.tags);

}

        // const photographeArticle = document.createElement("article");
        // photographeArticle.classList.add("photographe");
        // const photographeImgContainer = document.createElement("div");
        // photographeImgContainer.classList.add("photographe__container");
        // const photographeImg = document.createElement("img");
        // photographeImg.classList.add("photographe__container__img");
        // photographeImg.src = `./assets/img/PhotographersIDPhotos/${photographes[i].portrait}`;
        // photographeImg.alt= `portrait du photographe ${photographes[i].name}`;
        // const photographeDatailContainer = document.createElement("div");
        // const photographeName = document.createElement("h2");
        // photographeName.innerText= `${photographes[i].name}`;
        // const photographeCountry = document.createElement("p");
        // photographeCountry.innerText=`${photographes[i].city}, ${photographes[i].country}`;
        // const photographeDescription = document.createElement("p");
        // photographeDescription.innerText =`${photographes[i].tagline}`
        // const photographeSalary = document.createElement("p");
        // photographeSalary.innerHTML =`${photographes[i].price} <strong>€</strong>/jour`;
        // const photographeTags = document.createElement("ul");
        // photographeTags.classList.add("tags__container");
        // const tags = addDieseToTag(photographes[i].tags);
        // for (let i = 0; i < tags.length; i++) {
        //         const tagLi = document.createElement("li");
        //         tagLi.classList.add("tags__container__item");
        //         tagLi.innerText = `${tags[i]}`;
        //         photographeTags.appendChild(tagLi); 
        // }

        // photographeImgContainer.appendChild(photographeImg);
        // photographeDatailContainer.appendChild(photographeName);
        // photographeDatailContainer.appendChild(photographeDescription);
        // photographeDatailContainer.appendChild(photographeSalary);
        // photographeDatailContainer.appendChild(photographeTags);
        // photographeArticle.appendChild(photographeImgContainer);
        // photographeArticle.appendChild(photographeDatailContainer);
        // sectionPhotographe.appendChild(photographeArticle);                               

        let elements = document.querySelectorAll('.header__menu__filter__item'); 
        console.log("--------------");
        console.log(elements);
        console.log("--------------");
        let element;
        
        for (let i = 0; i < elements.length; i++) {
              let element = elements[i];      
        }    
        // element.addEventListener("click",click );
        function click() {
                alert("hello world !!!")  
        }
        let tableau =[];
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
            
          });
        });

        const ordrePages = document.querySelectorAll('.photographe__item');
        ordrePages.forEach((page) => {
                page.addEventListener('click', (event) => {
                        document.getElementsByClassName(".lien").href +=`?id=2`;
                        //window.location.href = "http://127.0.0.1:5500/composants.html";  
                      });
                });
      //https://www.youtube.com/watch?v=cO8ANWHqw0o   

//     function buildPhotographe(){
//         const photographeArticle = document.createElement("article");
//         const photographeImgContainer = document.createElement("div");
//         const photographeImg = document.createElement("img");
//         const photographeDatailContainer = document.createElement("div");
//         const photographeName = document.createElement("h2");
//         const photographeDescription = document.createElement("p");
//         const photographeSalary = document.createElement("p");
//         const photographeTags = document.createElement("p");

//         photographeImgContainer.appendChild(photographeImg);
//         photographeDatailContainer.appendChild(photographeName);
//         photographeDatailContainer.appendChild(photographeDescription);
//         photographeDatailContainer.appendChild(photographeSalary);
//         photographeDatailContainer.appendChild(photographeTags);
//         photographeArticle.appendChild(photographeImgContainer);
//         photographeArticle.appendChild(photographeDatailContainer);
//         return main.appendChild(photographeArticle);
// }


//  function deleteElementToArray(tableau,element) {
//         const index = tableau.indexOf(element);
//         tableau.splice(index,1);
// }
//let ajout =true;
//let tableau =[];
//buildArrayToSearch(ajout, tableau);
//addDieseToTag(elements);
