/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click();
    })

    it("Check and validate checkbox", () => {
        cy.get("[value='option-1']").check().should('be.checked')
        cy.get("[value='option-3']").uncheck().should('be.not.checked')

    });

    it.only("Check multiple checkbox", () => {
        cy.get("[value='option-3']").uncheck().should('be.not.checked')
        cy.get("[type='checkbox']").check(['option-3', 'option-4']).should('be.checked')

    });
});
