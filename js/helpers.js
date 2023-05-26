const deleteElementToArray =  function deleteElementToArray(tableau,element) {
        const index = tableau.indexOf(element);
        tableau.splice(index,1);
        console.log("element: "+element+" supprimer avec succes!");
}

const buildArrayToSearch = function  buildArrayToSearch() {
        if (ajout && tableau.length > 0) {
                if (tableau.includes(this.textContent)) {
                         deleteElementToArray(tableau,this.textContent);
                }else {
                         tableau.push(this.textContent); 
                  }
               }else {
                        tableau.push(this.textContent); 
                  }
   return tableau;
}

const buildPhotographe = function buildPhotographe(){
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

// function buidRealisatioPhotographeItem (media) {
//   const main = document.querySelector("main");
//   const realisationContainer =  document.createElement('div');
//   realisationContainer.innerHTML = `<div class="realisation__item"`
//   realisationContainer.innerHTML +=`<div class="realisation__item__img__container">`
//   realisationContainer.innerHTML +=`<img src="./assets/img/Ellie Rose/Architecture_Connected_Curves.jpg" class="realisation__item__img" alt="">`
//   realisationContainer.innerHTML +=`</div>`
//   realisationContainer.innerHTML +=`<div class="realisation__item__detail">`
//   realisationContainer.innerHTML +=`<p class="realisation__item__detail__tagname">${media.title}</p>`
//   realisationContainer.innerHTML +=`<div class="realisation__item__detail__like">`
//   realisationContainer.innerHTML +=`<span class="realisation__item__detail__like__compteur">${media.likes}</span>`
//   realisationContainer.innerHTML +=`<span class="realisation__item__detail__like__img"><i class="fas fa-heart"></i></span>`
//   realisationContainer.innerHTML +=`</div>`
//   realisationContainer.innerHTML +=`</div>`
//   realisationContainer.innerHTML +=`</div>`

//   realisationContainer.appendChild(realisationContainer);
//   main.appendChild(realisationContainer);
// }

let getAllMedia = async function(){
        const datas= await fetch("./../assets/datas/data.json");
        const data= await datas.json();
        return data.media; 
}

let getAllPhotographe = async function(){
        const datas= await fetch("./../assets/datas/data.json");
        const data= await datas.json();
        return data.photographers;
}


function getAllMediaByPhotographeID( media, photographeID){
        const ps = Array.from(media);
        console.log(media);
        console.log(photographeID);
        return ps.filter(p =>{
                console.log(p.photographerId);
                p.photographerId == photographeID;
        });
}


function buidRealisatioPhotographeItem (title,nomImage,nombreLike) {
        const sectionRealisation = document.querySelector(".realisation-section");
        const realisationItem =  document.createElement('article');
              realisationItem.classList.add("realisation__item");
        const realisationImgContainer =  document.createElement('div');
              realisationImgContainer.classList.add("realisation__item__img__container");
        const realisationImg =  document.createElement('img');
              realisationImg.src=`./../assets/img/Marcel/${nomImage}`;
              realisationImg.alt="realisation du photographe";
              realisationImg.classList.add("realisation__item__img");
        const realisationDetailcontainer =  document.createElement('div');
              realisationDetailcontainer.classList.add("realisation__item__detail");
        const realisationDetailTitle =  document.createElement('h4');
              realisationDetailTitle.innerText=`${title}`;
              realisationDetailTitle.classList.add("realisation__item__detail__tagname");
        const realisationDetailLikecontainer =  document.createElement('div');
              realisationDetailLikecontainer.classList.add("realisation__item__detail__like");
        const realisationDetailLike =  document.createElement('span');
              realisationDetailLike.classList.add("realisation__item__detail__like__compteur");
        const realisationDetaiIcon =  document.createElement('span');
              realisationDetaiIcon.innerText=`${nombreLike}`;
              realisationDetaiIcon.classList.add("realisation__item__detail__like__img");
        const realisationIcon =  document.createElement('i');
              realisationIcon.classList.add("fas");
              realisationIcon.classList.add("fa-heart");
        realisationDetailLikecontainer.appendChild(realisationDetailLike);
        realisationDetailLikecontainer.appendChild(realisationDetaiIcon);
        realisationDetaiIcon.appendChild(realisationIcon);
        realisationImgContainer.appendChild(realisationImg);
        realisationDetailcontainer.appendChild(realisationDetailTitle);
        realisationDetailcontainer.appendChild(realisationDetailLikecontainer);
        realisationItem.appendChild(realisationImgContainer);
        realisationItem.appendChild(realisationDetailcontainer);
        sectionRealisation.appendChild(realisationItem)
        //sectionRealisation.appendChild(realisationSectionContainer);
       
}

function buildHeader(body) {
      const header = document.createElement("header");
      const headerLogo = document.createElement("div");
      headerLogo.classList.add("header__logo");
      const headerImg = document.createElement("img");
      headerImg.classList.add("header__logo__img");
      const headerMenu = document.createElement("nav");
      headerMenu.classList.add("header__menu");
     
      headerImg.src="./../assets/img/logo/fisheye.png";
      headerImg.alt="Logo de fisheye";
      headerLogo.appendChild(headerImg);
      header.appendChild(headerLogo);
      header.appendChild(headerMenu);
      header.appendChild(headerPhotographe);
      body.appendChild(header);
}
export {deleteElementToArray,buildArrayToSearch,buildPhotographe,buidRealisatioPhotographeItem,getAllMedia,getAllPhotographe,getAllMediaByPhotographeID,buildHeader}