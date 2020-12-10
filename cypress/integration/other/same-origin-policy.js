/// <reference types='Cypress' />

describe("Cypress web security", () => {
    it("Validate visting two differnce domains", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.visit("https://google.com/")
    })

    it("Validate visting two differnce domains via user actions", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get("#automation-test-store").invoke("removeAttr", "target").click()
    })
})