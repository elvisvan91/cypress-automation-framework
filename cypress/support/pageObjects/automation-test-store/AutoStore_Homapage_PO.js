/// <reference types='Cypress' />
class AutoStore_Homepage_PO {
    accessHomePage() {
        cy.visit("https://automationteststore.com/", { timeout: 60000 })
    }

    clickOn_HairCare_Link() {
        cy.get("[href*='=product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_Homepage_PO;