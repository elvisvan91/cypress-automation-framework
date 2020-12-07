/// <reference types="Cypress" />

describe("Test contact us form via webdriverUni", () => {
    it("Should be able to submit a successful submision via contact us form", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Vo')
        cy.get('[name="last_name"]').type('Thanh Van')
        cy.get('[name="email"]').type('vothanhvan@gmail.com')
        cy.get('[name="message"]').type('lan dau tien hoc cypress, that la vl')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!')

    });

    it("Should not be able to submit a successful submision via contact us form as all fields are required", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Vo')
        cy.get('[name="last_name"]').type('Thanh Van')
        cy.get('[name="message"]').type('lan dau tien hoc cypress, that la vl')
        cy.get('[type="submit"]').click()
    });

})