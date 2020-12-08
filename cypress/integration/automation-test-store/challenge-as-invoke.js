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

  it.only("Calculate total of normal and sale product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productHomePage");
    // cy.get("@productHomePage")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text().substring(1));
    //   });

    cy.get("@productHomePage").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@productHomePage")
      .find(".pricenew")
      .invoke("text")
      .as("itemPriceNew");
    var itemTotal = 0;
    var itemTotalNewPrice = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var totalOneprice = 0;
      var itemPrice = $linkText.split("$");
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        totalOneprice += Number(itemPrice[i]);
      }
      itemTotal += totalOneprice;
      cy.log(`Total oneprice item is: ${itemTotal}`);
    });

    cy.get("@itemPriceNew").then(($linkText) => {
      var totalOneprice = 0;
      var itemPriceNew = $linkText.split("$");
      for (var i = 0; i < itemPriceNew.length; i++) {
        cy.log(itemPriceNew[i]);
        totalOneprice += Number(itemPriceNew[i]);
      }
      itemTotalNewPrice += totalOneprice;
      cy.log(`Total new price item is: ${itemTotalNewPrice}`);
    });
  });
});
