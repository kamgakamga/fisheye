// import {openModal} from "../ligthbox.js";




function builPhotographeTags(tags){
        for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                const tagLi = document.createElement("li");
                tagLi.innerText =`#${tag}`;
                tagLi.classList.add("photographe__detail__container__tag__item");
                console.log(tagLi);
                let ta = document.querySelector(".photographe__detail__container__tags");
        }
}

function buildProfileItem(photographe,tagItem) {
        const articlePhotographe = document.createElement("article");
        articlePhotographe.classList.add("photographe__item");
        articlePhotographe.innerHTML = ` <div class="photographe__container__photo">
                              <a href="./photographe.html?id=${photographe.id}" class="lien">
                                      <img src="./assets/img/PhotographersIDPhotos/${photographe.portrait}" alt="photo de profil du photographe ${photographe.name}" class="photographe__container__photo__img">
                              </a></div>
                               <div class="photographe__detail__container">
                               <p class="photographe__detail__container__name">${photographe.name}</p>
                               <div class="photographe__detail__container__description">
                                       <p class="photographe__detail__container__description__localisation" tabindex="-1">${photographe.country}, ${photographe.city}</p>
                                       <p class="photographe__detail__container__description__texte" tabindex="-1">${photographe.tagline}</p>
                                       <p class="photographe__detail__container__description__price" tabindex="-1">${photographe.price}<strong>€</strong>/jour</p>
                               </div>
                               <ul class="photographe__detail__container__tags">
                               ${tagItem}
                               </ul>
                               </div>`; 
                           document.querySelector(".photographes").appendChild(articlePhotographe);
}

function photographeItem(photographe) {
        let tagItem = "";
        for(let i = 0; i< photographe.tags.length; i++) {
            tagItem += "<li class=\"photographe__detail__container__tag__item\">#"+photographe.tags[i]+"</li>";
         }
       
        buildProfileItem(photographe,tagItem);
        }


function displayPhotographes(photographes) {
        for (let i = 0; i < photographes.length; i++) {
                let photographe = photographes[i];
                photographeItem(photographe);
        
        } 
}


function realisationPhotographeItem(item,folder,index) {
        const realisationItemContainer = document.createElement("div");
        realisationItemContainer.classList.add("realisation__item");
        if(typeof item.image === "undefined"){
                buidVideoRealisation(item,folder,realisationItemContainer,index);  
        }else{
                buidImageRealisation(item,folder,realisationItemContainer,index);
        }
}

/**
 * construire la realisation d'un photographe  cas d'une vidéo
 *  @param{*} item 
 *  @param{*} folder
 *  @param{*} realisationItemContainer
 */
function buidVideoRealisation(item,folder,realisationItemContainer,index){
        console.log("index:",index);
        realisationItemContainer.innerHTML = `<div class="realisation__item__img__container  ">
        <div class="videos">
        <i class="fas fa-play video-icon"  onclick="currentSlide(${index + 1})"></i>
        <video class="video">
              <source src="assets/img/${folder}/${item.video}" type="video/mp4">
              <p>Votre navigateur ne supporte pas la lecture de vidéo HTML5.</p>
        </video>
        </div>
    </div>
    <div class="realisation__item__detail">
       <p class="realisation__item__detail__tagname">${item.title}</p>
         <div class="realisation__item__detail__like">
           <span class="realisation__item__detail__like__compteur">${item.likes}</span>
           <span class="realisation__item__detail__like__img"><i class="far fa-heart like-icon" id="${item.id}"></i></span>
         </div>
     </div>`;
document.querySelector(".realisations").appendChild(realisationItemContainer);

}


/**
 * construire la realisation d'un photographe  cas d'une image
 *  @param{*} item 
 *  @param{*} folder
 *  @param{*} realisationItemContainer
 */
function buidImageRealisation(item,folder,realisationItemContainer,index){
        realisationItemContainer.innerHTML = `<div class="realisation__item__img__container">
        <img src="assets/img/${folder}/${item.image}" class="realisation__item__img hover-shadow" onclick="currentSlide(${index + 1})"  alt="une réalisation de ${item.image}">
   </div>
   <div class="realisation__item__detail">
          <p class="realisation__item__detail__tagname">${item.title}</p>
          <div class="realisation__item__detail__like">
              <span class="realisation__item__detail__like__compteur">${item.likes}</span>
              <span class="realisation__item__detail__like__img"><i class="far fa-heart like-icon" id="${item.id}" ></i></span>
          </div>
   </div>`;
document.querySelector(".realisations").appendChild(realisationItemContainer);
}



function displayRealisationsPhothographe(currentPhotographeRealisations,totalLikes,realisationPhotographeFolderImage) {
        for (let i = 0; i < currentPhotographeRealisations.length; i++) {
                const element = currentPhotographeRealisations[i];
                totalLikes += element.likes
                realisationPhotographeItem(element,realisationPhotographeFolderImage, i);
         }  
         return totalLikes;   
}

function getAllMediaByPhotographeID(allTags, photographeId) {
        return  allTags.filter((item) => {
             return   item.photographerId == photographeId; });    
     }

function getPhotographeByID(allPhotographes,id) {
        return  allPhotographes.filter((item) => {
             return   item.id == id; });    
     }

function buildStatistiquePhotographe(totalLikes, salaryPerDay) {
    const stat = document.createElement('div');
    stat.classList.add("statistique");
    stat.innerHTML=` <p class="likes">
                        <span class="likesnombers">${totalLikes}</span>
                        <span class="icon"><i class="fas fa-heart"></i></span>
                    </p>
                        <p class="price">
                        <span class="price">${salaryPerDay}<strong>€</strong> / jour</span>
                    </p>`;
                    document.querySelector(".footer").appendChild(stat);
}
     
function buildFilter() {
        const title = document.createElement("h3");
        title.innerHTML = `Trier par:`;

        const elements = document.createElement("div");
        elements.classList.add("trier");
        elements.innerHTML = `<div class="trier__item popularite" aria-label="tri des réalisation du photographe par popularités">
                                  Popularité <i class="fas fa-angle-left"></i>
                                </div>
                                <div class="trier__item date" aria-label="tri des réalisation du photographe par date">
                                        Date <i class="fas fa-angle-left"></i>
                                </div>
                                <div class="trier__item titre" aria-label="tri des réalisation du photographe par titre">
                                         Titre <i class="fas fa-angle-left"></i>
                                </div>`;
        document.querySelector(".filter-section").appendChild(title);
        document.querySelector(".filter-section").appendChild(elements);    
}

function displayAfterLikeOrUnLike(currentPhotographeRealisations,totalLikes,salaryPerDay,realisationPhotographeFolderImage) {
        for (let i = 0; i < currentPhotographeRealisations.length; i++) {
                const element = currentPhotographeRealisations[i];
                totalLikes += element.likes
               //  console.log(totalLikes);
                realisationPhotographeItem(element,realisationPhotographeFolderImage);
                buildStatistiquePhotographe(totalLikes,salaryPerDay);
           } 
        
}


function openModal() {
        document.getElementById("myModal").style.display = "block";
      }

        export {builPhotographeTags}
        export {photographeItem}
        export {realisationPhotographeItem}
        export {getAllMediaByPhotographeID}
        export {buildStatistiquePhotographe}
        export {getPhotographeByID}
        export {displayPhotographes}
        export {buildFilter}
        export {openModal}
        export {displayAfterLikeOrUnLike}
        export {displayRealisationsPhothographe}
   