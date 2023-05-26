//recuperation des donnees depuis le fichier json

const datas= await fetch("./../assets/datas/data.json");
const data= await datas.json();
const photographes = data.photographers;
let allTags =[];

console.log("xxxxxxxxxxxxxx LISTE DES PHOTOGRAPHES xxxxxxxxxxxxxx"); 
console.log(photographes);



console.log("xxxxxxxxxxxxx RECUPERATION DES TAGS DES PHOTOGRAPHES xxxxxxxxxxxxxxx");
for (let i = 0; i < photographes.length; i++) {
        let tags = photographes[i].tags;
      for (let index = 0; index < tags.length; index++) {
               allTags.push(tags[index]); 
      }     
}
console.log(allTags);

let allTagFiltrer = allTags.filter((item, index) => {
        return allTags.indexOf(item) === index;
      });

console.log("xxxxxxx LISTE DES TAGS APRES SUPPRESSION DES DOUBLONSxxxxxxxxxxxxxxxxxx");
console.log(allTagFiltrer);


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
headerMenu.appendChild(menuFilter());
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
console.log("premier for");
        const photographeArticle = document.createElement("article");
        photographeArticle.classList.add("photographe");
        const photographeImgContainer = document.createElement("div");
        photographeImgContainer.classList.add("photographe__container");
        const photographeImg = document.createElement("img");
        photographeImg.classList.add("photographe__container__img");
        photographeImg.src = `./assets/img/PhotographersIDPhotos/${photographes[i].portrait}`;
        photographeImg.alt= `portrait du photographe ${photographes[i].name}`;
        const photographeDatailContainer = document.createElement("div");
        const photographeName = document.createElement("h2");
        photographeName.innerText= `${photographes[i].name}`;
        const photographeCountry = document.createElement("p");
        photographeCountry.innerText=`${photographes[i].city}, ${photographes[i].country}`;
        const photographeDescription = document.createElement("p");
        photographeDescription.innerText = `${photographes[i].tagline}`
        const photographeSalary = document.createElement("p");
        photographeSalary.innerHTML =`${photographes[i].price} <strong>€</strong>/jour`;
        const photographeTags = document.createElement("ul");
        photographeTags.classList.add("tags__container");
        const tags = addDieseToTag(photographes[i].tags);
        // photographeTags.innerText = `${tags}`;
        for (let i = 0; i < tags.length; i++) {
                console.log("deuxieme boucle for");
                const tagLi = document.createElement("li");
                tagLi.classList.add("tags__container__item");
                tagLi.innerText = `${tags[i]}`;
                photographeTags.appendChild(tagLi); 
        }
        
        
        

        photographeImgContainer.appendChild(photographeImg);
        photographeDatailContainer.appendChild(photographeName);
        photographeDatailContainer.appendChild(photographeDescription);
        photographeDatailContainer.appendChild(photographeSalary);
        photographeDatailContainer.appendChild(photographeTags);
        photographeArticle.appendChild(photographeImgContainer);
        photographeArticle.appendChild(photographeDatailContainer);
        sectionPhotographe.appendChild(photographeArticle);                               

       
        console.log("...................Liste des elements du menu..............................");
        let elements = document.querySelectorAll('.header__menu__filter__item'); 
        console.log(elements);
        console.log(".................................................");
        let element;
         for (let i = 0; i < elements.length; i++) {
         console.log("trouxieme boucle for");
                  element = elements[i];
                 let ajout = true;
                 var tableau = [];
             
                
                let buildArrayToSear = function() { 
                        // if (ajout && tableau.length > 0) {
                        //           // if (tableau.includes(this.textContent)) {
                        //           //         // const index = tableau.indexOf(element);
                        //           //         // tableau.splice(index,1);
                        //           //         // console.log("element: "+this.textContent+" supprimer avec succes!");
                        //           //         console.log("inclus");
                        //           // }else {
                        //           //         console.log("ajouterrrrr");
                        //           //         //  tableau.push(this.textContent); 
                        //           //         //  console.log(tableau);
                        //           //   }
                        //          }else {
                        //           console.log("ajouterrrrrooooooooooo");
                        //                   // tableau.push(this.textContent); 
                        //                   // console.log(tableau);
                        //                   // console.log("00000000000000000000");
                        //                   // event.preventDefault();
                                          
                        //             } 
                          } 
                console.log("#################################");
                console.log(element);
                console.log("#################################");       
                element.addEventListener("click",buildArrayToSear);
         }
        


    function buildPhotographe(){
        const photographeArticle = document.createElement("article");
        const photographeImgContainer = document.createElement("div");
        const photographeImg = document.createElement("img");
        const photographeDatailContainer = document.createElement("div");
        const photographeName = document.createElement("h2");
        const photographeDescription = document.createElement("p");
        const photographeSalary = document.createElement("p");
        const photographeTags = document.createElement("p");

        photographeImgContainer.appendChild(photographeImg);
        photographeDatailContainer.appendChild(photographeName);
        photographeDatailContainer.appendChild(photographeDescription);
        photographeDatailContainer.appendChild(photographeSalary);
        photographeDatailContainer.appendChild(photographeTags);
        photographeArticle.appendChild(photographeImgContainer);
        photographeArticle.appendChild(photographeDatailContainer);
        return main.appendChild(photographeArticle);
}

}

console.log(menuFilter(allTagFiltrer));


 function deleteElementToArray(tableau,element) {
        const index = tableau.indexOf(element);
        tableau.splice(index,1);
        console.log("element: "+element+" supprimer avec succes!");
        console.log(tableau);
}

// function  buildArrayToSearch(ajout, tableau) {
//         if (ajout && tableau.length > 0) {
//                 if (tableau.includes(this.textContent)) {
//                          deleteElementToArray(tableau,this.textContent);
//                 }else {
//                          tableau.push(this.textContent); 
//                   }
//                }else {
//                         tableau.push(this.textContent); 
//                   }
//    return tableau;
// }

 console.log(addDieseToTag(allTagFiltrer));

function menuFilter(params) {
        const filterUl = document.createElement("ul");
        const tab = addDieseToTag(allTagFiltrer);
        console.log("=============================================");
        console.log(tab);
        console.log("=============================================");
        filterUl.classList.add("header__menu__filter");
        for (let i = 0; i < tab.length; i++) {
        const filterLi = document.createElement("li");
        filterLi.innerText = `${tab[i]}`;  
        filterLi.classList.add("header__menu__filter__item");
        filterUl.appendChild(filterLi);      
        } 
      return filterUl;
}

function addDieseToTag(params) {
        let dieseTag = []; 
        for (let i = 0; i < params.length; i++) {
                dieseTag.push(`#${params[i]}`); 
        }
        return dieseTag;
}
