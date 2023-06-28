// import {buildImageLigthBox} from "./utils/ligthboxUtil.js";
function openModal() {
              document.querySelector(".my-modal").style.display = "block";
              console.log("modal is open !!!");
              document.querySelector(".my-modal").focus();
      }

      function buildSlideLightbox(item, index,lengthTab,folder) {
        let slide = document.createElement("div");
        slide.classList.add("mySlides");
        if(typeof item.image === "undefined"){
          slide.innerHTML= `<div class="numbertext">${index + 1} / ${lengthTab}</div>
                               <div class="videos">
                                    <video class="video" controls autoplay>
                                          <source src="assets/img/${folder}/${item.video}" type="video/mp4">
                                          <p>Votre navigateur ne supporte pas la lecture de vidéo HTML5.</p>
                                    </video>
                               </div>`
                   document.querySelector(".modal-content").appendChild(slide); 
                   console.log("Lecture automatique.");
        } else{
            slide.innerHTML= `<div class="numbertext">${index + 1} / ${lengthTab}</div>
                              <img src="assets/img/${folder}/${item.image}" class="lightbox__image" alt="image de ${item.image}">`;
             document.querySelector(".modal-content").appendChild(slide); 
        }                   
      }

      function buildBtnNext() {
        const liks = document.createElement("a");
        liks.innerHTML = `<i class="fas fa-angle-left next" tabIndex="0" aria-label="navigation à la prochaine image" onclick = "plusSlides(1);"></i>`;
        document.querySelector(".modal-content").appendChild(liks);
      }
      function buildBtnPrev() {
        const liks = document.createElement("a");
        liks.innerHTML = `<i class="fas fa-angle-left prev tabIndex="0" aria-label="navigation vers l'image précédente" onclick = "plusSlides(-1);"></i>`;
        document.querySelector(".modal-content").appendChild(liks);
      }

      function buildLightbox(currentPhotographeRealisations ,folder) { 
        const closeModal= document.createElement("span");
              closeModal.classList.add("close");
              closeModal.classList.add("cursor");
        let closeIcon= document.createElement("i");
              closeIcon.classList = "fas fa-times close-modal";
              closeIcon.setAttribute('tabindex','0');
              closeIcon.setAttribute('aria-label','ouverture de la lightbox');
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
