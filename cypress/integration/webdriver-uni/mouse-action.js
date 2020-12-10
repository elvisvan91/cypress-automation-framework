/// <reference types="Cypress" />

describe("Test mouse action", () => {
    it("Scroll element into view", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    })
    it("I should be able to drag and drop a draggable", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    })
    it("I should be able to double click", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
        cy.get('#double-click').dblclick()
    })
    it.only("I should be able to hold down the left mouse click button on a given element", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then($element => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
});
