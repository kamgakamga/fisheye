function getMediaById(allMedias, mediaId){
        return  allMedias.filter((item) => {
                return   item.id === mediaId; });   
}

export {getMediaById} 