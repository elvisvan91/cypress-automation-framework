/// <reference types="Cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homapage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/Automation_HairCare_PO'

describe("Add multiple items to basket", () => {
    const autoStore_Homepage = new AutoStore_Homepage_PO()
    const autoStore_HairCare = new AutoStore_HairCare_PO()

    before(() => {
        cy.fixture('products.json').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        autoStore_Homepage.accessHomePage()
        autoStore_Homepage.clickOn_HairCare_Link()
    })

    it("Add specific items to basket", () => {
        autoStore_HairCare.addHairCareProductsToBasket()
    });
});


