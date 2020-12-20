/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_US_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";

describe("Test contact us form via webdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const homepage_PO = new HomePage_PO();
  const contact_us = new Contact_US_PO();

  before(() => {
    cy.fixture("example.json").then((data) => {
      // this.data = data
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homepage_PO.visitHomePage();
    homepage_PO.clickOn_ContactUs_Button();
  });

  it("Should be able to submit a successful submision via contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "Contact-Us/contactus.html");
    contact_us.contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      data.body,
      "#contact_reply",
      "Thank You for your Message2!"
    );
  });

  it("Should not be able to submit a successful submision via contact us form as all fields are required", () => {
    contact_us.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      data.body,
      "body",
      "Error: Invalid email address"
    );
  });
});
