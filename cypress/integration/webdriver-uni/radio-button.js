/// <reference types="Cypress" />

describe("Verify radio butotn", () => {
    it("Check specific radio button", () => {
        //cyypress code
        // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
        // cy.get('#radio-buttons').find("[type='radio']").check('green')
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check().should('be.checked')


        cy.get("[value='cabbage']").should('be.disabled')
    });

});
