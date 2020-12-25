/// <reference types="Cypress" />

describe("Test contact us form via automation store", () => {
  before(() => {
    cy.viewport("iphone-8");
    cy.fixture("userDetails.json").as("user");
  });
  it(
    "Should be able to submit a successful submision via contact us form",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    () => {
      cy.visit("https://automationteststore.com/");
      // cy.xpath("//a[contains(@href, 'contact')]").click()
      cy.get("a[href$='contact']")
        .click()
        .then((linkText) => {
          cy.log(`Link text is: ${linkText.text()}`);
        });
      cy.get("@user").then((user) => {
        cy.get("#ContactUsFrm_first_name").type(user.first_name);
        cy.get("#ContactUsFrm_email").type(user.email);
      });

      cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
      cy.get("#ContactUsFrm_enquiry").type("chieu nay cha co gi hot");
      cy.get("button[title='Submit']").click();
      cy.get(".contentpanel").should(
        "contain.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
      cy.log("Test has completed");
    }
  );
});
