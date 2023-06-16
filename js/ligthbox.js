// import {buildImageLigthBox} from "./utils/ligthboxUtil.js";
function openModal() {
              document.querySelector(".my-modal").style.display = "block";
              console.log("modal is open !!!");
      }

      function buildSlideLightbox(item, index,lengthTab,folder) {
        let slide = document.createElement("div");
        slide.classList.add("mySlides");
        if(typeof item.image === "undefined"){
          slide.innerHTML= `<div class="numbertext">${index + 1} / ${lengthTab}</div>
                               <div class="videos">
                                    <i class="fas fa-play video-icon"></i>
                                    <video class="video">
                                          <source src="./../assets/img/${folder}/${item.video}" type="video/mp4">
                                          <p>Votre navigateur ne supporte pas la lecture de vidéo HTML5.</p>
                                    </video>
                               </div>`
                   document.querySelector(".modal-content").appendChild(slide); 
        } else{
            slide.innerHTML= `<div class="numbertext">${index + 1} / ${lengthTab}</div>
                              <img src="./../assets/img/${folder}/${item.image}" style="width:100%" alt="image de la ligthbox">`;
             document.querySelector(".modal-content").appendChild(slide); 
        }                   
      }

      function buildBtnNext() {
        const liks = document.createElement("a");
        liks.innerHTML = `<i class="fas fa-angle-left next" onclick = "plusSlides(1);"></i>`;
        document.querySelector(".modal-content").appendChild(liks);
      }
      function buildBtnPrev() {
        const liks = document.createElement("a");
        liks.innerHTML = `<i class="fas fa-angle-left prev" onclick = "plusSlides(-1);"></i>`;
        document.querySelector(".modal-content").appendChild(liks);
      }

      function buildLightbox(currentPhotographeRealisations ,folder) { 
        const closeModal= document.createElement("span");
              closeModal.classList.add("close");
              closeModal.classList.add("cursor");
        const closeIcon= document.createElement("i");
              closeIcon.classList = "fas fa-times close-modal";
        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        document.querySelector(".my-modal").appendChild(modalContent); 
        document.querySelector(".modal-content").appendChild(closeModal); 
        document.querySelector(".close").appendChild(closeIcon); 
        for (let i = 0; i < currentPhotographeRealisations.length; i++) {
          const lengthTab = currentPhotographeRealisations.length;
          buildSlideLightbox(currentPhotographeRealisations[i], i,lengthTab,folder); 
        } 
        // document.querySelector(".modal-content").appendChild(prev); 
        buildBtnPrev();
        buildBtnNext();
        // document.querySelector(".modal-content").appendChild(next); 
      }

      // Close the Modal
      function closeModal() {
        document.querySelector(".my-modal").style.display = "none";
      }
      
      var slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        console.log(slides.length);
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          console.log(slides[i]);
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        // slides[slideIndex].style.display = "block";
      }


export {openModal} 
export {closeModal} 
export {buildLightbox} 
export {plusSlides} 
export {currentSlide} 
