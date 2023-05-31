function addDieseToTag(elements) {
        let dieseTag = []; 
        for (let i = 0; i < elements.length; i++) {
                dieseTag.push(`#${elements[i]}`); 
        }
        return dieseTag;
}

function moveDieseToTags(elements) {
        let unDieseTag = []; 
        for (let i = 0; i < elements.length; i++) {
               unDieseTag.push(elements[i].replace("#","")); 
        }
        return unDieseTag;
}
function moveDieseToTag(element) {
          return    element.replace("#",""); 
}

function getAllTagsFilter(allTags) {
   return  allTags.filter((item, index) => {
        return   allTags.indexOf(item) === index; });    
}


function collecteAllTags(photographes) {
        let allTags = [] ;
        for (let i = 0; i < photographes.length; i++) {
                let tags = photographes[i].tags;
              for (let index = 0; index < tags.length; index++) {
                       allTags.push(tags[index]); 
              }     
        }
        return  allTags;
}

function deleteElementToArray(tableau,element) {
        const index = tableau.indexOf(element);
        tableau.splice(index,1);
}

function buildArrayToSearch () { 
        let ajout = true;
        if (ajout && tableau.length > 0) {
                  if (tableau.includes(this.textContent)) {
                          const index = tableau.indexOf(element);
                          tableau.splice(index,1);
                          console.log("element: "+this.textContent+" supprimer avec succes!");
                          console.log("inclus");
                  }else {
                           tableau.push(this.textContent); 
                           console.log(tableau);
                    }
                 }else {
                          tableau.push(this.textContent); 
                          console.log(tableau);
                    }
} 

function buidMenuFilter(afTags) {
        const filterUl = document.createElement("ul");
        const tab = addDieseToTag(afTags);
        filterUl.classList.add("header__menu__filter");
        for (let i = 0; i < tab.length; i++) {
        const filterLi = document.createElement("li");
        filterLi.innerText = `${tab[i]}`;  
        filterLi.classList.add("header__menu__filter__item");
        filterUl.appendChild(filterLi);      
        } 
      return filterUl;
}


function f(event) {
        let cptClick = 0;
        let tableau = [];
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
                //console.log('L\'élément cliqué est:.textContent, event.target);
            // Par exemple pour ajouter une classe CSS à l'élément cliqué
           // event.target.classList.add('classe-a-ajouter-sur-l-element-clique');  
}

function getPhotographeId(location) {
        console.log('=======>>',new URL(location.href).searchParams.get("id"));
        return new URL(location.href).searchParams.get("id");
}

function splitWord(sentence, position) {
        const chaine = sentence;
        let tableau;
         tableau = chaine.split(" ");
         return tableau[position];

}

export {addDieseToTag}
export {moveDieseToTag}
export {moveDieseToTags}
export {getAllTagsFilter}
export {collecteAllTags}
export {deleteElementToArray}
export {buidMenuFilter}
export {buildArrayToSearch}
export {f}
export {getPhotographeId}
export {splitWord}