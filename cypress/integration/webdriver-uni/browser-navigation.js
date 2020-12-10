/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
    it.only("Confirm links redirect to the correct pages", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ froce: true });
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.url().should('not.include', 'contactus')
        cy.reload()
        // cy.reload(true) //without usng cache
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get("#login-portal").invoke("removeAttr", "target").click({ froce: true });


    });

});
