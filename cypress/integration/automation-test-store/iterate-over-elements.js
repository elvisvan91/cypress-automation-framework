/// <reference types="Cypress" />
describe("Verify variable, cypress commands and jquery commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("[href*='=product/category&path=']").contains("Hair Care").click();
  })
  it("Navigate to specific product page", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
      cy.log(`Index ${index}: ${$el.text()}`);
    });
  });

  it("Navigate to specific product page", () => {
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if ($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct("Curls to straight Shampoo");
  });

  it.only("another product", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
});
