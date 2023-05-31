const promisseData = await fetch("./../assets/datas/data.json");
const data= await promisseData.json();
 const allPhotographes = data.photographers;

 const AllMedias = data.media;

function getAllPhotographe() {
        return allPhotographes ;
}
function getAllMedia() {
        return AllMedias ;
}

export {getAllMedia}
export {getAllPhotographe}
