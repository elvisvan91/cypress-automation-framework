/// <reference types="Cypress" />

describe("Handling iframe and modals", () => {
    it("handle webdriveruni iframe and modal", () => {
        //cyypress code
        // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://webdriveruniversity.com");
        cy.get("#iframe").invoke("removeAttr", "target").click();
        cy.get("#frame").then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should($expectedText => {
            const text = $expectedText.text()
            expect(text).to.include("Welcome to webdriveruniversity")
        })
        cy.get('@modal').contains('Close').click()
    });
});
