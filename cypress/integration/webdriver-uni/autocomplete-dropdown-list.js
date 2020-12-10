/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSeletc = 'Avacado'

            if (prod === productToSeletc) {
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSeletc)
            }
        })

    })
});
