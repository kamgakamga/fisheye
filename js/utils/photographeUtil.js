

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

function photographeItem(photographe) {

        let tagItem = "";
               for(let i = 0; i< photographe.tags.length; i++) {
                   tagItem += "<li class=\"photographe__detail__container__tag__item\">#"+photographe.tags[i]+"</li>";
                }

        const articlePhotographe = document.createElement("article");
        articlePhotographe.classList.add("photographe__item");
        articlePhotographe.innerHTML = ` <div class="photographe__container__photo">
                              <a href="./photographe.html?id=${photographe.id}" class="lien">
                                      <img src="./assets/img/PhotographersIDPhotos/${photographe.portrait}" alt="photo de profile du photographe${name}" class="photographe__container__photo__img">
                              </a></div>
                               <div class="photographe__detail__container">
                               <p class="photographe__detail__container__name">${photographe.name}</p>
                               <div class="photographe__detail__container__description">
                                       <p class="photographe__detail__container__description__localisation">${photographe.country}, ${photographe.city}</p>
                                       <p class="photographe__detail__container__description__texte">${photographe.tagline}</p>
                                       <p class="photographe__detail__container__description__price">${photographe.price}<strong>€</strong>/jour</p>
                               </div>
                               <ul class="photographe__detail__container__tags">
                               ${tagItem}
                               </ul>
                               </div>`; 
                           document.querySelector(".photographes").appendChild(articlePhotographe);
        }



function realisationPhotographeItem(item,folder) {

        const realisationItemContainer = document.createElement("div");
        realisationItemContainer.classList.add("realisation__item");

        realisationItemContainer.innerHTML = `<div class="realisation__item__img__container">
                                                   <img src="./../assets/img/${folder}/${item.image}" class="realisation__item__img" alt="">
                                              </div>
                                              <div class="realisation__item__detail">
                                                     <p class="realisation__item__detail__tagname">${item.title}</p>
                                                     <div class="realisation__item__detail__like">
                                                         <span class="realisation__item__detail__like__compteur">${item.likes}</span>
                                                         <span class="realisation__item__detail__like__img"><i class="fas fa-heart"></i></span>
                                                     </div>
                                              </div>`;
                                        document.querySelector(".realisations").appendChild(realisationItemContainer);
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
        elements.innerHTML = `<div class="trier__item">
                                        Popularité
                                </div>
                                <div class="trier__item">
                                        Date
                                </div>
                                <div class="trier__item">
                                         Titre
                                </div>`;
        document.querySelector(".filter-section").appendChild(title);
        document.querySelector(".filter-section").appendChild(elements);    
}
        export {builPhotographeTags}
        export {photographeItem}
        export {realisationPhotographeItem}
        export {getAllMediaByPhotographeID}
        export {buildStatistiquePhotographe}
        export {getPhotographeByID}
        export {buildFilter}
   