/// <reference types='Cypress' />
class Contact_US_PO {
    constructor() {
        this.first_name = "[name='first_name']",
            this.last_name = "[name='last_name']",
            this.email = "[name='email']",
            this.comment = "[name='message']",
            this.submit_button = "[type='submit']"
    }

    contactForm_Submission(first_name, last_name, email, comment, $selector, textLocate) {
        cy.get(this.first_name).type(first_name);
        cy.get(this.last_name).type(last_name);
        cy.get(this.email).type(email);
        cy.get(this.comment).type(comment);
        cy.get(this.submit_button).click();
        cy.get($selector).should("contain.text", textLocate);
    }
}
export default Contact_US_PO;