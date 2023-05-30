// const datas = await fetch("./../assets/datas/data.json");
// const response = await datas.json();
// const photographers = response.photographers;


// let tableauDeDonne = [];
// tableauDeDonne.push("serges");

// tableauDeDonne.push("franky");

// tableauDeDonne.push("Theophane");

// tableauDeDonne.push("eric");

// tableauDeDonne.push("florian");

// tableauDeDonne.push("fabrice");

// tableauDeDonne.push("providence");


// let valeurDeRecherche = [];
// valeurDeRecherche.push(photographers[0]);
// valeurDeRecherche.push(photographers[1]);
// console.log(valeurDeRecherche);
// console.log(photographers);

// let url = document.URL;
// let p = document.querySelector(".p");
// p.innerHTML=url;

// let element = [];
// for (let i = 0; i < valeurDeRecherche.length; i++) {
//         console.log(valeurDeRecherche[i].name);
//         const resultat = photographers.filter(elt => valeurDeRecherche[i].name === elt.name);
//         if (resultat.length > 0){
//            for (let i = 0; i < resultat.length; i++) {
//                  element.push(resultat[i]);
//            }     
//         }
// }
// //const resultat = tableauDeDonne.filter(elt => valeurDeRecherche === elt);



// const bouton = document.querySelector('.btn');
// const bouton1 = document.querySelector('.btn1');

// bouton1.addEventListener('click',()=>{
//         var compteur = 0;
//         if (compteur <= 0) {
//                 compteur++;
//         } else {
//                  compteur--;  
//         }
// });




// let responses = [];
// bouton.addEventListener("click", function (event) {

//         console.log(event);
//         const search = bouton.textContent;
//         let valeurDeRecherches =[];
//         let compteur = 0;
//         if(compteur <= 0){
//                 compteur++;
//                 valeurDeRecherches.push(search);
//         }else{
//                 valeurDeRecherches.splice(search);  
//         }

// for (let i = 0; i < valeurDeRecherches.length; i++) {
//         const resultats = tableauDeDonne.filter(elt => elt === valeurDeRecherches[i]);
//         if (resultats.length > 0){
//            for (let e = 0; e < resultats.length; e++) {
//                 responses.push(resultats[e]);
//            }  
         
//         }
// }});
// //alert(responses)
