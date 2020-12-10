/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {
        //cyypress code
        // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
        cy.get("[value='option-1']").check().should('be.checked')
        cy.get("[value='option-3']").uncheck().should('be.not.checked')

    });

    it.only("Check multiple checkbox", () => {
        //cyypress code
        // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
        cy.get("[value='option-3']").uncheck().should('be.not.checked')

        cy.get("[type='checkbox']").check(['option-3', 'option-4']).should('be.checked')

    });
});
