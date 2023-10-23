// import manageDom from "/components/ManageDom.js";
import ManageDom from "../script/components/ManageDom.js"
export default class Contact extends ManageDom {
    constructor (firstName, lastName, status, mail, numberPhone, message){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.mail = mail;
        this.number = numberPhone;
        this.message = message;

        this.dom_elements = this.render();
    }
    render(){
        const section = this.createMarkup("section", "", document.body)
    }
}
// constructor (firstName, lastName, status, mail, numberPhone, message){
//     super();
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.status = status;
//     this.mail = mail;
//     this.number = numberPhone;
//     this.message = message;
// }

// const manageDom = new ManageDom();
// const userForm = document.getElementById('userForm');

// userForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // Récupérez les valeurs du formulaire
//   const nom = document.getElementById('nom').value;
//   const prenom = document.getElementById('prenom').value;
//   const status = document.getElementById('status').value;
//   const email = document.getElementById('email').value;
//   const numero = document.getElementById('numero').value;
//   const message = document.getElementById('message').value;

//   // Vous pouvez utiliser ces valeurs pour créer une instance du formulaire
//   const formulaire = {
//     nom,
//     prenom,
//     status,
//     email,
//     numero,
//     message
//   };

//   // Exemple de création d'un élément DOM pour afficher les données
//   const outputDiv = document.createElement('div');
//   manageDom.createMarkup('p', `Nom : ${formulaire.nom}`, outputDiv);
//   manageDom.createMarkup('p', `Prénom : ${formulaire.prenom}`, outputDiv);
//   manageDom.createMarkup('p', `Status : ${formulaire.status}`, outputDiv);
//   manageDom.createMarkup('p', `Email : ${formulaire.email}`, outputDiv);
//   if (formulaire.numero) {
//     manageDom.createMarkup('p', `Numéro de téléphone : ${formulaire.numero}`, outputDiv);
//   }
//   if (formulaire.message) {
//     manageDom.createMarkup('p', `Message : ${formulaire.message}`, outputDiv);
//   }

//   // Ajoutez le contenu au document
//   document.body.appendChild(outputDiv);
// });
