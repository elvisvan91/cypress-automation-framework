/// <reference types="Cypress" />

describe("Challenge", () => {
  it("Count number of item on home page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productHomePage");
    cy.get("@productHomePage").its("length").should("eq", 16);
    cy.get("@productHomePage").should("have.length", 16);
  });

  it("Every thumbnal has title Add to Cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productHomePage");
    cy.get("@productHomePage")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
});
