function openContact() {
        document.querySelector(".form-content").style.display = "block";
        console.log("form contact is open  !!!");
}

      // Close the Modal
      function closeContact() {
        document.querySelector(".form-content").style.display = "none";
        console.log("form contact is close  !!!");
      }
      

function buildFormContact(photographe) {
        console.log("buildFormContact");
let formContact = document.createElement("div");
     formContact.classList.add("form-content");
     formContact.classList.add("contactes");
     formContact.innerHTML =`<div class="form-header">
                                        <div class="contactez">
                                                <h4>Contactez-moi</h4>
                                                <i class="fas fa-times close-contact"></i>
                                        </div>
                                        <p>${photographe.name}</p>
                                        </div>
                                        <form action="" class="form-contact" method="post">
                                        <div class="form-group">
                                                <label for="prenom" class="prenom">Prénom</label><br>
                                                <input type="text" name="prenom" id="prenom">
                                        </div>

                                        <div class="form-group">
                                                <label for="nom" class="nom">Nom</label><br>
                                                <input type="text" name="nom" id="nom">
                                        </div>

                                        <div class="form-group">
                                                <label for="email" class="email">Email</label><br>
                                                <input type="email" name="email" id="email">
                                        </div> 

                                        <div class="form-group">
                                                <label for="message">Votre message</label><br>
                                                <textarea name="message" id="message" cols="30" rows="10" class="message"></textarea> 
                                        </div>

                                        <div class="soumettre">
                                                <input type="submit" value="Envoyer">
                                        </div>  
                                        </form>`;

document.querySelector(".container").appendChild(formContact);     
}

export{openContact}
export{closeContact}
export{buildFormContact}