
const promissedata= await fetch("./../assets/datas/data.json");
const data= await promissedata.json();

const photographes = data.photographers;
const media = data.media;

function getAllMedia() {
        return media;
}
function getAllPhotographe() {
        return photographes;
}

export {getAllMedia}
export {getAllPhotographe}
