/// <reference types="Cypress" />

describe("Inspect Automation test store items using chain of commands", () => {
  it("Click on the first item using text", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get("[title='Skinsheen Bronzer Stick']").click();
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });

  it("Click on the first item using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
