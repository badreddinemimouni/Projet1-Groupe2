import ManageDom from "./ManageDom.js"
export default class Contact extends ManageDom {
    constructor() {
        super();
        this.dom_elements = this.render();
        this.manageEvents();
    }

    render() {
        const form = this.createMarkup("form", "", document.body);

        // Titre et texte
        this.createMarkup("h1", "Contactez nous", form);
        this.createMarkup("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", form);

        // Nom
        const input_name = this.createMarkup("input", "", form, [{ type: "text" }, { placeholder: "Nom" }, { required: "required" }]);

        // Choix status
        const select_status = this.createMarkup("select", "", form);
        // LES STATUS : 
        const option_status = this.createMarkup("option","Votre status", select_status, [{required : "required"}]);
        const option_influenceur = this.createMarkup("option","Influenceur", select_status);
        const option_finance = this.createMarkup("option","Financer", select_status);
        const option_test = this.createMarkup("option","Testeur", select_status);
        const option_autres = this.createMarkup("option","Autres", select_status);

        // Email
        const email = this.createMarkup("input", "", form, [{ type: "email" }, { placeholder: "johnedoe@email.fr" }, { required: "required" }]);

        // Numéro de téléphone
        const number = this.createMarkup("input", "", form, [{ type: "tel" }, { placeholder: "0612345678" }, { required: "required" }]);

        // Message
        const message = this.createMarkup("textarea", "", form, [{ placeholder: "Laisse nous un message" }, { required: "required" }]);

        // CHECKBOX 1
        const div_checkbox = this.createMarkup("div","", form, [{class : "checkbox-container"}])
        const checkbox_newsletter = this.createMarkup("input" , "", div_checkbox , [{type : "checkbox"}, {id : "newsletter"}]);
        const label_newsletter = this.createMarkup("label" , "NEWSLETTER" ,  div_checkbox, [{for : "newsletter"}]);

        // CHECKBOX 2  
        const div_checkbox2 = this.createMarkup("div","", form, [{class : "checkbox-container"}])
        const checkbox_info = this.createMarkup("input" , "", div_checkbox , [{type : "checkbox"}, {id : "newsletter"}]);
        const label_info = this.createMarkup("label" , "Info" ,  div_checkbox, [{for : "newsletter"}]);

        // Bouton
        const button_sub = this.createMarkup("button", "Envoyer", form);

        return {
            input_name,
            email,
            number,
            message,
            button_sub
        };
    }

    manageEvents() {
        const form = document.querySelector("form");
        const { input_name, email, number, message } = this.dom_elements;

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (form.checkValidity()) {
                // Le formulaire est valide, afficher un message de confirmation.
                this.displayConfirmation();
            } else {
                // Le formulaire n'est pas valide, afficher un message d'erreur.
                this.displayError();
            }
        });
    }

      // ...
displayConfirmation() {
    // Créez un élément de confirmation
    const confirmationMessage = this.createMarkup("h1", "Message envoyé avec succès ! Merci.", document.body);

    // Ajoutez la classe d'animation
    confirmationMessage.classList.add('confirmation-animation');

    // Retirez la classe après un certain délai (facultatif)
    setTimeout(() => {
        confirmationMessage.classList.remove('confirmation-animation');
        
    }, 1000); // Supprime la classe après 1 seconde (vous pouvez ajuster le délai)
    
    // Supprime le formulaire
    const form = document.querySelector("form");
    form.remove();
}



    displayError() {
        alert("Veuillez remplir tous les champs obligatoires.");
    }
}


