function buildImageLigthBox() {
    const boxContainer = document.createElement("div");
    boxContainer.classList.add("box-container");
    boxContainer.innerHTML =`
    <img src="./assets/img/Marcel/Architecture_Dome.jpg" alt="une image"/>
    `;
    document.querySelector(".main-container").appendChild(boxContainer);
}

export {buildImageLigthBox}