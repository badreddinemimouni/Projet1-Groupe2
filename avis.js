const avis = document.getElementById("texteArea");
const bouton = document.getElementById("bouton");
let donneesJSON = []; // Tableau pour stocker les données

bouton.addEventListener("click", function() {
    const valeur = avis.value;
    const nouvelleDonnee = { avis: valeur };
    donneesJSON.push(nouvelleDonnee);
    console.log(donneesJSON);
});
