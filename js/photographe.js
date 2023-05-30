import {photographeItem} from "./utils/photographeUtil.js";
import {getAllMediaByPhotographeID} from "./utils/photographeUtil.js";
import {realisationPhotographeItem} from "./utils/photographeUtil.js";
import {buildStatistiquePhotographe} from "./utils/photographeUtil.js";
import {getAllPhotographe} from "./utils/data.js";
import {getAllMedia} from "./utils/data.js";
import {getPhotographeByID} from "./utils/photographeUtil.js";

 const media = getAllMedia();
 const photographes = getAllPhotographe();


 console.log(media);
const body = document.body;
const sectionPhotographe = document.createElement("section");
sectionPhotographe.classList.add("photographes");
const sectionRealisationDesPhotographes = document.createElement("section");
sectionRealisationDesPhotographes.classList.add("realisations");
const footer = document.createElement("footer");
footer.classList.add("footer");
body.appendChild(sectionPhotographe);
body.appendChild(sectionRealisationDesPhotographes);
body.appendChild(footer);
const folder ='Tracy';

// les realisations du photographe sur le quel on vient de dblclique. 
const currentPhotographeRealisations = getAllMediaByPhotographeID(media, 82);
   console.log(currentPhotographeRealisations);
   let totalLikes = 0;
   let salaryPerDay = 0;
   const photographeTab = getPhotographeByID(photographes,82);
   const photographe = photographeTab["0"];
   photographeItem(photographe.name,photographe.tagline,photographe.price,photographe.portrait, photographe.tags);
   for (let i = 0; i < currentPhotographeRealisations.length; i++) {
          const element = currentPhotographeRealisations[i];
          totalLikes += element.likes
          realisationPhotographeItem(element,folder);
   }
  
   salaryPerDay += photographe.price;
   console.log(photographe);
   console.log(totalLikes);
   buildStatistiquePhotographe(totalLikes,salaryPerDay);
      
      
      // for (let i = 0; i < photographes.length; i++) {
//   const element = photographes[i];
//   console.log(element);
//   photographeItem(element.name,element.tagline, element.price, element.portrait,element.tags);
// }



























// const a = Array.from(media);

// const d =  a.filter(function (val) {
//        return val.photographerId === 195;});
//    console.log(d);

// // Construction de la structure de base de ma page index.
// const body = document.body;
// const header = document.createElement("header");
// const main =   document.createElement("main");
// const footer = document.createElement("footer");
// //buildHeader(body);
// // Ajout des elements a la struture base0 

//  body.appendChild(header);
//  body.appendChild(main);
//  body.appendChild(footer)

// // Construction de l'entete de la page index 

//  const headerLogo = document.createElement("div");
//  headerLogo.classList.add("header__logo");
//  const headerImg = document.createElement("img");
//  headerImg.classList.add("header__logo__img");
//  const headerMenu = document.createElement("nav");
//  headerMenu.classList.add("header__menu");

//  headerImg.src="./../assets/img/logo/fisheye.png";
//  headerImg.alt="Logo de fisheye";
//  headerLogo.appendChild(headerImg);
//  header.appendChild(headerLogo);
//  //header.appendChild(headerMenu);
//  //header.appendChild(headerPhotographe);


// //Ajout du style a l'entete de la page index

// // header.classList.add("header");

// // // Construction du corps de la page index
// // const sectionPhotographe = document.createElement("section");
// // sectionPhotographe.classList.add("photographes");
// // main.appendChild(sectionPhotographe);


//         // function buidRealisatioPhotographeItem () {
//         //         const main = document.querySelector(".main-container");
//         //         const realisationSectionContainer =  document.createElement('section');
//         //         const realisationItem =  document.createElement('article');
//         //         const realisationImgContainer =  document.createElement('div');
//         //         const realisationImg =  document.createElement('img');
//         //         const realisationDetailcontainer =  document.createElement('div');
//         //         const realisationDetailTitle =  document.createElement('h4');
//         //         const realisationDetailLikecontainer =  document.createElement('div');
//         //         const realisationDetailLike =  document.createElement('span');
//         //         const realisationDetaiIcon =  document.createElement('span');
               
//         //         realisationDetailLikecontainer.appendChild(realisationDetailLike);
//         //         realisationDetailLikecontainer.appendChild(realisationDetaiIcon);

//         //         realisationImgContainer.appendChild(realisationImg);
//         //         realisationDetailcontainer.appendChild(realisationDetailTitle);
//         //         realisationDetailcontainer.appendChild(realisationDetailLikecontainer);
//         //         realisationItem.appendChild(realisationImgContainer);
//         //         realisationItem.appendChild(realisationDetailLikecontainer);
//         //         realisationSectionContainer.appendChild(realisationItem)
//         //         main.appendChild(realisationSectionContainer);
               
               
               
               
//         //         realisationContainer.innerHTML = `<div class="realisation__item"`
//         //         realisationContainer.innerHTML +=`<div class="realisation__item__img__container">`
//         //         realisationContainer.innerHTML +=`<img src="./assets/img/Ellie Rose/Architecture_Connected_Curves.jpg" class="realisation__item__img" alt="">`
//         //         realisationContainer.innerHTML +=`</div>`
//         //         realisationContainer.innerHTML +=`<div class="realisation__item__detail">`
//         //         realisationContainer.innerHTML +=`<p class="realisation__item__detail__tagname">media.title</p>`
//         //         realisationContainer.innerHTML +=`<div class="realisation__item__detail__like">`
//         //         realisationContainer.innerHTML +=`<span class="realisation__item__detail__like__compteur">media.likes</span>`
//         //         realisationContainer.innerHTML +=`<span class="realisation__item__detail__like__img"><i class="fas fa-heart"></i></span>`
//         //         realisationContainer.innerHTML +=`</div>`
//         //         realisationContainer.innerHTML +=`</div>`
//         //         realisationContainer.innerHTML +=`</div>`
              
//         //         realisationContainer.appendChild(realisationContainer);
//         //       return  main.appendChild(realisationContainer);
//          //     }
   
//       function photographeProfile() {

//         const profil = document.querySelector(".profile");
//         const container = document.createElement("div"); 
//         const imapegeContainer = document.createElement("div"); 
//         const image = document.createElement("img"); 
//         const phographeDataContainer = document.createElement("div"); 
//         const photographeTitle = document.createElement("h3"); 
//         const tagList = document.createElement("ul"); 
//         const photographeDetail = document.createElement("p"); 
//         const photographeCountry = document.createElement("p"); 
//         const photographeDescription = document.createElement("p"); 

//         imapegeContainer.appendChild(image);
//         photographeDetail.appendChild(photographeCountry);
//         photographeDetail.appendChild(photographeDescription);
//         phographeDataContainer.appendChild(photographeTitle);
//         phographeDataContainer.appendChild(photographeDetail);
//         phographeDataContainer.appendChild(tagList);
//         container.appendChild(imapegeContainer);
//         container.appendChild(phographeDataContainer);
//         console.log("ooooooooooooo");
//         console.log(profil);
//         profil.appendChild(container);
//      }          
    

//  const realisationSectionContainer =  document.createElement('section');
//  const profile =  document.createElement("section");
//        profile.classList.add(".profile");
//  realisationSectionContainer.classList.add("realisation-section")
//  console.log(profile);
//    photographeProfile();
//  main.classList.add("main-container");
//  main.appendChild(realisationSectionContainer); 

//  for (let i = 0; i < d.length; i++) {
//          const title=d[i].title;
//          const nomImage=d[i].image;
//          const nombreLike = d[i].likes;
//         buidRealisatioPhotographeItem(title,nomImage,nombreLike); 
//  }

//  const ph = document.querySelector(".realisation__item");
//  ph.addEventListener("dblclick",()=>{
//          console.log("double click  sur... ",this);
// });


// // //main.appendChild()

// // //buidRealisatioPhotographeItem(data.media);
