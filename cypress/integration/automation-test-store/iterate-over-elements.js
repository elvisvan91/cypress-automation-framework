/// <reference types="Cypress" />
describe("Verify variable, cypress commands and jquery commands", () => {
  it("Navigate to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("[href*='=product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index) => {
      cy.log(`Index ${index}: ${$el.text()}`);
    });
  });

  it("Navigate to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("[href*='=product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
