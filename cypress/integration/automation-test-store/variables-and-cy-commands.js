/// <reference types="Cypress" />
describe("Verify variable, cypress commands and jquery commands", () => {
  it("Navigate to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    // const makeupLink = cy
    //   .get("[href*='=product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("[href*='=product/category&path=']")
    //   .contains("Skincare");
    // skincareLink.click();
    cy.get("[href*='=product/category&path=']").contains("Makeup").click();
    cy.get("[href*='=product/category&path=']").contains("Skincare").click();
  });

  it("Navigate to specific product page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("[href*='=product/category&path=']").contains("Makeup").click();

    // Following code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    // using then
    cy.get("h1 .maintext").then((headerText) => {
      const headerTextP = headerText.text();
      cy.log(`Found header text: ${headerTextP}`);
      expect(headerTextP).is.eq("Makeup");
    });
  });

  it("Validate properties of Contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //Uses cypress commands and chaining
    cy.get("#ContactUsFrm").find("#field_11").should("contain", "First name:");

    // JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstName = text.find("#field_11").text();
      expect(firstName).to.contain("First name");
    });
    //Embedded commands (Closure)
  });
});
