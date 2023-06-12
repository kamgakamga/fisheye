const url ="assets/datas/data.json";

const promisseData = await fetch(url);
const data= await promisseData.json();
const allPhotographes = data.photographers;

 const AllMedias = data.media;

function getAllPhotographe() {
        return allPhotographes ;
}
function getAllMedia() {
        return AllMedias ;
}
function getIndexOfElement(tableau,id) {
        let index = -1;
        for (let i = 0; i < tableau.length; i++) { 
          if (tableau[i].id === id) {
                index = i;
              return index; 
          }
      }
}
export {getAllMedia}
export {getAllPhotographe}
export {getIndexOfElement}
