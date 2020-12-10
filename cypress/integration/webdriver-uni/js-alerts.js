/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
    });
    it("Confirm js alert contains the correct text when cliking ok", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
        cy.get("#confirm-alert-text").should("contain.text", "You pressed OK!")
    });

    it("Confirm js alert contains the correct text when cliking ok", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
        cy.get("#confirm-alert-text").should("contain.text", "You pressed Cancel!")
    });

    it.only("Confirm js alert with stub", () => {
        //cyypress code
        cy.visit("http://webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            cy.get("#confirm-alert-text").should("contain.text", "You pressed OK!")
        })

    });
})
