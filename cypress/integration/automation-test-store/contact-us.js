/// <reference types="Cypress" />


describe("Test contact us form via automation store", () => {
    it("Should be able to submit a successful submision via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get("a[href$='contact']").click()
        cy.get('#ContactUsFrm_first_name').type('VoT')
        cy.get('#ContactUsFrm_email').type('haha@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('chieu nay cha co gi hot')
        cy.get("button[title='Submit']").click()
        cy.get('.contentpanel').should('contain.text', "Your enquiry has been successfully sent to the store owner!")
    })
})